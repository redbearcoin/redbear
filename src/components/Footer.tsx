import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Red Bear Coin" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-gradient-red">$BEARISH</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            The most transparent downward trend in crypto. Because with $BEARISH, the only way is down.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/tokenomics", label: "Tokenomics" },
              { to: "/how-to-buy", label: "How to Buy" },
              { to: "/community", label: "Community" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Socials</h4>
          <div className="flex flex-col gap-2">
            <a href="https://x.com/RedBearCoins" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              𝕏 (Twitter)
            </a>
            <a href="https://reddit.com/RedBearCoins" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Reddit
            </a>
            <a href="https://discord.com/RedBearCoins" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Red Bear Coin. All rights reserved. Not financial advice. We literally told you it goes down.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
