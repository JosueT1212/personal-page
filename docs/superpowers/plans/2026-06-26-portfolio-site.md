# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal, elegant single-scroll personal portfolio for Josue Tapia Hernández using Next.js 14, deployed to Vercel.

**Architecture:** Single `app/page.tsx` imports all 7 section components in order. All content lives in `lib/data.ts` as typed constants — never hardcoded in JSX. Framer Motion `fadeInUp` variants applied via a reusable `SectionWrapper` component.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, DM Serif Display + Inter (Google Fonts).

## Global Constraints

- Next.js 14.2+, React 18+, TypeScript strict mode
- Tailwind CSS v3 (not v4)
- Framer Motion v11+
- All content sourced from `lib/data.ts` — no hardcoded strings in section components
- Max content width: `max-w-3xl mx-auto` (768px) for text; `max-w-5xl` for cards grids
- Accent color: `#2563EB` (blue-600) — use Tailwind `blue-600` class
- Background: `#FAFAFA` — use custom Tailwind token `bg-surface`
- No `console.log` left in production code
- Mobile-first: all layouts work at 375px width

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Fonts, meta tags, global html wrapper |
| `app/page.tsx` | Imports and orders all 7 sections |
| `app/globals.css` | Tailwind directives, CSS custom properties, float animation |
| `tailwind.config.ts` | Custom colors (`surface`, `primary`), font families |
| `lib/data.ts` | All typed content constants (bio, timeline, research, projects, awards, skills) |
| `components/ui/SectionWrapper.tsx` | Framer Motion scroll-triggered `fadeInUp` wrapper |
| `components/ui/Badge.tsx` | Tech stack pill badge |
| `components/ui/FloatingSymbols.tsx` | Animated math symbols background for Hero |
| `components/sections/Hero.tsx` | Name, tagline, subtext, CTAs, floating bg |
| `components/sections/Origin.tsx` | Bio paragraph + horizontal scrollable timeline with optional images |
| `public/timeline/` | Drop JPG/PNG photos here; filenames referenced in `lib/data.ts` |
| `components/sections/Research.tsx` | 2 research cards |
| `components/sections/Projects.tsx` | 2 project cards |
| `components/sections/Awards.tsx` | 4-item awards strip |
| `components/sections/Skills.tsx` | 3 grouped pill rows |
| `components/sections/Contact.tsx` | Email, GitHub, tagline |

---

### Task 1: Project Scaffold

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `tailwind.config.ts`

**Interfaces:**
- Produces: working `npm run dev` at `localhost:3000`, Tailwind working, DM Serif Display + Inter loaded

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/josuetapiahernandez/Documents/Personal_page
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"
```

When prompted: accept all defaults. Answer NO to Turbopack if asked (use webpack for stability).

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion
npm install -D @types/node
npx shadcn@latest init
```

For shadcn init: choose Default style, Zinc base color, yes to CSS variables.

- [ ] **Step 3: Install Google Fonts package**

```bash
npm install next/font
```

(Already included with Next.js — no separate install needed.)

- [ ] **Step 4: Write `tailwind.config.ts`**

Replace the generated file entirely:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FAFAFA",
        primary: "#0F0F0F",
        secondary: "#6B7280",
        accent: "#2563EB",
        border: "#E5E7EB",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Write `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-inter: "Inter", sans-serif;
  --font-dm-serif: "DM Serif Display", serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fafafa;
  color: #0f0f0f;
  font-family: var(--font-inter), sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.04; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 0.08; }
}

.float-symbol {
  animation: float linear infinite;
}
```

- [ ] **Step 6: Write `app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josue Tapia Hernández — ML Research & Engineering",
  description:
    "Math & Data Science student at Tec de Monterrey. ML Researcher. Builder of AI systems. Research. Ship. Repeat.",
  openGraph: {
    title: "Josue Tapia Hernández",
    description: "Research. Ship. Repeat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-surface text-primary font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Write stub `app/page.tsx`**

```typescript
export default function Home() {
  return (
    <main>
      <p className="p-8 font-serif text-4xl">Scaffold OK</p>
    </main>
  );
}
```

- [ ] **Step 8: Verify build runs**

```bash
npm run dev
```

Open `http://localhost:3000`. You should see "Scaffold OK" in DM Serif Display font on a near-white background. If Tailwind isn't applying, check `tailwind.config.ts` content paths.

