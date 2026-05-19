"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";

const nextSteps = [
  "Check your email for login details",
  "Explore today's trending niches",
  "Run your first AI business plan",
  "Join the community & share your wins",
];

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[200px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-lg mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to{" "}
          <span className="text-gradient">SimplyPDF</span>
        </h1>

        <p className="text-lg text-muted mb-10">
          Your payment was successful. You&apos;re now part of the community
          making money with AI-powered business discovery.
        </p>

        <div className="glass rounded-2xl p-6 mb-10 text-left">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-accent mb-4">
            <Sparkles className="w-4 h-4" />
            Your next steps
          </h3>
          <ul className="space-y-3">
            {nextSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white glow-primary hover:scale-105 transition-transform"
        >
          <Rocket className="w-5 h-5" />
          Go to Dashboard
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <p className="mt-6 text-xs text-muted">
          Questions? Reach us at support@simplypdf.com
        </p>
      </motion.div>
    </div>
  );
}
