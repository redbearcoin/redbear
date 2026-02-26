import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import logo from "@/assets/logo.png";

const About = () => {
  const { t } = useLocale();

  const whyItems = [
    t("about.why1"), t("about.why2"), t("about.why3"), t("about.why4"), t("about.why5"),
  ];

  return (
    <>
      <SEOHead title={t("about.seoTitle")} description={t("about.seoDesc")} path="/about" />

      <section className="bg-grid">
        <div className="container py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Red Bear Coin" className="h-14 w-14 rounded-full glow-red-sm" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-red">{t("about.title")}</h1>
                <p className="text-muted-foreground">{t("about.subtitle")}</p>
              </div>
            </div>

            <div className="space-y-6 text-secondary-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-foreground">$BEARISH</span> {t("about.intro")}
                <span className="text-primary font-semibold">{t("about.introHighlight")}</span>
              </p>

              <p>{t("about.body")}</p>

              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t("about.whyTitle")}</h2>
                <ul className="space-y-3">
                  {whyItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">{t("about.missionTitle")}</h2>
                <p className="text-muted-foreground">{t("about.missionBody")}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">{t("about.manifestoTitle")}</h2>
                <p className="text-muted-foreground italic">{t("about.manifestoBody")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
