import type { SkillGroup } from "./types";

// No percentages, no bars — skills are grouped, never rated.
export const skillGroups: SkillGroup[] = [
  {
    label: "Artificial intelligence",
    description: "Independent study, daily experimentation, and applied practice.",
    skills: [
      "AI agents",
      "Prompt engineering",
      "Large language models",
      "Medical AI",
      "Intelligent automation",
      "AI-assisted research",
      "AI-assisted writing",
      "AI ethics",
    ],
  },
  {
    label: "Tools",
    description: "Day-to-day working environment.",
    skills: [
      "ChatGPT",
      "Claude",
      "Claude Code",
      "Gemini",
      "AI image generation tools",
      "Microsoft Office",
      "Google Workspace",
      "Canva",
      "Adobe Photoshop",
    ],
  },
  {
    label: "Leadership",
    description: "Working with and for other people.",
    skills: [
      "Team leadership",
      "Project planning",
      "Delegation",
      "Public speaking",
      "Event organisation",
      "Student representation",
      "Community organising",
    ],
  },
  {
    label: "Communication",
    description: "Languages and how ideas travel.",
    skills: [
      "Albanian (native)",
      "English (C1 Advanced)",
      "German (A2)",
      "Professional writing",
      "Presentation design",
      "Visual communication",
      "Social media management",
    ],
  },
  {
    label: "Currently learning",
    description: "The next stage of the journey.",
    skills: [
      "Python programming",
      "Git and GitHub workflows",
      "API integration",
      "AI agent development",
      "Machine learning fundamentals",
      "Medical AI applications",
    ],
  },
];

export const languages = [
  {
    name: "Albanian",
    level: "Native",
    detail:
      "The foundation of personal identity, education, and communication — the language of leadership, school initiatives, and community work throughout Kosovo.",
  },
  {
    name: "English",
    level: "Advanced (C1)",
    detail:
      "Nearly ten years of structured study through Cambridge School of Kosovo and Oxford Studio ELT. The working language of ODYLP-EAGLE 2026 and of technical study in AI and science.",
  },
  {
    name: "German",
    level: "A2",
    detail:
      "Currently studying, with progression beyond A2 planned alongside future academic work.",
  },
];
