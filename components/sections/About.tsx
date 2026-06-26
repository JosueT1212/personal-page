"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about, timeline } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">About me</span>
        </div>

        {/* Two-col: text left, photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2
              className="font-black uppercase text-primary leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
            >
              A little<br />about me.
            </h2>
            <p className="text-primary text-lg leading-relaxed mb-4">{about.bio1}</p>
            <p className="text-secondary text-base leading-relaxed">{about.bio2}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/avatar.jpg"
                alt="Josue Tapia Hernández"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Timeline</span>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-[7px]" />

          <div className="space-y-12 pl-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-12 top-2.5 w-4 h-4 rounded-full bg-accent border-2 border-surface shadow-md" />
                <span className="text-sm font-bold text-accent uppercase tracking-[0.18em]">{item.year}</span>
                <p className="text-xl font-bold text-primary mt-1 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
