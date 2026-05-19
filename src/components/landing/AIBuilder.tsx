"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  Lightbulb,
  Globe,
  FileText,
  Mail,
  Video,
  Palette,
  CheckCircle2,
} from "lucide-react";

const quickPrompts = [
  "I want a faceless TikTok business",
  "Help me make $5k/month with digital products",
  "I want passive income selling templates",
  "Build me a Canva template business",
];

const demoConversation = [
  {
    role: "user" as const,
    message: "I want to start a faceless digital product business on Etsy",
  },
  {
    role: "ai" as const,
    message: "Great choice! Based on current trends, here's your personalized business plan:",
    deliverables: [
      { icon: Lightbulb, label: "Niche", value: "Minimalist Digital Planners" },
      { icon: Globe, label: "Platform", value: "Etsy + Gumroad" },
      { icon: FileText, label: "First Product", value: "2024 ADHD-Friendly Planner Pack" },
      { icon: Palette, label: "Brand Name", value: "ZenPlan Studio" },
      { icon: Video, label: "TikTok Hooks", value: "3 viral scripts generated" },
      { icon: Mail, label: "Email Sequence", value: "5-day launch sequence ready" },
    ],
  },
];

export default function AIBuilder() {
  const [activePrompt, setActivePrompt] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="ai-builder" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-accent mb-4">
            <Bot className="w-3 h-3" />
            One-Click Business Builder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Tell AI your goals.{" "}
            <span className="text-gradient">It builds your business.</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Not a PDF library — a full AI business operating system. Describe
            what you want, and get a complete launch plan in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Quick prompts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Just say what you want:
            </h3>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => {
                  setActivePrompt(i);
                  setShowDemo(true);
                }}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                  activePrompt === i && showDemo
                    ? "glass border-primary/40 glow-primary"
                    : "glass hover:border-primary/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Sparkles
                    className={`w-4 h-4 shrink-0 ${
                      activePrompt === i && showDemo
                        ? "text-primary-light"
                        : "text-muted"
                    }`}
                  />
                  <span className="text-sm">{prompt}</span>
                </div>
              </button>
            ))}

            <div className="mt-6 flex items-center gap-3 glass rounded-xl px-4 py-3">
              <input
                type="text"
                placeholder="Or type your own business goal..."
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted/60"
                onFocus={() => setShowDemo(true)}
              />
              <button
                onClick={() => setShowDemo(true)}
                className="p-2 rounded-lg bg-primary/20 text-primary-light hover:bg-primary/30 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right: AI demo chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden glow-accent"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-border">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">AI Business Builder</div>
                <div className="text-xs text-accent flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Online — Ready to build
                </div>
              </div>
            </div>

            {/* Chat body */}
            <div className="p-5 space-y-4 min-h-[340px]">
              <AnimatePresence>
                {showDemo ? (
                  <>
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-end"
                    >
                      <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-br-sm px-4 py-2.5 max-w-xs">
                        <p className="text-sm">{demoConversation[0].message}</p>
                      </div>
                    </motion.div>

                    {/* AI response */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="bg-surface-light border border-border rounded-xl rounded-bl-sm px-4 py-3 max-w-sm">
                        <p className="text-sm mb-3">
                          {demoConversation[1].message}
                        </p>
                        <div className="space-y-2">
                          {demoConversation[1].deliverables?.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + idx * 0.15 }}
                              className="flex items-center gap-2 text-xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span className="text-muted">{item.label}:</span>
                              <span className="text-foreground font-medium">
                                {item.value}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA inside chat */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-center pt-2"
                    >
                      <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
                      >
                        <Sparkles className="w-3 h-3" />
                        Unlock Full AI Builder
                      </a>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-[300px] text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-7 h-7 text-primary-light" />
                    </div>
                    <p className="text-sm text-muted max-w-xs">
                      Click a prompt or type your business goal to see AI in
                      action
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
