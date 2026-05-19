"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Package,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    emoji: "🤖",
    title: "AI scans the treasure islands",
    description:
      "Every day, your robot treasure hunter watches TikTok, Etsy, Amazon, Instagram, YouTube, and Gumroad — finding what thousands of people are buying RIGHT NOW.",
    color: "from-accent to-accent-light",
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "It spots what's trending",
    description:
      "Most people don't know what to sell, what's trending, or how people make money online. SimplyPDF tells you exactly what's working — before everyone else catches on.",
    color: "from-gold to-hot-light",
  },
  {
    icon: Package,
    emoji: "🎁",
    title: "It builds your whole business",
    description:
      "Say 'I want a faceless TikTok business' and AI gives you a business name, product ideas, prices, TikTok hooks, ads, emails, landing pages — everything.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "You launch like a pro",
    description:
      "Even beginners feel like online business experts. Instead of spending months guessing, you launch a business around what's ALREADY working on the internet.",
    color: "from-hot to-hot-light",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent mb-6">
            <span className="text-base">🗺️</span>
            How the treasure map machine works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Imagine the internet is a{" "}
            <span className="text-gradient">giant treasure island</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Millions of people buying things every day — and most people have no idea
            what to sell, what&apos;s trending, or how to start.
            SimplyPDF is your robot treasure hunter.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-primary/50 to-hot/50 hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex flex-col sm:flex-row items-center gap-6 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.emoji}</span>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
