export type Hero = {
  name: string;
  tagline: string;
  subtext: string;
  github: string;
  email: string;
  resumeUrl: string;
  avatarUrl: string;
};

export const hero: Hero = {
  name: "Josue Tapia Hernández",
  tagline: "Research. Ship. Repeat.",
  subtext: "Math & Data Science @ Tec de Monterrey · ML Research · Builder",
  github: "https://github.com/JosueT1212",
  email: "josuetapiahernandez@gmail.com",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.jpg",
};

export const origin = {
  bio: "I spent my teenage years grinding national olympiads in math, physics, and informatics — not for trophies, but because hard problems were addictive. Those competitions taught me to think rigorously under pressure. Now I apply that same obsession to research and engineering: building ML systems that reason, learning from particle physicists, and shipping products that work in the real world.",
};

export const about = {
  bio1: "I'm Josue Tapia Hernández, studying Mathematics and Data Science at Tecnológico de Monterrey with a 97/100 GPA. I co-founded JATA, an AgTech startup that won 1st place at the UST Hackathon, and I research SU(2)-equivariant neural networks for high-energy physics — first author on a paper in preparation.",
  bio2: "I want to be at the frontier of AI — the kind of person who publishes rigorous research AND ships systems people use. Obsessive about hard problems since my olympiad days.",
};

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  links?: { label: string; href: string }[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2021 — 2022",
    title: "National Math Olympiad",
    subtitle: "Honourable Mention ×2",
    bullets: [
      "Top 15% nationally across two consecutive years",
      "Selected for state-level intensive training program",
    ],
    tags: ["COMPETITION", "MATHEMATICS", "AGUASCALIENTES"],
    image: "/timeline/math-olympiad.jpg",
    imageAlt: "Math Olympiad certificate",
    links: [
      { label: "OMMAGS alumni", href: "https://ommags.com/egresados" },
    ],
  },
  {
    year: "NOV 2022",
    title: "National Physics Olympiad",
    subtitle: "Bronze Medal",
    bullets: [
      "Top 20% nationally · Qualified for IPhO national training camp",
      "Classical mechanics, electromagnetism, and optics at olympiad depth",
    ],
    tags: ["COMPETITION", "PHYSICS", "BRONZE MEDAL"],
    image: "/timeline/physics-olympiad.jpg",
    imageAlt: "Physics Olympiad bronze medal",
    links: [
      { label: "XXXIII ONF 2022 (SMF)", href: "https://smf.mx/programas/olimpiada-nacional-de-fisica/onf-2022/" },
    ],
  },
  {
    year: "NOV 2022",
    title: "National Informatics Olympiad",
    subtitle: "Bronze Medal",
    bullets: [
      "Top 15% nationally in competitive programming",
      "Algorithms, data structures, and combinatorics in C++",
    ],
    tags: ["COMPETITION", "INFORMATICS", "BRONZE MEDAL"],
    image: "/timeline/informatics-olympiad.jpg",
    imageAlt: "Informatics Olympiad bronze medal",
    links: [
      { label: "Official OMI results (AGU-4, 27ª OMI)", href: "https://www.olimpiadadeinformatica.org.mx/Resultados/Profile/view?usuario=_8878&tipo=OMI" },
    ],
  },
  {
    year: "2024 — 2025",
    title: "ICPC National Regional",
    subtitle: "Honourable Mention ×2",
    bullets: [
      "Top 17% nationally across two contest seasons",
      "Team competitive programming — algorithms under time pressure in C++",
    ],
    tags: ["COMPETITION", "COMPETITIVE PROGRAMMING", "GUADALAJARA"],
    image: "/timeline/icpc.jpg",
    imageAlt: "ICPC team photo",
    links: [
      { label: "2024 Mexico Finals standings", href: "https://icpc.global/regionals/finder/Mexico-2025/standings" },
      { label: "2025 Mexico Finals standings", href: "https://icpc.global/regionals/finder/Mexico-2026/standings" },
    ],
  },
  {
    year: "SEP 2025 — PRESENT",
    title: "JATA",
    subtitle: "Co-Founder & CTO · 1st Place UST Hackathon",
    bullets: [
      "Hackathon win turned into a company with paying customers",
      "FastAPI + React platform live across 2 commercial greenhouses — 5 growing seasons of production data",
      "Actively expanding to new greenhouse clients across Mexico",
    ],
    tags: ["AI", "AGTECH", "STARTUP", "GUADALAJARA · ON-SITE"],
    image: "/timeline/jata-hackathon.jpg",
    imageAlt: "JATA team at UST Hackathon",
  },
  {
    year: "DEC 2025 — PRESENT",
    title: "Tecnológico de Monterrey",
    subtitle: "ML Researcher",
    bullets: [
      "SU(2)-equivariant Clifford-algebra transformers for top-quark jet tagging",
      "First author on a paper in preparation · AUC 0.9850 on the 1.2M-jet benchmark",
      "Advisor: Prof. Andrés Ramírez Morales",
    ],
    tags: ["ML RESEARCH", "PHYSICS", "GUADALAJARA · ON-SITE"],
    image: "/timeline/research.jpg",
    imageAlt: "Research lab",
  },
];

export type ResearchItem = {
  title: string;
  institution: string;
  advisor?: string;
  description: string;
  details: string[];
  status: "Active" | "Completed";
  link?: string;
  linkLabel?: string;
  cta?: string;
};

