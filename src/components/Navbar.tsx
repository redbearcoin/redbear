import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, localePath, locale } = useLocale();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/tokenomics", label: t("nav.tokenomics") },
    { to: "/how-to-buy", label: t("nav.howToBuy") },
    { to: "/community", label: t("nav.community") },
  ];

  const isActive = (path: string) => {
    const { pathWithoutLocale } = (() => {
      const segments = location.pathname.split("/").filter(Boolean);
      // Remove locale prefix
      const locales = ["en", "ja", "fr", "de", "es", "pt-pt", "id", "zh-cn", "zh-tw"];
      if (segments.length >= 2) {
        const twoP = `${segments[0]}-${segments[1]}`;
        if (locales.includes(twoP)) return { pathWithoutLocale: "/" + segments.slice(2).join("/") || "/" };
      }
      if (segments[0] && locales.includes(segments[0])) return { pathWithoutLocale: "/" + segments.slice(1).join("/") || "/" };
      return { pathWithoutLocale: location.pathname };
    })();
    return pathWithoutLocale === path || (path !== "/" && pathWithoutLocale.startsWith(path));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to={localePath("/")} className="flex items-center gap-2">
          <img src={logo} alt="RedBear logo" className="h-9 w-9 rounded-full" />
          <span className="text-lg font-bold text-gradient-red">$BEARISH</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={localePath(l.to)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(l.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={localePath(l.to)}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    isActive(l.to) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
