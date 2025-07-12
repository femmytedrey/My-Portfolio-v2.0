import {
  Code,
  Database,
  Globe,
  Server,
  Palette,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: React.ReactNode;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 98,
    category: "frontend",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "React/Next.js",
    level: 95,
    category: "frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "TypeScript",
    level: 90,
    category: "frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "Vue.js",
    level: 85,
    category: "frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "Tailwind CSS",
    level: 92,
    category: "frontend",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: "Bootstrap CSS",
    level: 85,
    category: "frontend",
    icon: <Palette className="w-5 h-5" />,
  },
  // { name: 'React Native', level: 85, category: 'frontend', icon: <Smartphone className="w-5 h-5" /> },

  // Backend
  {
    name: "Node.js",
    level: 88,
    category: "backend",
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "MongoDB",
    level: 90,
    category: "backend",
    icon: <Database className="w-5 h-5" />,
  },
  // { name: 'PostgreSQL', level: 87, category: 'backend', icon: <Database className="w-5 h-5" /> },
  {
    name: "Express.js",
    level: 92,
    category: "backend",
    icon: <Server className="w-5 h-5" />,
  },
  // { name: 'GraphQL', level: 80, category: 'backend', icon: <Database className="w-5 h-5" /> },

  // Tools
  {
    name: "Git/GitHub",
    level: 95,
    category: "tools",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "Docker",
    level: 82,
    category: "tools",
    icon: <Server className="w-5 h-5" />,
  },
  // { name: 'AWS', level: 78, category: 'tools', icon: <Server className="w-5 h-5" /> },
  {
    name: "Vercel",
    level: 90,
    category: "tools",
    icon: <Globe className="w-5 h-5" />,
  },

  // Design
  {
    name: "Figma",
    level: 85,
    category: "design",
    icon: <Palette className="w-5 h-5" />,
  },
  // { name: 'UI/UX Design', level: 88, category: 'design', icon: <Palette className="w-5 h-5" /> },
];

export const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools" },
  { id: "design", name: "Design" },
];