export const research: ResearchItem[] = [
  {
    title: "SU(2)-Equivariant Transformers for Top-Jet Tagging",
    institution: "Tecnológico de Monterrey",
    advisor: "Prof. Andrés Ramírez Morales",
    description:
      "First-author work on an SU(2)/Spin(3)-equivariant transformer built over the Cl(3,0) geometric algebra, injecting physics observables into otherwise-unused grades of the input multivector.",
    details: [
      "Best variant: test AUC 0.9811 ± 0.0009 at 189K parameters — matching our L-GATr rerun (0.9813) with 5.7× fewer parameters",
      "AUC 0.9850 · 93.8% accuracy on the full 1.2M-jet top-tagging reference benchmark",
      "2.5K-line PyTorch library (equivariant linear, attention, LayerNorm, geometric-bilinear MLP) with a 60+ test suite including explicit equivariance checks",
      "8-variant ablation over grade-0 Casimir masses, grade-2 subjet-axis bivectors, and grade-3 parity-odd observables",
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
    title: "FLI Holdings",
    subtitle: "Multi-Agent Financial Copilot",
    description:
      "Three-agent pipeline that turns raw restaurant-group financials (5 branches, 2.7K spreadsheet rows, 44.7% invalid) into executive memos with prioritized action items — every number computed by code, never by the LLM.",
    highlights: [
      "Quantitative agent validates monthly spreadsheets, computes KPIs by branch/product/category, and flags branches below margin or revenue thresholds",
      "Qualitative agent ingests PDFs and scanned images via OCR, embeds into ChromaDB, and runs schema-constrained Claude extraction into typed fields",
      "Synthesis agent merges findings into a PDF memo; typed Pydantic contracts between every agent",
      "What-If Lab: 5 payroll/pricing/closure scenarios + break-even solver, verified by 42 tests (pytest + Vitest)",
    ],
    stack: ["Python", "Claude API", "Pydantic", "FastAPI", "ChromaDB", "React/TS", "Vite"],
    github: "https://github.com/Emilio-Mtz-bit/FLI-Holding-Agents",
  },
  {
    title: "JATA",
    subtitle: "AgTech Crop Forecasting — Shipped to Client",
    description:
      "Took an AgTech product from a hackathon win to paying customers: an agricultural intelligence platform running in production for 2 commercial greenhouses, forecasting weekly tomato harvests from live sensor telemetry — now onboarding additional clients.",
    highlights: [
      "Dockerized FastAPI backend (7+ routes: auth, ingest, sensors, predictions, admin) on Railway, with JWT auth and Postgres row-level security via Supabase",
      "Telegraf ingest service streaming 16 sensor features into the API, surfaced in a React dashboard polling every 30s — operators track sensor health, anomalies, and forecast-vs-actual yield unassisted",
      "CNN-RNN forecaster (3 residual conv blocks + 3-layer LSTM) — R²=0.70, MAPE=10.7% over 365 weekly production records",
      "pytest integration tests across the ingest, auth, and prediction endpoints",
      "Won 1st Place at UST Hackathon · live across 5 growing seasons of real operational data",
    ],
    stack: ["FastAPI", "PyTorch", "YOLOv8", "React", "Supabase", "Docker", "Railway", "Telegraf"],
    github: "https://github.com/JosueT1212/Tomato-Crop-Hackathon-Winner-Project",
  },
  {
    title: "Berries TDA Forecasting",
    subtitle: "Topological Data Analysis + Time-Series",
    description:
      "Applies Topological Data Analysis (TDA) to the FRED Berry Producer Price Index — using Takens delay embedding and Vietoris-Rips persistent homology to extract topological features invisible to classical methods, then feeding them into ML/DL forecasting models.",
    highlights: [
      "Takens embedding (d=12, τ=3) reconstructs attractor from scalar price series",
      "H₀ and H₁ persistent homology via Vietoris-Rips — detects nonlinear cyclicity",
      "Key finding: H₁ persistence strongest during 2008–2012 financial crisis, confirming elevated cyclicity",
      "TDA features improve MAE over pure-LSTM baselines — multi-task learning with EP loss",
    ],
    stack: ["Python", "giotto-tda", "ripser", "PyTorch", "scikit-learn", "pandas"],
    github: "https://github.com/JosueT1212/Berries_Stock_Forecasting",
  },
  {
    title: "Cashflow Optimization — Coppel",
    subtitle: "Financial Operations Research",
    description:
      "Linear programming model optimizing cash flow allocation across branches of Coppel, one of Mexico's largest retailers, minimizing liquidity risk.",
    highlights: [
      "Formulated LP model with working capital constraints and branch-level demand forecasts",
      "Solver implementation with sensitivity analysis for parameter uncertainty",
      "Interactive visualization dashboard for finance teams",
    ],
    stack: ["Python", "PuLP", "pandas", "NumPy", "HTML", "Matplotlib"],
    github: "https://github.com/JosueT1212/Cashflow-Optimization-for-Coppel",
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
    items: ["Python", "Java", "TypeScript", "C++", "SQL", "R", "Bash", "Git", "Linux", "Lean 4"],
  },
  {
    label: "AI & ML",
    items: [
      "PyTorch", "TensorFlow", "scikit-learn", "PEFT/LoRA", "LangGraph", "DSPy",
      "Claude API", "Gemini API", "XGBoost", "PuLP", "Hydra", "giotto-tda",
      "Clifford/GA",
    ],
  },
  {
    label: "Backend & Cloud",
    items: [
      "FastAPI", "Spring Boot", "REST", "JWT/OAuth2", "React", "PostgreSQL (RLS)", "Redis",
      "AWS (Lambda, DynamoDB, S3, SES, EventBridge, CDK)", "Docker", "GitHub Actions",
      "Vercel", "Railway", "pytest", "JUnit", "Vitest",
    ],
  },
];

export type Contact = {
  email: string;
  github: string;
  tagline: string;
};

export const contact: Contact = {
  email: "josuetapiahernandez@gmail.com",
  github: "https://github.com/JosueT1212",
  tagline: "Open to research collaborations and founding-stage opportunities.",
};
