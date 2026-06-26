export type Hero = {
  name: string;
  tagline: string;
  subtext: string;
  github: string;
  email: string;
  resumeUrl: string;
};

export const hero: Hero = {
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
