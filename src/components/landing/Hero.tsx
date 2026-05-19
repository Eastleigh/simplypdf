"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  Rocket,
  ArrowRight,
  Play,
} from "lucide-react";

const stats = [
  { value: "12,000+", label: "Trends Tracked Daily" },
  { value: "3,400+", label: "Members Earning" },
  { value: "$2.4M+", label: "Revenue Generated" },
  { value: "24hrs", label: "Avg. Time to First Sale" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Your AI Treasure Hunter</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Find what&apos;s selling.{" "}
            <span className="text-gradient">Launch your business.</span>{" "}
            <span className="text-gradient">Today.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            SimplyPDF is an AI treasure hunter that finds what people are
            buying online right now — then builds you a ready-to-launch business
            around it. Even if you&apos;re starting from zero.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white glow-primary hover:scale-105 transition-transform"
            >
              <Rocket className="w-5 h-5" />
              Start Free — Build Your Business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ai-builder"
              className="flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl glass text-foreground hover:bg-surface-light transition-colors"
            >
              <Play className="w-4 h-4 text-accent" />
              Watch AI Demo
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted"
          >
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              Live trend updates
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Cancel anytime</span>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