- [ ] **Step 9: Commit**

```bash
git init
git add app/ tailwind.config.ts components.json public/ package.json package-lock.json tsconfig.json next.config.* .eslintrc* .gitignore
git commit -m "feat: scaffold Next.js 14 portfolio with Tailwind, Framer Motion, shadcn"
```

---

### Task 2: Content Data File

**Files:**
- Create: `lib/data.ts`

**Interfaces:**
- Produces: exported typed constants `hero`, `timeline`, `research`, `projects`, `awards`, `skills`, `contact` — consumed by all section components

- [ ] **Step 1: Create `lib/data.ts`**

```typescript
export const hero = {
  name: "Josue Tapia Hernández",
  tagline: "Research. Ship. Repeat.",
  subtext: "Math & Data Science @ Tec de Monterrey · ML Research · Builder",
  github: "https://github.com/JosueT1212",
  email: "josuetapiahernandez@gmail.com",
  resumeUrl: "/resume.pdf",
};

export type TimelineItem = {
  year: string;
  label: string;
  image?: string; // optional: path relative to /public, e.g. "/timeline/icpc.jpg"
  imageAlt?: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2021–22",
    label: "National Math Olympiad — Honourable Mention ×2",
    // image: "/timeline/math-olympiad.jpg",
    // imageAlt: "Math Olympiad certificate",
  },
  {
    year: "Nov 2022",
    label: "National Physics Olympiad — Bronze Medal",
    // image: "/timeline/physics-olympiad.jpg",
    // imageAlt: "Physics Olympiad bronze medal",
  },
  {
    year: "Nov 2022",
    label: "National Informatics Olympiad — Bronze Medal",
    // image: "/timeline/informatics-olympiad.jpg",
    // imageAlt: "Informatics Olympiad bronze medal",
  },
  {
    year: "2024–25",
    label: "ICPC National — Honourable Mention ×2",
    // image: "/timeline/icpc.jpg",
    // imageAlt: "ICPC team photo",
  },
  {
    year: "Sep 2025",
    label: "Co-founded JATA · 1st Place UST Hackathon",
    // image: "/timeline/jata-hackathon.jpg",
    // imageAlt: "JATA team at UST Hackathon",
  },
  {
    year: "Dec 2025",
    label: "ML Researcher @ Tec de Monterrey",
    // image: "/timeline/research.jpg",
    // imageAlt: "Research lab",
  },
  {
    year: "2026",
    label: "Hive MLOps Agent Platform — shipped",
    // image: "/timeline/hive-dashboard.jpg",
    // imageAlt: "Hive dashboard screenshot",
  },
];

export type ResearchItem = {
  title: string;
  institution: string;
  advisor?: string;
  description: string;
  details: string[];
  status: "Active" | "Completed";
};

export const research: ResearchItem[] = [
  {
    title: "Lorentz Equivariant Graph Neural Networks",
    institution: "Tecnológico de Monterrey",
    advisor: "Prof. Andrés Ramírez Morales",
    description:
      "Investigating GNN architectures for particle jet symmetry analysis in high-energy physics.",
    details: [
      "Reproducing SOTA benchmarks (LorentzNet, AUC > 0.98)",
      "Processing high-dimensional particle collision data",
      "Designing asymptotic inference pipeline for discovery significance",
    ],
    status: "Active",
  },
  {
    title: "CNN-RNN Crop Yield Forecasting",
    institution: "JATA — AgTech Startup",
    description:
      "End-to-end deep learning platform predicting greenhouse harvests 4 weeks ahead with 16 sensor features.",
    details: [
      "R² = 0.70 · MAPE = 10.7% on held-out test season",
      "3 residual conv blocks + 3-layer LSTM, correlation-weighted MSE loss",
      "357 days · 2 greenhouses · 5 growing seasons",
    ],
    status: "Active",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Hive",
    subtitle: "Autonomous MLOps Agent Platform",
    description:
      "12-agent LangGraph pipeline that autonomously provisions cloud GPUs, generates training scripts via LLM, and optimizes ML training end-to-end.",
    highlights: [
      "Reduced manual MLOps workflow from ~2 hours to under 10 minutes",
      "99% GPU cost reduction: $0.029/hr vs $3.50/hr average",
      "Real-time React dashboard with WebSocket monitoring across 7 API routes",
      "SSH-based execution across Vast.ai in 9+ geographic regions",
    ],
    stack: ["LangGraph", "Gemini 2.5 Pro", "FastAPI", "React", "Vast.ai", "Docker"],
    github: "https://github.com/JosueT1212",
  },
  {
    title: "JATA",
    subtitle: "AgTech Crop Forecasting Platform",
    description:
      "Full-stack agricultural intelligence platform for a commercial greenhouse client, from sensor data ingestion to weekly harvest predictions.",
    highlights: [
      "1st Place, UST Hackathon",
      "365 weekly production records · 2 greenhouses · 5 growing seasons",
      "YOLOv8 computer vision module for automated tomato counting (in progress)",
      "Full data pipeline: 357 days of daily sensor data, zero missing",
    ],
    stack: ["PyTorch", "YOLOv8", "FastAPI", "React", "Supabase", "Docker"],
    github: "https://github.com/JosueT1212",
  },
];

export type Award = {
  name: string;
  detail: string;
  year: string;
};

export const awards: Award[] = [
  {
    name: "ICPC National Regional",
    detail: "Honourable Mention ×2 · Top 17% nationally",
    year: "2024, 2025",
  },
  {
    name: "National Physics Olympiad",
    detail: "Bronze Medal · Top 20% · National IPhO Training",
    year: "Nov 2022",
  },
  {
    name: "National Informatics Olympiad",
    detail: "Bronze Medal · Top 15% · National IOI Training",
    year: "Nov 2022",
  },
  {
    name: "National Math Olympiad",
    detail: "Honourable Mention ×2 · Solution cited by UADY",
    year: "2021, 2022",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages & Core",
    items: ["Python", "C++", "R", "SQL", "Bash", "Git", "Linux", "Lean 4"],
  },
  {
    label: "AI & ML",
    items: [
      "PyTorch", "TensorFlow", "PEFT/LoRA", "LangGraph",
      "YOLOv8", "scikit-learn", "XGBoost", "LeanDojo",
      "Gemini API", "DSPy",
    ],
  },
  {
    label: "Infra & Web",
    items: [
      "FastAPI", "React", "Docker", "WebSockets",
      "Vast.ai", "GitHub Actions", "Hugging Face Hub",
    ],
  },
];

export const contact = {
  email: "josuetapiahernandez@gmail.com",
  github: "https://github.com/JosueT1212",
  tagline: "Open to research collaborations and founding-stage opportunities.",
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. If you see errors, check that `lib/data.ts` has no syntax issues.

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add typed content data file"
```

