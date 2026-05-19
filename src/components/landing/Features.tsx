"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  TrendingUp,
  Gamepad2,
  Users,
  Smartphone,
  GraduationCap,
  BarChart3,
  Megaphone,
  Bot,
} from "lucide-react";

const roles = [
  {
    icon: GraduationCap,
    title: "A Business Coach",
    description: "Guides you step-by-step from zero to your first sale — no experience needed.",
    color: "from-primary to-primary-light",
  },
  {
    icon: BarChart3,
    title: "A Trend Expert",
    description: "Watches TikTok, Etsy, Amazon, Instagram & YouTube 24/7 so you don\u2019t have to.",
    color: "from-accent to-accent-light",
  },
  {
    icon: Megaphone,
    title: "A Marketing Team",
    description: "Generates TikTok hooks, ads, emails, landing pages, and content calendars instantly.",
    color: "from-gold to-hot-light",
  },
  {
    icon: Bot,
    title: "An AI Employee",
    description: "Works around the clock finding opportunities and building assets while you sleep.",
    color: "from-hot to-hot-light",
  },
];

const features = [
  {
    icon: Brain,
    title: "AI Business Operating System",
    description:
      "Tell AI your goals and it builds a complete business — niche, products, hooks, funnels, pricing, and launch plan — instantly.",
    color: "from-primary to-primary-light",
    glow: "group-hover:shadow-[0_0_40px_rgba(108,92,231,0.2)]",
  },
  {
    icon: TrendingUp,
    title: "Daily Trend Intelligence",
    description:
      "Scans TikTok, Etsy, Gumroad, Reddit, Pinterest & more every 24 hours. Scores every opportunity by virality and beginner-friendliness.",
    color: "from-accent to-accent-light",
    glow: "group-hover:shadow-[0_0_40px_rgba(0,206,201,0.2)]",
  },
  {
    icon: Zap,
    title: "One-Click Business Builder",
    description:
      "Click 'Build My Business' and AI generates: name, logo, landing page, TikTok hooks, email sequence, Gumroad listing, pricing & upsells.",
    color: "from-gold to-hot-light",
    glow: "group-hover:shadow-[0_0_40px_rgba(253,203,110,0.2)]",
  },
  {
    icon: Gamepad2,
    title: "Gamified Experience",
    description:
      "Streaks, leaderboards, beginner missions, business score tracking, and launch milestones. Stay motivated with daily dopamine hits.",
    color: "from-hot to-hot-light",
    glow: "group-hover:shadow-[0_0_40px_rgba(253,121,168,0.2)]",
  },
  {
    icon: Users,
    title: "Community & Social Proof",
    description:
      "See members making money. Public wins, screenshots, creator spotlights, 'copy this model' templates, and an affiliate marketplace.",
    color: "from-primary-light to-accent",
    glow: "group-hover:shadow-[0_0_40px_rgba(162,155,254,0.2)]",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "TikTok-style scrollable trends, swipeable cards, AI chat, instant previews, one-click exports. Feels modern. Fast dopamine.",
    color: "from-accent-light to-primary",
    glow: "group-hover:shadow-[0_0_40px_rgba(129,236,236,0.2)]",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            It&apos;s like having{" "}
            <span className="text-gradient">4 employees</span> in one app
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Instead of spending months guessing what might work — SimplyPDF
            finds what&apos;s ALREADY working and helps you launch your own version fast.
          </p>
        </motion.div>

        {/* 4-Role positioning */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-3`}
              >
                <role.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-1">{role.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">
            Powered by{" "}
            <span className="text-gradient">6 core systems</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${feature.glow}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
