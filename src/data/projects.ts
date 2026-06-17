// src/data/projects.ts
export const featuredProjects = [
  {
    title: "AI-Powered Math Battle Game",
    description: "Educational multiplayer game that teaches mathematics through real-time battles, adaptive AI feedback, and equation-solving mechanics. Designed to help students build mathematical intuition by connecting gameplay progression with problem-solving strategies.",
    technologies: ["Javascript", " Node.js", "Socket.IO", "MongoDB"],
    url: "https://github.com/klopfer/collectiongame",
    updated: "Javascript • Node.js • LLMs • Socket.IO • MongoDB/Mongoose",
    tone: "from-zinc-200 via-neutral-400 to-zinc-700",
    image: "/edgame.png"
  },
  {
    title: "Medical Supply Allocation Optimization",
    description: "Mixed-integer optimization model for emergency vaccine distribution across Massachusetts hospitals. Optimizes delivery routes and inventory allocation while satisfying cold-chain requirements, vehicle capacities, and regional supply constraints to improve response efficiency during public health emergencies.",
    technologies: ["Julia", "MILP", "OpenRouteService"],
    url: "https://drive.google.com/file/d/1OLt3uqP0INPJUSzb1NmhYq6UQoioaLID/view?usp=sharing",
    updated: "Software • AI • Systems",
    tone: "from-slate-200 via-stone-400 to-black",
    image: "/med.png"
  },
  {
    title: "Generative AI for Drug Discovery",
    description: "Computational drug discovery pipeline that combines molecular generation, predictive ML scoring, and virtual screening to identify promising therapeutic candidates. Integrates molecular property prediction and optimization to accelerate early-stage drug design.",
    technologies: ["Python", "RDKit", "XGBoost", "TensorFlow"],
    url: "https://github.com/anniexlinn/mol-design",
    updated: "Software • AI • Systems",
    tone: "from-neutral-100 via-zinc-500 to-neutral-900",
    image: "/mol.png"
  },
  {
    title: "Large-Scale AI Evaluation Platform",
    description: "Serverless cloud platform for benchmarking AI capabilities across 900+ occupations and thousands of real-world tasks. Supports 5,000+ concurrent users with sub-500ms latency while automating task assignment, response collection, analytics, and evaluation workflows.",
    technologies: ["Typescript", "AWS Lambda", "DynamoDB", "API Gateway"],
    url: "#",
    updated: "Cloud • Distributed Systems • AI",
    tone: "from-blue-100 via-slate-400 to-slate-900",
    image: "/dash.png"
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    title: "Multi-Label Context-aware Inpainting System",
    description: "Computer vision pipeline that restores missing image regions using segmentation, classification, and context-aware inpainting models. Leverages scene understanding and object-level reasoning to generate more coherent and visually realistic reconstructions.",
    technologies: ["Python", "PyTorch", "MobileSAM", "OpenCV"],
    url: "https://github.com/anniexlinn/multi-context-label-inpainting",
    updated: "Software • AI • Systems",
    tone: "from-stone-100 via-zinc-400 to-stone-800",
    image: "/inpaint.png"
  },
  // {
  //   title: "Robot Simulation",
  //   description: "Grid-based simulation for modeling vacuum robot movement, pathfinding behavior, and cleaning efficiency analytics.",
  //   technologies: ["Python", "NumPy", "Matplotlib"],
  //   url: "https://github.com/anniexlinn/robot-simulation",
  //   updated: "Software • AI • Systems",
  //   tone: "from-zinc-100 via-neutral-500 to-zinc-900"
  // },
  {
    title: "Modeling Human Strength in Reading Noisy Text",
    description:
      "Bayesian noisy-channel model that reconstructs distorted text by combining contextual priors, semantic similarity, and probabilistic inference. Evaluated against behavioral data from 18 human participants.",
    technologies: ["Julia", "Gen.jl", "Bayesian Inference", "Particle Filtering"],
    url: "https://drive.google.com/file/d/1sCSXk1bGYjlcnDNO_6vcCbUo3jcUHxOu/view?usp=sharing",
    updated: "AI • Cognitive Science • Probabilistic Modeling",
    tone: "from-purple-100 via-slate-400 to-slate-900",
    image: "/noise.png"
  }
];