---

### Task 3: SectionWrapper + Badge + FloatingSymbols UI Primitives

**Files:**
- Create: `components/ui/SectionWrapper.tsx`
- Create: `components/ui/Badge.tsx`
- Create: `components/ui/FloatingSymbols.tsx`

**Interfaces:**
- Produces:
  - `SectionWrapper({ children, className? })` — wraps content in scroll-triggered `fadeInUp`
  - `Badge({ label })` — renders a single tech pill
  - `FloatingSymbols()` — absolute-positioned animated math symbols layer

- [ ] **Step 1: Write `components/ui/SectionWrapper.tsx`**

```typescript
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SectionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`py-20 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}
```

- [ ] **Step 2: Write `components/ui/Badge.tsx`**

```typescript
export function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-border text-secondary bg-card">
      {label}
    </span>
  );
}
```

- [ ] **Step 3: Write `components/ui/FloatingSymbols.tsx`**

```typescript
type SymbolConfig = {
  symbol: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
};

const configs: SymbolConfig[] = [
  { symbol: "∇", top: "8%",  left: "5%",  duration: "8s",  delay: "0s",    size: "text-4xl" },
  { symbol: "∑", top: "15%", left: "88%", duration: "11s", delay: "1s",    size: "text-5xl" },
  { symbol: "∫", top: "35%", left: "3%",  duration: "9s",  delay: "2s",    size: "text-3xl" },
  { symbol: "λ", top: "60%", left: "92%", duration: "13s", delay: "0.5s",  size: "text-4xl" },
  { symbol: "σ", top: "75%", left: "8%",  duration: "10s", delay: "3s",    size: "text-3xl" },
  { symbol: "∂", top: "20%", left: "50%", duration: "14s", delay: "1.5s",  size: "text-2xl" },
  { symbol: "π", top: "80%", left: "75%", duration: "7s",  delay: "2.5s",  size: "text-5xl" },
  { symbol: "∞", top: "45%", left: "60%", duration: "12s", delay: "4s",    size: "text-3xl" },
  { symbol: "∈", top: "90%", left: "40%", duration: "9s",  delay: "0.8s",  size: "text-4xl" },
  { symbol: "Δ", top: "5%",  left: "70%", duration: "11s", delay: "3.5s",  size: "text-3xl" },
];

