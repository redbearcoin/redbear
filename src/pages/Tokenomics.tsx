import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const tokenData = [
  { label: "Total Supply", value: "1,000,000,000", sub: "$BEARISH" },
  { label: "Burned", value: "40%", sub: "400M tokens" },
  { label: "Liquidity Pool", value: "30%", sub: "Locked forever" },
  { label: "Community & Rewards", value: "20%", sub: "Airdrops & memes" },
  { label: "Team", value: "10%", sub: "Vested 12 months" },
];

const Tokenomics = () => (
  <>
    <SEOHead
      title="Tokenomics"
      description="Explore the tokenomics of $BEARISH — total supply, burn rate, liquidity, and distribution details."
      path="/tokenomics"
    />

    <section className="bg-grid">
      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">Tokenomics</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Simple. Transparent. Honestly bearish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {tokenData.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
              >
                <p className="text-sm text-muted-foreground mb-1">{t.label}</p>
                <p className="text-3xl font-bold text-foreground">{t.value}</p>
                <p className="text-xs text-primary mt-1">{t.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Tax Structure</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm text-muted-foreground">Buy Tax</p>
                <p className="text-2xl font-bold text-foreground">0%</p>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm text-muted-foreground">Sell Tax</p>
                <p className="text-2xl font-bold text-foreground">0%</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              No hidden taxes. No sneaky fees. What you see is what you get — which, if you've been paying attention, is a dip.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 mt-4">
            <h2 className="text-2xl font-bold text-foreground mb-3">Contract Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Network</span>
                <span className="text-foreground font-medium">Solana</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Ticker</span>
                <span className="text-primary font-bold">$BEARISH</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Ownership</span>
                <span className="text-foreground font-medium">Renounced</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Tokenomics;
