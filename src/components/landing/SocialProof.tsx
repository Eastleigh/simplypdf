"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, DollarSign } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Digital Planner Creator",
    avatar: "SK",
    revenue: "$4,200/mo",
    quote:
      "I had zero experience. SimplyPDF told me exactly what to sell on Etsy, gave me the hooks, and I made my first sale in 2 days.",
    platform: "Etsy",
  },
  {
    name: "Marcus J.",
    role: "Faceless TikTok Creator",
    avatar: "MJ",
    revenue: "$7,800/mo",
    quote:
      "The trend scanner found a niche nobody was talking about. I launched a faceless TikTok account and hit 100K followers in 3 weeks.",
    platform: "TikTok",
  },
  {
    name: "Emily R.",
    role: "AI Prompt Seller",
    avatar: "ER",
    revenue: "$3,100/mo",
    quote:
      "I clicked 'Build My Business' and the AI literally gave me everything — name, landing page, email sequence. I just had to hit publish.",
    platform: "Gumroad",
  },
  {
    name: "David L.",
    role: "Template Designer",
    avatar: "DL",
    revenue: "$5,600/mo",
    quote:
      "The daily trend alerts are addictive. I check them every morning like I used to check Instagram. Except now I'm making money from it.",
    platform: "Etsy",
  },
  {
    name: "Priya N.",
    role: "Digital Product Creator",
    avatar: "PN",
    revenue: "$2,900/mo",
    quote:
      "Went from 'I don't know what to sell' to generating $2.9K per month in passive income. The AI builder changed everything for me.",
    platform: "Gumroad",
  },
  {
    name: "Alex T.",
    role: "Content Creator",
    avatar: "AT",
    revenue: "$6,400/mo",
    quote:
      "SimplyPDF isn't just a tool — it's like having a business coach that never sleeps. Found 3 profitable niches in my first week.",
    platform: "Multiple",
  },
];

const liveWins = [
  { user: "JennyM", action: "made first sale", amount: "$27", time: "2m ago" },
  { user: "TechBro99", action: "launched store", amount: "", time: "5m ago" },
  { user: "DianaC", action: "earned this week", amount: "$840", time: "12m ago" },
  { user: "SamuelK", action: "made first sale", amount: "$49", time: "18m ago" },
  { user: "CreativeAI", action: "hit milestone", amount: "$1,000", time: "25m ago" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Real people.{" "}
            <span className="text-gradient">Real results.</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Join 3,400+ members who discovered profitable businesses using AI.
          </p>
        </motion.div>

        {/* Live activity feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-4 mb-12 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent">Live Activity</span>
          </div>
          <div className="space-y-2">
            {liveWins.map((win, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between text-sm py-1.5 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-light flex items-center justify-center">
                    <DollarSign className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{win.user}</span>
                  <span className="text-muted">{win.action}</span>
                  {win.amount && (
                    <span className="text-accent font-semibold">{win.amount}</span>
                  )}
                </div>
                <span className="text-xs text-muted">{win.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sm text-muted leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-accent flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.revenue}
                  </div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        className="w-3 h-3 text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
