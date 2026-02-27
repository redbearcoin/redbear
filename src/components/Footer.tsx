import { Link } from "react-router-dom";
import { useLocale } from "@/i18n";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t, localePath } = useLocale();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="RedBear" className="h-8 w-8 rounded-full" />
              <span className="font-bold text-gradient-red">$BEARISH</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{t("footer.pages")}</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: t("nav.about") },
                { to: "/tokenomics", label: t("nav.tokenomics") },
                { to: "/how-to-buy", label: t("nav.howToBuy") },
                { to: "/community", label: t("nav.community") },
              ].map((l) => (
                <Link key={l.to} to={localePath(l.to)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{t("footer.socials")}</h4>
            <div className="flex flex-col gap-2">
              <a href="https://x.com/RedBearCoins" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                𝕏 (Twitter)
              </a>
              <a href="https://discord.gg/WVeDP5j8" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
