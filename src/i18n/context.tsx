import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import en from "./translations/en";
import ja from "./translations/ja";
import fr from "./translations/fr";
import de from "./translations/de";
import es from "./translations/es";
import ptPt from "./translations/pt-pt";
import id from "./translations/id";
import zhCn from "./translations/zh-cn";
import zhTw from "./translations/zh-tw";

export const SUPPORTED_LOCALES = [
  "en", "ja", "fr", "de", "es", "pt-pt", "id", "zh-cn", "zh-tw",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  "pt-pt": "Português",
  id: "Bahasa Indonesia",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
};

const translationMap: Record<Locale, Record<string, string>> = {
  en,
  ja,
  fr,
  de,
  es,
  "pt-pt": ptPt,
  id,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
};

interface LocaleContextType {
  locale: Locale;
  t: (key: string) => string;
  localePath: (path: string) => string;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

/** Extract locale and remaining path from a pathname */
export function parseLocaleFromPath(pathname: string): { locale: Locale; pathWithoutLocale: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  // Check if first segment is a known locale (handle multi-part like pt-pt, zh-cn)
  // Try two-part first (e.g., "pt-pt"), then single part
  if (segments.length >= 1) {
    const twoPartLocale = `${segments[0]}-${segments[1]}` as Locale;
    if (segments.length >= 2 && SUPPORTED_LOCALES.includes(twoPartLocale)) {
      const rest = "/" + segments.slice(2).join("/");
      return { locale: twoPartLocale, pathWithoutLocale: rest === "/" ? "/" : rest };
    }
  }

  if (first && SUPPORTED_LOCALES.includes(first as Locale)) {
    const rest = "/" + segments.slice(1).join("/");
    return { locale: first as Locale, pathWithoutLocale: rest === "/" ? "/" : rest };
  }

  return { locale: "en", pathWithoutLocale: pathname };
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { locale } = useMemo(() => parseLocaleFromPath(location.pathname), [location.pathname]);

  const t = (key: string): string => {
    return translationMap[locale]?.[key] ?? translationMap.en[key] ?? key;
  };

  const localePath = (path: string): string => {
    if (locale === "en") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  const setLocale = (newLocale: Locale) => {
    const { pathWithoutLocale } = parseLocaleFromPath(location.pathname);
    const newPath =
      newLocale === "en"
        ? pathWithoutLocale || "/"
        : `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    navigate(newPath);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, localePath, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};
