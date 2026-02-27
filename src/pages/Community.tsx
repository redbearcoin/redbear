import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";
import { ExternalLink } from "lucide-react";

const Community = () => {
  const { t } = useLocale();

  const socials = [
    { name: "𝕏 (Twitter)", url: "https://x.com/RedBearCoins", desc: t("community.twitterDesc"), emoji: "🐦" },
    { name: "Discord", url: "https://discord.gg/WVeDP5j8", desc: t("community.discordDesc"), emoji: "💬" },
  ];

  return (
    <>
      <SEOHead title={t("community.seoTitle")} description={t("community.seoDesc")} path="/community" />

      <section className="bg-grid">
        <div className="container py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">{t("community.title")}</h1>
            <p className="text-muted-foreground mb-10 text-lg">{t("community.subtitle")}</p>

            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.emoji}</span>
                      <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
                    </div>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("community.becomeTitle")}</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">{t("community.becomeDesc")}</p>
              {/* *
              // HIDDEN: Bear count - uncomment when ready to show
              // <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-6 py-3 text-primary font-semibold">
              //   {t("community.bearCount")}
              // </div>
              * */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Community;
