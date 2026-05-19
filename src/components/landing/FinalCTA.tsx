"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight, Shield, Clock, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-gold mb-8">
            <Sparkles className="w-4 h-4" />
            Limited Launch Pricing — Lock in your rate forever
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Stop scrolling.{" "}
            <span className="text-gradient">Start earning.</span>
          </h2>

          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Every day you wait, someone else discovers the trend you missed.
            Join 3,400+ members who let AI find their next income stream.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white glow-primary hover:scale-105 transition-transform"
            >
              <Rocket className="w-5 h-5" />
              Start Free Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              Set up in under 5 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
