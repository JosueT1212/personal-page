"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Blue blob */}
      <div
        className="blob-animate absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.05) 60%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">
            Portfolio · Math & DS · 2026
          </span>
        </motion.div>

        {/* Giant name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black uppercase text-primary leading-none tracking-tight mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 160px)" }}
        >
          Josue<br />Tapia.
        </motion.h1>

        {/* Subtext + CTAs side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p className="text-secondary text-lg max-w-md leading-relaxed">
            {hero.subtext}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/80 transition-colors"
            >
              See projects →
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white border border-border text-primary text-sm font-medium rounded-full hover:bg-surface transition-colors"
            >
              Get in touch
            </a>
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-border text-primary text-sm font-medium rounded-full hover:bg-surface transition-colors"
            >
              Download CV ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 flex items-center gap-3 text-secondary text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
          ↓
        </div>
        Scroll
      </motion.div>
    </section>
  );
}
