import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, TrendingDown, Shield, Users, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import banner from "@/assets/banner.jpg";

const CONTRACT_ADDRESS = "84YZWKQyi66XpgEkcQgx8TsshUz63oCKHfSxpkJpcray";
const DEXSCREENER_EMBED = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&info=0`;

const Index = () => {
  const { t, localePath } = useLocale();

  const features = [
    { icon: TrendingDown, title: t("home.feature1Title"), desc: t("home.feature1Desc") },
    { icon: Shield, title: t("home.feature2Title"), desc: t("home.feature2Desc") },
    { icon: Users, title: t("home.feature3Title"), desc: t("home.feature3Desc") },
  ];

  return (
    <>
      <SEOHead title={t("home.seoTitle")} description={t("home.seoDesc")} path="/" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img src={logo} alt="RedBear" className="h-24 w-24 mx-auto rounded-full glow-red mb-6 animate-float" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-gradient-red">$BEARISH</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-3">
              {t("home.subtitle")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              {t("home.tagline")}
              <span className="text-primary font-semibold">{t("home.taglineHighlight")}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={localePath("/about")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
              >
                {t("home.learnMore")} <ArrowDown size={18} />
              </Link>
              <Link
                to={localePath("/how-to-buy")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-all hover:border-primary/50"
              >
                {t("home.howToBuy")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner */}
      <section className="container py-12">
        <div className="rounded-xl overflow-hidden border border-border glow-red-sm">
          <img src={banner} alt="RedBear banner" className="w-full h-auto" loading="lazy" />
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <f.icon className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border">
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("home.ctaTitle")} <span className="text-gradient-red">{t("home.ctaHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">{t("home.ctaDesc")}</p>
          <Link
            to={localePath("/how-to-buy")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
          >
            {t("home.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
