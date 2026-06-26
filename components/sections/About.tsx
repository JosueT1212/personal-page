"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { about, timeline } from "@/lib/data";

export function About() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">About me</span>
        </div>

        {/* Two-col: text left, photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
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

        {/* Timeline label */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Timeline</span>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="relative pl-14 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 items-start"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-accent border-4 border-surface shadow" />

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold text-secondary uppercase tracking-[0.18em] mb-2">
                    {item.year}
                  </p>
                  <h3
                    className="font-black uppercase text-primary leading-none tracking-tight mb-2"
                    style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg text-secondary font-medium mb-4">{item.subtitle}</p>

                  <ul className="space-y-1.5 mb-5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="text-base text-secondary pl-3">
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-border rounded-full text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo slot */}
                <div className="hidden md:flex justify-end items-start pt-1">
                  {item.image && !imgErrors[i] ? (
                    <div className="relative w-48 h-32 rounded-xl overflow-hidden border border-border shadow-sm flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        className="object-cover"
                        onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-32 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 flex-shrink-0">
                      <span className="text-[10px] text-secondary/50 uppercase tracking-wider">Photo</span>
                      <span className="text-[9px] text-accent/60 font-mono text-center px-2 break-all">{item.image}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
