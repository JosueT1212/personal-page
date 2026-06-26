"use client";

import { motion, Variants } from "framer-motion";
import { hero } from "@/lib/data";
import { FloatingSymbols } from "@/components/ui/FloatingSymbols";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <FloatingSymbols />
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="font-serif text-5xl sm:text-7xl text-primary leading-tight tracking-tight mb-4"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-secondary font-light mb-3"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base text-secondary mb-10"
        >
          {hero.subtext}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-6 items-center">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            GitHub →
          </a>
          <a
            href={`mailto:${hero.email}`}
            className="text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            Email →
          </a>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            Resume →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        scroll
      </motion.div>
    </section>
  );
}
