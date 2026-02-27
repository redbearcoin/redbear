import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import { Wallet, ArrowRightLeft, ShoppingCart, Clock } from "lucide-react";

const HowToBuy = () => {
  const { t } = useLocale();

  // STATE 1: Bonding Curve (active - not graduated yet)
  const steps = [
    { icon: Wallet, title: t("howToBuy.step1Title"), desc: t("howToBuy.step1Desc") },
    { icon: ArrowRightLeft, title: t("howToBuy.step2Title"), desc: t("howToBuy.step2Desc") },
    { icon: ShoppingCart, title: t("howToBuy.step3Title"), desc: t("howToBuy.step3Desc") },
    { icon: Clock, title: t("howToBuy.step4Title"), desc: t("howToBuy.step4Desc") },
  ];

  /* *
  // STATE 2: DEX (post-graduation) - uncomment when graduated to DEX
  // const dexSteps = [
  //   { icon: Wallet, title: "1. Get a Wallet", desc: "Download Phantom or any Solana-compatible wallet." },
  //   { icon: ArrowRightLeft, title: "2. Get SOL", desc: "Buy SOL from an exchange like Coinbase, Binance, or Kraken." },
  //   { icon: ShoppingCart, title: "3. Swap for $BEARISH", desc: "Go to Raydium or Jupiter. Connect your wallet, paste the $BEARISH contract address, and swap your SOL for $BEARISH tokens." },
  //   { icon: PartyPopper, title: "4. Embrace the Dip", desc: "Congratulations! You now own $BEARISH. Sit back, relax, and watch your investment do exactly what we promised." },
  // ];
  * */

  return (
    <>
      <SEOHead title={t("howToBuy.seoTitle")} description={t("howToBuy.seoDesc")} path="/how-to-buy" />

      <section className="bg-grid">
        <div className="container py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">{t("howToBuy.title")}</h1>
            <p className="text-muted-foreground mb-10 text-lg">{t("howToBuy.subtitle")}</p>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-xl border border-border bg-card p-6 flex gap-5 items-start hover:border-primary/30 transition-colors"
                >
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{t("howToBuy.disclaimerTitle")}</h3>
              <p className="text-sm text-muted-foreground">{t("howToBuy.disclaimerBody")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowToBuy;
