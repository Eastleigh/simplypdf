"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Crown,
  Rocket,
  Zap,
  ArrowRight,
  Loader2,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    key: "starter",
    price: "$29",
    period: "one-time",
    description: "Perfect for curious beginners ready to explore",
    icon: Zap,
    color: "border-border",
    buttonStyle: "glass text-foreground hover:border-primary/40",
    features: [
      "Access to top 50 daily trends",
      "5 AI business idea generations",
      "Basic niche scoring",
      "Community access",
      "7-day trend history",
    ],
  },
  {
    name: "Pro",
    key: "pro",
    price: "$49",
    period: "/month",
    description: "For serious builders ready to launch and scale",
    icon: Rocket,
    color: "border-primary/50",
    popular: true,
    buttonStyle:
      "bg-gradient-to-r from-primary to-accent text-white glow-primary hover:scale-[1.02]",
    features: [
      "Unlimited daily trends across 8+ platforms",
      "Unlimited AI business builder",
      "Full business plans with hooks & funnels",
      "TikTok script generator",
      "Email sequence builder",
      "Landing page copy generator",
      "90-day trend analytics",
      "Priority community access",
      "Affiliate marketplace",
    ],
  },
  {
    name: "Enterprise",
    key: "enterprise",
    price: "$299",
    period: "/month",
    description: "Done-for-you AI business generation for agencies",
    icon: Crown,
    color: "border-gold/30",
    buttonStyle: "glass text-gold hover:border-gold/40",
    features: [
      "Everything in Pro",
      "Done-for-you business packages",
      "White-label reports",
      "API access for custom integrations",
      "Dedicated account manager",
      "Custom scraping sources",
      "Team collaboration (up to 10 seats)",
      "Priority support & onboarding",
    ],
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(planKey: string) {
    setLoading(planKey);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.assign(data.url);
      } else {
        console.error("Checkout error:", data.error);
        setLoading(null);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setLoading(null);
    }
  }

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Start making money{" "}
            <span className="text-gradient">this week</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            No hidden fees. No long contracts. Cancel anytime. Your first
            profitable digital product could launch in 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${plan.color} ${
                plan.popular ? "glow-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-white">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <plan.icon
                    className={`w-5 h-5 ${
                      plan.popular ? "text-primary-light" : "text-muted"
                    }`}
                  />
                  <span className="text-lg font-semibold">{plan.name}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.key)}
                disabled={loading !== null}
                className={`w-full py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${plan.buttonStyle}`}
              >
                {loading === plan.key ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted">
            30-day money-back guarantee on all plans. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