export function FloatingSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {configs.map((c, i) => (
        <span
          key={i}
          className={`float-symbol absolute font-serif text-primary ${c.size}`}
          style={{
            top: c.top,
            left: c.left,
            animationDuration: c.duration,
            animationDelay: c.delay,
          }}
        >
          {c.symbol}
        </span>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors. Client components are marked `"use client"`.

- [ ] **Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add SectionWrapper, Badge, FloatingSymbols primitives"
```

---

### Task 4: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `hero` from `lib/data.ts`, `FloatingSymbols` from `components/ui/FloatingSymbols.tsx`
- Produces: full-viewport hero section visible at `localhost:3000`

- [ ] **Step 1: Write `components/sections/Hero.tsx`**

```typescript
"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import { FloatingSymbols } from "@/components/ui/FloatingSymbols";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
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
```

- [ ] **Step 2: Update `app/page.tsx` to render Hero**

```typescript
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Name renders in large DM Serif Display serif font
- Tagline "Research. Ship. Repeat." visible below
- Math symbols float in background at low opacity
- "scroll" hint appears at bottom after ~1.2s
- All 3 CTA links are blue and underline on hover

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with floating symbols and CTAs"
```

---

### Task 5: Origin Section

**Files:**
- Create: `components/sections/Origin.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `timeline` from `lib/data.ts`, `SectionWrapper` from `components/ui/SectionWrapper.tsx`
- Produces: bio paragraph + horizontal scrollable timeline

- [ ] **Step 1: Write `components/sections/Origin.tsx`**

```typescript
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { timeline } from "@/lib/data";

export function Origin() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6">
          The backstory
        </h2>

        <p className="text-secondary text-lg leading-relaxed mb-12 max-w-2xl">
          I spent my teenage years grinding national olympiads in math, physics,
          and informatics — not for trophies, but because hard problems were
          addictive. Those competitions taught me to think rigorously under
          pressure. Now I apply that same obsession to research and engineering:
          building ML systems that reason, learning from particle physicists,
          and shipping products that work in the real world.
        </p>

        {/* Timeline — horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 w-52 flex flex-col gap-2"
            >
              {/* Image slot — renders only when image path provided */}
              {item.image ? (
                <div className="w-full h-32 rounded-lg overflow-hidden border border-border bg-surface">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.label}
                    width={208}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-32 rounded-lg border border-dashed border-border bg-surface flex items-center justify-center">
                  <span className="text-3xl text-border select-none">
                    {["∇", "∑", "∫", "λ", "σ", "∂", "π"][i % 7]}
                  </span>
                </div>
              )}

              <div className="text-xs font-medium text-accent uppercase tracking-wider">
                {item.year}
              </div>
              <div className="w-full h-px bg-border" />
              <p className="text-sm text-secondary leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-secondary mt-4 opacity-60">
          Drop photos into <code className="font-mono">public/timeline/</code> and uncomment the image paths in <code className="font-mono">lib/data.ts</code> to fill the slots above.
        </p>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Add Origin to `app/page.tsx`**

```typescript
import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";

export default function Home() {
  return (
    <main>
      <Hero />
      <Origin />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll past the hero. Verify:
- "The backstory" heading appears with fade-up animation
- Bio paragraph renders with good line height
- Timeline items scroll horizontally on mobile (resize browser to 375px)
- Each timeline item has blue year label + gray rule + description

- [ ] **Step 4: Commit**

```bash
git add components/sections/Origin.tsx app/page.tsx
git commit -m "feat: add Origin section with bio and scrollable timeline"
```

---

### Task 6: Research Section

**Files:**
- Create: `components/sections/Research.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `research` (`ResearchItem[]`) from `lib/data.ts`, `SectionWrapper`, `Badge`
- Produces: 2-column grid of research cards (1-col on mobile)

- [ ] **Step 1: Write `components/sections/Research.tsx`**

```typescript
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { research } from "@/lib/data";

export function Research() {
  return (
    <SectionWrapper className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-0">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-2 max-w-3xl mx-auto px-0">
          What I&apos;m working on
        </h2>
        <p className="text-secondary mb-10 max-w-3xl mx-auto">
          Active research, ongoing experiments, open questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-surface hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge label={item.status} />
                <span className="text-xs text-secondary">{item.institution}</span>
              </div>

              <h3 className="font-serif text-xl text-primary mb-1 leading-snug">
                {item.title}
              </h3>

              {item.advisor && (
                <p className="text-xs text-secondary mb-3">
                  Advisor: {item.advisor}
                </p>
              )}

              <p className="text-sm text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              <ul className="space-y-1">
                {item.details.map((d, j) => (
                  <li key={j} className="text-xs text-secondary flex gap-2">
                    <span className="text-accent mt-0.5">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Add Research to `app/page.tsx`**

```typescript
import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";
import { Research } from "@/components/sections/Research";

export default function Home() {
  return (
    <main>
      <Hero />
      <Origin />
      <Research />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Research section. Verify:
- Section has subtle white background distinguishing it from `#FAFAFA`
- Two cards side by side on desktop, stacked on mobile
- "Active" badge shows on each card
- Bullet points with blue dash
- Cards lift slightly on hover

- [ ] **Step 4: Commit**

```bash
git add components/sections/Research.tsx app/page.tsx
git commit -m "feat: add Research section with 2-column card grid"
```

---

### Task 7: Projects Section

**Files:**
- Create: `components/sections/Projects.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `projects` (`Project[]`) from `lib/data.ts`, `SectionWrapper`, `Badge`
- Produces: 2 featured project cards with highlights list + stack badges + GitHub link

- [ ] **Step 1: Write `components/sections/Projects.tsx`**

```typescript
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-2 max-w-3xl mx-auto">
          Things I&apos;ve shipped
        </h2>
        <p className="text-secondary mb-10 max-w-3xl mx-auto">
          Production systems, not side projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl text-primary leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary mt-0.5">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors ml-3 mt-1 flex-shrink-0"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <p className="text-sm text-secondary leading-relaxed mb-5">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-secondary flex gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Add Projects to `app/page.tsx`**

```typescript
import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Origin />
      <Research />
      <Projects />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Projects. Verify:
- Two cards side by side on desktop
- GitHub icon top-right of each card, links to github.com/JosueT1212
- Highlights list with blue arrows
- Stack badges at bottom of each card
- Cards lift and shadow on hover

- [ ] **Step 4: Commit**

```bash
git add components/sections/Projects.tsx app/page.tsx
git commit -m "feat: add Projects section with Hive and JATA cards"
```

---

### Task 8: Awards, Skills, Contact Sections

**Files:**
- Create: `components/sections/Awards.tsx`
- Create: `components/sections/Skills.tsx`
- Create: `components/sections/Contact.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `awards`, `skills`, `contact` from `lib/data.ts`, `SectionWrapper`, `Badge`
- Produces: three final sections completing the page

- [ ] **Step 1: Write `components/sections/Awards.tsx`**

```typescript
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <SectionWrapper className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-10 max-w-3xl mx-auto">
          Awards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-primary text-sm">{award.name}</h3>
                <span className="text-xs text-secondary">{award.year}</span>
              </div>
              <p className="text-xs text-secondary">{award.detail}</p>
              <div className="w-full h-px bg-border mt-2" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Write `components/sections/Skills.tsx`**

```typescript
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-10">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 3: Write `components/sections/Contact.tsx`**

```typescript
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contact } from "@/lib/data";

export function Contact() {
  return (
    <SectionWrapper className="border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-4">
          Get in touch
        </h2>

        <p className="text-secondary mb-8 text-lg">{contact.tagline}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            {contact.email} →
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            github.com/JosueT1212 →
          </a>
        </div>

        <p className="text-xs text-secondary mt-16">
          © {new Date().getFullYear()} Josue Tapia Hernández
        </p>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 4: Update `app/page.tsx` with all sections**

```typescript
import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Origin />
      <Research />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 5: Verify full page in browser**

```bash
npm run dev
```

Scroll the full page. Verify:
- Awards: 2×2 grid on desktop, each with name / year / detail / rule
- Skills: 3 labeled groups of pill badges
- Contact: email + GitHub links in blue, copyright at bottom
- No section overlaps or missing margins

- [ ] **Step 6: Commit**

```bash
git add components/sections/Awards.tsx components/sections/Skills.tsx components/sections/Contact.tsx app/page.tsx
git commit -m "feat: add Awards, Skills, Contact sections — page complete"
```

---

### Task 9: Polish, Mobile Check, Vercel Deploy

**Files:**
- Create: `public/resume.pdf` (user provides actual file)
- Create: `vercel.json`
- Modify: `next.config.*` if needed

**Interfaces:**
- Produces: production-ready site deployed to Vercel, all links working

- [ ] **Step 1: Copy resume PDF to public folder**

```bash
cp /Users/josuetapiahernandez/Downloads/Josue_CV_5.pdf /Users/josuetapiahernandez/Documents/Personal_page/public/resume.pdf
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: `✓ Compiled successfully`. Fix any TypeScript or ESLint errors before proceeding.

- [ ] **Step 3: Check mobile layout**

```bash
npm run dev
```

In Chrome DevTools, toggle device toolbar (Cmd+Shift+M). Test at:
- 375px (iPhone SE) — timeline scrolls horizontally, cards stack, no overflow
- 768px (tablet) — cards go 2-col, readable margins

- [ ] **Step 4: Create `vercel.json`**

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

- [ ] **Step 5: Initialize git and push to GitHub**

```bash
git remote add origin https://github.com/JosueT1212/personal-page.git
git branch -M main
git push -u origin main
```

(Create the repo at github.com/JosueT1212 first if it doesn't exist.)

- [ ] **Step 6: Deploy to Vercel**

Option A — CLI:
```bash
npx vercel --prod
```

Option B — Dashboard: Go to vercel.com → New Project → Import `JosueT1212/personal-page` → Deploy.

- [ ] **Step 7: Verify live site**

Open the Vercel URL. Verify:
- Hero loads with correct name and tagline
- All 7 sections present and in order
- GitHub links go to github.com/JosueT1212
- Resume PDF downloads on click
- Page looks correct on mobile (use browser mobile view)

- [ ] **Step 8: Final commit**

```bash
git add vercel.json public/resume.pdf
git commit -m "feat: add resume PDF and Vercel config — ready to deploy"
git push
```

---

## Self-Review

**Spec coverage:**
- ✅ Hero (name, tagline, subtext, CTAs, floating symbols)
- ✅ Origin (bio paragraph, scrollable timeline)
- ✅ Research (2 cards: GNNs, JATA)
- ✅ Projects (2 cards: Hive, JATA platform — DeepProver excluded per user)
- ✅ Awards (4-item grid)
- ✅ Skills (3 grouped pill rows)
- ✅ Contact (email, GitHub, tagline, copyright)
- ✅ Animations (Framer Motion fadeInUp, card hover lift)
- ✅ Mobile-first responsive
- ✅ All content in `lib/data.ts`
- ✅ Vercel deploy

**No placeholders detected.** All code blocks are complete and runnable.

**Type consistency:** `ResearchItem`, `Project`, `Award`, `SkillGroup`, `TimelineItem` defined once in Task 2 and consumed correctly in Tasks 6–8.
