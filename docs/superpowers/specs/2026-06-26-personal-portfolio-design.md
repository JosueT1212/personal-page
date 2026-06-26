---
name: personal-portfolio-design
description: Personal portfolio site for Josue Tapia Hernández — single-scroll, minimal/elegant, Next.js, story-driven "olympiad kid who went deep" narrative
metadata:
  type: project
---

# Personal Portfolio — Design Spec

**Date:** 2026-06-26  
**Owner:** Josue Tapia Hernández  
**Deploy target:** Vercel

---

## 1. Goal

Single-page portfolio that tells a coherent story: competitive olympiad background → rigorous research → shipped AI products. Target audience: ML researchers, startup founders, PhD program admissions, technical recruiters.

---

## 2. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Components | shadcn/ui |
| Typography | Inter (body) + DM Serif Display (hero name) |
| Deploy | Vercel |

---

## 3. Design Tokens

| Token | Value |
|-------|-------|
| Background | `#FAFAFA` |
| Text primary | `#0F0F0F` |
| Text secondary | `#6B7280` |
| Accent | `#2563EB` (blue) |
| Border | `#E5E7EB` |
| Card bg | `#FFFFFF` |

Font sizes follow Tailwind scale. Max content width: `768px` centered, wider for full-bleed sections.

---

## 4. Page Structure (single scroll)

### 4.1 HERO
- **Name:** Josue Tapia Hernández — large DM Serif Display, ~5xl–7xl
- **Tagline:** "Research. Ship. Repeat." — medium weight, secondary color
- **Subtext:** Math & Data Science @ Tec de Monterrey · ML Research · Builder
- **CTAs:** [GitHub →] [Email →] [Resume PDF →] — text links with arrow, accent color
- **Background:** sparse, slowly drifting math/science symbols (∇, ∑, ∫, λ, σ) at low opacity using CSS animation — no heavy canvas

### 4.2 ORIGIN ("The backstory")
- Short 2–3 sentence bio paragraph establishing the arc
- Horizontal scrollable timeline strip:
  - Math Olympiad Honourable Mention — 2021, 2022
  - National Physics Olympiad Bronze — Nov 2022
  - National Informatics Olympiad Bronze — Nov 2022
  - ICPC Honourable Mention — 2024, 2025
  - Co-founded JATA (1st Place UST Hackathon) — Sep 2025
  - ML Researcher @ Tec de Monterrey — Dec 2025
  - Hive MLOps Agent Platform — 2026

### 4.3 RESEARCH ("What I'm working on")
Two cards side-by-side (stacked on mobile):

**Card 1 — Lorentz Equivariant GNNs**
- Institution: Tecnológico de Monterrey · Advisor: Prof. Andrés Ramírez
- One-liner: Investigating GNN architectures for particle jet symmetry analysis in high-energy physics
- Status badge: "Active"
- Key detail: Reproducing SOTA benchmarks (LorentzNet, AUC > 0.98)

**Card 2 — JATA Crop Yield Forecasting**
- One-liner: CNN-RNN model (3 residual conv blocks + 3-layer LSTM) predicting greenhouse harvests 4 weeks ahead
- Metrics: R² = 0.70 · MAPE = 10.7% · 16 sensor features
- Status badge: "Active"

### 4.4 PROJECTS ("Things I've shipped")
Two featured project cards:

**Card 1 — Hive: Autonomous MLOps Agent Platform**
- Stack badges: LangGraph · Gemini 2.5 Pro · FastAPI · React · Vast.ai
- Description: 12-agent LangGraph pipeline that provisions cloud GPUs, generates training scripts via LLM, and runs ML training end-to-end. Reduced manual MLOps from ~2 hours to <10 min. 99% GPU cost reduction ($0.029/hr vs $3.50/hr avg).
- Link: GitHub icon → `github.com/JosueT1212` (direct repo if available)

**Card 2 — JATA: AgTech Crop Forecasting Platform**
- Stack badges: PyTorch · YOLOv8 · FastAPI · React · Supabase
- Description: End-to-end platform for a commercial greenhouse client — 2 greenhouses, 5 growing seasons, 365 weekly production records. 1st Place UST Hackathon.
- Link: GitHub icon → repo

### 4.5 AWARDS (compact horizontal strip)
Four items in a row (2x2 on mobile):
- ICPC National — Honourable Mention × 2 · Top 17% nationally · 2024, 2025
- National Physics Olympiad — Bronze · Top 20% · Nov 2022
- National Informatics Olympiad — Bronze · Top 15% · Nov 2022
- National Math Olympiad — Honourable Mention × 2 · 2021, 2022

### 4.6 SKILLS (minimal pill groups)
Three labeled groups:
- **Languages & Core:** Python · C++ · R · SQL · Bash · Git · Linux · Lean 4
- **AI & ML:** PyTorch · TensorFlow · PEFT/LoRA · LangGraph · YOLOv8 · scikit-learn · XGBoost · LeanDojo · Gemini API · DSPy
- **Infra & Web:** FastAPI · React · Docker · WebSockets · Vast.ai · GitHub Actions · Hugging Face Hub

### 4.7 CONTACT
- Email: josuetapiahernandez@gmail.com
- GitHub: github.com/JosueT1212
- Tagline: "Open to research collaborations and founding-stage opportunities."

---

## 5. Animations

| Trigger | Effect |
|---------|--------|
| Page load | Hero fades in, name slides up |
| Scroll into section | `fadeInUp` with 0.2s stagger per element |
| Card hover | Subtle `y: -4` lift + shadow increase |
| CTA hover | Underline slide-in |

No parallax. No heavy canvas. Performance first.

---

## 6. Responsiveness

- Mobile-first Tailwind breakpoints
- Timeline: horizontal scroll on mobile, full display on md+
- Research/project cards: 1-col on mobile, 2-col on md+
- Awards strip: 2×2 grid on mobile, 4-col on md+

---

## 7. SEO & Meta

- `<title>` Josue Tapia Hernández — ML Research & Engineering
- OG image: auto-generated via Next.js `ImageResponse`
- `robots.txt` allow all
- No analytics unless user adds later

---

## 8. File Structure

```
Personal_page/
├── app/
│   ├── layout.tsx          # fonts, meta, global styles
│   ├── page.tsx            # single page, imports all sections
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Origin.tsx
│   │   ├── Research.tsx
│   │   ├── Projects.tsx
│   │   ├── Awards.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                 # shadcn components
├── lib/
│   └── data.ts             # all content as typed constants
├── public/
│   └── resume.pdf
└── tailwind.config.ts
```

All content (names, dates, descriptions, links) lives in `lib/data.ts` — never hardcoded in JSX.
