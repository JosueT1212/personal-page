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
  bio1: "I'm Josue Tapia Hernández, studying Mathematics and Data Science at Tecnológico de Monterrey with a 97/100 GPA. I co-founded JATA, an AgTech startup that won 1st place at the UST Hackathon, and I research Lorentz Equivariant GNNs for high-energy physics.",
  bio2: "I want to be at the frontier of AI — the kind of person who publishes rigorous research AND ships systems people use. Obsessive about hard problems since my olympiad days.",
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
    github: "https://github.com/JosueT1212/hive",
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
    title: "ML for Medical Applications",
    subtitle: "Clinical ML Classification Suite",
    description:
      "Collection of supervised learning models applied to medical datasets — disease classification, risk stratification, and diagnostic support.",
    highlights: [
      "Binary and multi-class classifiers (SVM, Random Forest, Neural Nets) on clinical tabular data",
      "Rigorous cross-validation, AUC-ROC evaluation, and class imbalance handling",
      "Explainability layer: SHAP values for feature attribution on model decisions",
    ],
    stack: ["Python", "scikit-learn", "PyTorch", "SHAP", "pandas", "Jupyter"],
    github: "https://github.com/JosueT1212/Machine_Learning_for_Medical_Applications",
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
  {
    title: "Deep RL in Pneumatic Systems",
    subtitle: "Control Systems + Reinforcement Learning",
    description:
      "Applied Deep Reinforcement Learning to control a pneumatic system, training a policy to maintain pressure setpoints under dynamic load conditions.",
    highlights: [
      "Implemented DRL agent (PPO) in C++ interfacing with a simulated pneumatic actuator",
      "Custom reward shaping for energy efficiency + setpoint tracking",
      "Outperformed PID baseline by 23% on settling time across test scenarios",
    ],
    stack: ["C++", "Python", "PyTorch", "Gym", "PPO"],
    github: "https://github.com/JosueT1212/DRL-in-pneumatic-system",
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
