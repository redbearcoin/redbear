import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import { Wallet, ArrowRightLeft, ShoppingCart, PartyPopper } from "lucide-react";

const HowToBuy = () => {
  const { t } = useLocale();

  const steps = [
    { icon: Wallet, title: t("howToBuy.step1Title"), desc: t("howToBuy.step1Desc") },
    { icon: ArrowRightLeft, title: t("howToBuy.step2Title"), desc: t("howToBuy.step2Desc") },
    { icon: ShoppingCart, title: t("howToBuy.step3Title"), desc: t("howToBuy.step3Desc") },
    { icon: PartyPopper, title: t("howToBuy.step4Title"), desc: t("howToBuy.step4Desc") },
  ];

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

            <div className="mt-10 rounded-xl border border-primary/30 bg-card p-6 glow-red-sm">
              <h2 className="text-xl font-bold text-foreground mb-2">{t("howToBuy.disclaimerTitle")}</h2>
              <p className="text-sm text-muted-foreground">{t("howToBuy.disclaimerBody")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowToBuy;
