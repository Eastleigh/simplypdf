"use client";

import { motion } from "framer-motion";
import { XCircle, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-radial" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md mx-auto px-4 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hot/20 flex items-center justify-center">
          <XCircle className="w-8 h-8 text-hot" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Checkout cancelled
        </h1>

        <p className="text-muted mb-8">
          No worries — nothing was charged. Your spot is still available
          if you change your mind.
        </p>

        <div className="glass rounded-xl p-4 mb-8 text-sm text-muted">
          <div className="flex items-center gap-2 justify-center">
            <Shield className="w-4 h-4 text-accent" />
            Remember: 30-day money-back guarantee on all plans
          </div>
        </div>

        <Link
          href="/#pricing"
          className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white glow-primary hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Plans
        </Link>
      </motion.div>
    </div>
  );
}
