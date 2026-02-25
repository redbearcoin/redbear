import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Wallet, ArrowRightLeft, ShoppingCart, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "1. Get a Wallet",
    desc: "Download Phantom or any Solana-compatible wallet. Set it up, write down your seed phrase, and guard it with your life (unlike your portfolio).",
  },
  {
    icon: ArrowRightLeft,
    title: "2. Get SOL",
    desc: "Buy SOL from an exchange like Coinbase, Binance, or Kraken. Transfer it to your wallet. You'll need it to swap for $BEARISH.",
  },
  {
    icon: ShoppingCart,
    title: "3. Swap for $BEARISH",
    desc: "Go to Raydium or Jupiter. Connect your wallet, paste the $BEARISH contract address, and swap your SOL for $BEARISH tokens.",
  },
  {
    icon: PartyPopper,
    title: "4. Embrace the Dip",
    desc: "Congratulations! You now own $BEARISH. Sit back, relax, and watch your investment do exactly what we promised.",
  },
];

const HowToBuy = () => (
  <>
    <SEOHead
      title="How to Buy"
      description="Step-by-step guide to buying $BEARISH (Red Bear Coin). Get a wallet, swap for tokens, and embrace the dip."
      path="/how-to-buy"
    />

    <section className="bg-grid">
      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-3">How to Buy</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Four simple steps to start losing money honestly.
          </p>

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
            <h2 className="text-xl font-bold text-foreground mb-2">⚠️ Disclaimer</h2>
            <p className="text-sm text-muted-foreground">
              $BEARISH is a meme token created for entertainment purposes. It is not financial advice. Always do your own research (DYOR) before investing in any cryptocurrency. We literally told you it goes down — don't say we didn't warn you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default HowToBuy;
