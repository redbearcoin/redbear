import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import { Link } from "react-router-dom";

const CHART_COLORS = ["hsl(340, 82%, 52%)", "hsl(200, 80%, 55%)", "hsl(280, 70%, 55%)"];

const Tokenomics = () => {
  const { t, localePath } = useLocale();

  const chartData = [
    { name: t("tokenomics.bondingCurve"), value: 65 },
    { name: t("tokenomics.lp"), value: 25 },
    { name: t("tokenomics.team"), value: 10 },
  ];

  const tokenCards = [
    { label: t("tokenomics.totalSupply"), value: t("tokenomics.totalSupplyVal"), sub: "$BEARISH" },
    { label: t("tokenomics.bondingCurve"), value: "65%", sub: t("tokenomics.bondingCurveSub") },
    { label: t("tokenomics.lp"), value: "25%", sub: t("tokenomics.lpSub") },
    { label: t("tokenomics.team"), value: "10%", sub: t("tokenomics.teamSub") },
  ];

  /* *
  // HIDDEN: Burned - uncomment when burn starts
  // { label: t("tokenomics.burned"), value: "0%", sub: "0 tokens" },
  // HIDDEN: Community & Rewards - uncomment when ready
  // { label: t("tokenomics.communityRewards"), value: "20%", sub: t("tokenomics.communitySub") },
  * */

  return (
    <>
      <SEOHead title={t("tokenomics.seoTitle")} description={t("tokenomics.seoDesc")} path="/tokenomics" />

      <section className="bg-grid">
        <div className="container py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">{t("tokenomics.title")}</h1>
            <p className="text-muted-foreground mb-10 text-lg">{t("tokenomics.subtitle")}</p>

            {/* Donut Chart + Legend */}
            <div className="rounded-xl border border-border bg-card p-6 mb-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-64 h-64 flex-shrink-0"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                        animationBegin={200}
                        animationDuration={1200}
                        animationEasing="ease-out"
                        stroke="none"
                      >
                        {chartData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          background: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--foreground))",
                        }}
                        formatter={(value: number) => [`${value}%`, ""]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>

                <div className="flex-1 space-y-4">
                  {chartData.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                      <div>
                        <p className="text-foreground font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.value}%</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Token Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {tokenCards.map((td, i) => (
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

            {/* Tax */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 mb-4">
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

            {/* Contract Details */}
            <div className="rounded-xl border border-border bg-card p-6 mb-4">
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

            {/* Early CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">{t("tokenomics.earlyTitle")}</h2>
              <p className="text-muted-foreground mb-4 max-w-lg mx-auto">{t("tokenomics.earlyDesc")}</p>
              <Link
                to={localePath("/how-to-buy")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
              >
                {t("tokenomics.earlyButton")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
