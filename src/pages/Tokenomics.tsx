import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";

const Tokenomics = () => {
  const { t } = useLocale();

  const tokenData = [
    { label: t("tokenomics.totalSupply"), value: "1,000,000,000", sub: "$BEARISH" },
    { label: t("tokenomics.burned"), value: "40%", sub: t("tokenomics.burnedSub") },
    { label: t("tokenomics.lp"), value: "30%", sub: t("tokenomics.lpSub") },
    { label: t("tokenomics.communityRewards"), value: "20%", sub: t("tokenomics.communitySub") },
    { label: t("tokenomics.team"), value: "10%", sub: t("tokenomics.teamSub") },
  ];

  return (
    <>
      <SEOHead title={t("tokenomics.seoTitle")} description={t("tokenomics.seoDesc")} path="/tokenomics" />

      <section className="bg-grid">
        <div className="container py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">{t("tokenomics.title")}</h1>
            <p className="text-muted-foreground mb-10 text-lg">{t("tokenomics.subtitle")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {tokenData.map((td, i) => (
                <motion.div
                  key={td.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm text-muted-foreground mb-1">{td.label}</p>
                  <p className="text-3xl font-bold text-foreground">{td.value}</p>
                  <p className="text-xs text-primary mt-1">{td.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{t("tokenomics.taxTitle")}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">{t("tokenomics.buyTax")}</p>
                  <p className="text-2xl font-bold text-foreground">0%</p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">{t("tokenomics.sellTax")}</p>
                  <p className="text-2xl font-bold text-foreground">0%</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t("tokenomics.taxDesc")}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 mt-4">
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("tokenomics.contractTitle")}</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">{t("tokenomics.network")}</span>
                  <span className="text-foreground font-medium">Solana</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">{t("tokenomics.ticker")}</span>
                  <span className="text-primary font-bold">$BEARISH</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">{t("tokenomics.ownership")}</span>
                  <span className="text-foreground font-medium">{t("tokenomics.ownershipVal")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
