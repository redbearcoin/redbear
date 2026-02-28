import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, TrendingDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";

const CONTRACT_ADDRESS = "84YZWKQyi66XpgEkcQgx8TsshUz63oCKHfSxpkJpcray";
const DEXSCREENER_EMBED = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&info=0`;
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;

const Chart = () => {
  const { t, localePath } = useLocale();

  return (
    <>
      <SEOHead title={t("chart.seoTitle")} description={t("chart.seoDesc")} path="/chart" />

      <section className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="text-primary" size={28} />
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-gradient-red">{t("chart.title")}</span>
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xl">{t("chart.subtitle")}</p>

          {/* Price info bar */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm text-muted-foreground font-mono bg-card border border-border rounded-lg px-3 py-1.5 select-all">
              {CONTRACT_ADDRESS}
            </span>
            <span className="text-xs text-muted-foreground">Solana · Raydium</span>
            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              {t("chart.openDexScreener")} <ExternalLink size={14} />
            </a>
          </div>

          {/* DexScreener Chart */}
          <div className="rounded-xl border border-border overflow-hidden glow-red-sm bg-card">
            <iframe
              src={DEXSCREENER_EMBED}
              title="$BEARISH DexScreener Chart"
              className="w-full border-0"
              style={{ height: "600px" }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground mt-4">{t("chart.disclaimer")}</p>
        </motion.div>
      </section>
    </>
  );
};

export default Chart;
