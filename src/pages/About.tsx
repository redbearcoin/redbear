import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import logo from "@/assets/logo.png";

const About = () => (
  <>
    <SEOHead
      title="About"
      description="Learn about $BEARISH (Red Bear Coin) — the most transparent downward trend in crypto. Built on honesty, powered by memes."
      path="/about"
    />

    <section className="bg-grid">
      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <img src={logo} alt="Red Bear Coin" className="h-14 w-14 rounded-full glow-red-sm" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-red">About $BEARISH</h1>
              <p className="text-muted-foreground">Red Bear Coin</p>
            </div>
          </div>

          <div className="space-y-6 text-secondary-foreground leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-foreground">$BEARISH</span> (Red Bear Coin) is the only token honest enough to promise you exactly what the name says: <span className="text-primary font-semibold">a permanent dip.</span>
            </p>

            <p>
              While others lie about going to the moon, we're chilling in the red with our shades on, embracing the bloodbath. Stop the cope and join the most transparent downward trend in crypto — because with $BEARISH, the only way is down.
            </p>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Why $BEARISH?</h2>
              <ul className="space-y-3">
                {[
                  "No false promises — we tell you exactly what you're getting",
                  "Community-driven culture of radical honesty",
                  "Meme-powered, community-validated, zero hype",
                  "Built for those tired of 'to the moon' narratives",
                  "Embrace the bear market with style and humor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground">
                In a market saturated with empty promises and fake optimism, $BEARISH stands as a beacon of brutal honesty. We believe that the crypto space needs a token that tells it like it is. Our mission is simple: be the most transparent, most honest, and most entertaining token in the entire crypto ecosystem. We don't promise lambos. We promise laughs.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">The Bear Manifesto</h2>
              <p className="text-muted-foreground italic">
                "We, the bears of crypto, do solemnly swear to never pump-and-dump, never shill false promises, and never pretend the chart is 'just consolidating.' We embrace the red. We wear it as armor. We are $BEARISH."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
