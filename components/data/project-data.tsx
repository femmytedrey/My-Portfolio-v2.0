import { Code, Globe, Palette, Smartphone, Zap } from "lucide-react";

export const categories = [
  { id: "all", name: "All Projects", icon: <Code className="w-4 h-4" /> },
  { id: "frontend", name: "Frontend", icon: <Globe className="w-4 h-4" /> }, 
  { id: "fullstack", name: "Full Stack", icon: <Zap className="w-4 h-4" /> },
  { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
  { id: "design", name: "UI/UX", icon: <Palette className="w-4 h-4" /> },
];
