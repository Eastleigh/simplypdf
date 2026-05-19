"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Flame,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  Eye,
  ShoppingBag,
  Zap,
} from "lucide-react";

const trendItems = [
  {
    rank: 1,
    name: "AI Prompt Packs",
    platform: "Gumroad",
    growth: "+340%",
    competition: "Low",
    revenue: "$4.2K/mo",
    icon: Zap,
    hot: true,
  },
  {
    rank: 2,
    name: "Digital Planners",
    platform: "Etsy",
    growth: "+210%",
    competition: "Medium",
    revenue: "$8.7K/mo",
    icon: ShoppingBag,
    hot: true,
  },
  {
    rank: 3,
    name: "Faceless TikTok Templates",
    platform: "TikTok",
    growth: "+180%",
    competition: "Low",
    revenue: "$3.1K/mo",
    icon: Eye,
    hot: false,
  },
  {
    rank: 4,
    name: "Canva Social Kits",
    platform: "Etsy",
    growth: "+156%",
    competition: "Medium",
    revenue: "$5.4K/mo",
    icon: BarChart3,
    hot: false,
  },
  {
    rank: 5,
    name: "Notion Dashboards",
    platform: "Gumroad",
    growth: "+132%",
    competition: "Low",
    revenue: "$2.8K/mo",
    icon: DollarSign,
    hot: false,
  },
];

const platforms = [
  "TikTok",
  "Etsy",
  "Gumroad",
  "Amazon KDP",
  "Instagram",
  "Pinterest",
  "YouTube",
  "Reddit",
];

export default function TrendDashboard() {
  return (
    <section id="trends" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-hot mb-4">
            <Flame className="w-3 h-3" />
            Updated Every 24 Hours
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your <span className="text-gradient">Bloomberg Terminal</span> for
            Online Business
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            AI scans 8+ platforms daily, scores every opportunity, and tells you
            exactly what to sell — before trends go mainstream.
          </p>
        </motion.div>

        {/* Platform pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {platforms.map((p, i) => (
            <span
              key={i}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                i === 0
                  ? "bg-primary/20 text-primary-light border border-primary/30"
                  : "glass text-muted"
              }`}
            >
              {p}
            </span>
          ))}
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl overflow-hidden glow-primary"
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-hot/60" />
                <span className="w-3 h-3 rounded-full bg-gold/60" />
                <span className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <span className="text-sm text-muted font-mono">
                trend-intelligence
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live — 847 trends tracked
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs text-muted uppercase tracking-wider border-b border-border">
            <div className="col-span-1">#</div>
            <div className="col-span-4 sm:col-span-3">Trend</div>
            <div className="col-span-2 hidden sm:block">Platform</div>
            <div className="col-span-2">Growth</div>
            <div className="col-span-2 hidden md:block">Competition</div>
            <div className="col-span-3 sm:col-span-2 text-right">Est. Revenue</div>
          </div>

          {/* Trend rows */}
          {trendItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-12 gap-4 items-center px-6 py-4 border-b border-border/50 hover:bg-surface-light/50 transition-colors group cursor-pointer"
            >
              <div className="col-span-1 text-sm text-muted font-mono">
                {item.hot ? (
                  <Flame className="w-4 h-4 text-hot" />
                ) : (
                  <span>{item.rank}</span>
                )}
              </div>
              <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                <item.icon className="w-4 h-4 text-primary-light shrink-0" />
                <span className="text-sm font-medium truncate">
                  {item.name}
                </span>
              </div>
              <div className="col-span-2 hidden sm:block">
                <span className="text-xs px-2 py-0.5 rounded-full glass text-muted">
                  {item.platform}
                </span>
              </div>
              <div className="col-span-2">
                <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                  <TrendingUp className="w-3 h-3" />
                  {item.growth}
                </span>
              </div>
              <div className="col-span-2 hidden md:block">
                <span
                  className={`text-xs font-medium ${
                    item.competition === "Low"
                      ? "text-accent"
                      : "text-gold"
                  }`}
                >
                  {item.competition}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right flex items-center justify-end gap-1">
                <span className="text-sm font-semibold text-foreground">
                  {item.revenue}
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}

          {/* Dashboard footer */}
          <div className="px-6 py-4 flex items-center justify-between">
            <span className="text-xs text-muted">
              Showing top 5 of 847 trends
            </span>
            <a
              href="#pricing"
              className="text-xs text-primary-light hover:text-primary transition-colors flex items-center gap-1"
            >
              Unlock all trends
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
