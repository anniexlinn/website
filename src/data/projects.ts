// src/data/projects.ts
export const featuredProjects = [
  {
    title: "AI-Powered Math Battle Card Game",
    description: "A full-stack, educational web game that teaches mathematics through AI-powered battles. Designed for engagement and learning using real-time feedback and equation-solving mechanics.",
    technologies: ["JavaScript", "Node.js", "HTML/CSS", "OpenAI API", "Gemini API", "MongoDB", "Phaser"],
    url: "https://github.com/klopfer/collectiongame",
    updated: "Updated recently"
  },
  {
    title: "Website Cloner",
    description: "A full-stack web app with an AI agent that clones and captures the aesthetics of any website given the URL.",
    technologies: ["Typescript", "JavaScript", "Python", "Node.js", "HTML/CSS", "Playwright", "Claude API"],
    url: "https://github.com/anniexlinn/website-cloner",
    updated: "Updated yesterday"
  },
  {
    title: "Generative AI for Drug Discovery",
    description: "ML-powered generator to design pharmaceutically active molecules for drug discovery using evolutionary optimization and deep learning.",
    technologies: ["Python", "RDKit", "XGBoost", "RandomForest", "TensorFlow", ],
    url: "https://github.com/anniexlinn/mol-design",
    updated: "Updated yesterday"
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    title: "Multi-Label Context-aware Inpainting System",
    description: "AI system that intelligently fills missing image regions using context-aware segmentation, AI classification, and inpainting models.",
    technologies: ["Python", "PyTorch", "MobileSAM", "DeepFill", "OpenCV"],
    url: "https://github.com/anniexlinn/multi-context-label-inpainting",
    updated: "Updated yesterday"
  },
  {
    title: "Robot simulation",
    description: "A grid-based simulation that explores the movement of vacuum robots in rooms to optimize pathfinding with cleaning efficiency analytics.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    url: "https://github.com/anniexlinn/robot-simulation",
    updated: "Updated yesterday"
  },
  {
    title: "Lightning Code Explainer",
    description: "CLI tool using Cerebras's Qwen3 model to generate rapid code explanations in < 0.5s.",
    technologies: ["Python", "Cerebras SDK", "NLP", "HuggingFace Transformers"],
    url: "https://github.com/anniexlinn/cerebras-code-explainer",
    updated: "Updated yesterday"
  }
];
