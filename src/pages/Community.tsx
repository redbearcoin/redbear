import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ExternalLink } from "lucide-react";

const socials = [
  {
    name: "𝕏 (Twitter)",
    url: "https://x.com/RedBearCoins",
    desc: "Follow us for the latest bearish updates, memes, and community highlights.",
    emoji: "🐦",
  },
  {
    name: "Reddit",
    url: "https://reddit.com/RedBearCoins",
    desc: "Join the subreddit for deep discussions, loss porn, and bear market wisdom.",
    emoji: "🤖",
  },
  {
    name: "Discord",
    url: "https://discord.com/RedBearCoins",
    desc: "Hop into our Discord server for real-time chat, voice channels, and community events.",
    emoji: "💬",
  },
];

const Community = () => (
  <>
    <SEOHead
      title="Community"
      description="Join the $BEARISH community on Twitter, Reddit, and Discord. Connect with fellow bears embracing the dip."
      path="/community"
    />

    <section className="bg-grid">
      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">Community</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Misery loves company. And memes. Mostly memes.
          </p>

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
            <h2 className="text-2xl font-bold text-foreground mb-3">Become a Bear</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              The $BEARISH community is growing every day. Join us and be part of the most honest movement in crypto history.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-6 py-3 text-primary font-semibold">
              🐻 Over 10,000 Bears and counting
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Community;
