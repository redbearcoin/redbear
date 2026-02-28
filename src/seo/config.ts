export const SITE_URL = "https://redbear.vercel.app";

export const LOCALES = ["en", "ja", "fr", "de", "es", "pt-pt", "id", "zh-cn", "zh-tw"] as const;
export type Locale = (typeof LOCALES)[number];

export const PAGES = ["/", "/about", "/tokenomics", "/how-to-buy", "/community", "/chart"] as const;
