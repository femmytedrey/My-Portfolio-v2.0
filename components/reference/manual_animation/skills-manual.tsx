"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: React.ReactNode;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
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

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "design", name: "Design" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Watchman report:", entry.isIntersecting);
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            console.log("Intersection started: ", entry.isIntersecting)
          console.log("Element is visible! Starting animations...");
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
        console.log("Starting to watch element", sectionRef.current)
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement("a");
    link.href = "/assets/cv/FemiDev-CV.pdf";
    link.download = "FemiDev-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black text-white relative"
      id="skills"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #aa367c 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #4a2fbd 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span
            className={`font-bold tracking-wide px-3 py-2 inline-block mb-6 text-lg border border-white/50 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My Expertise
          </span>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Technologies
          </h2>

          <p
            className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Crafting digital experiences with cutting-edge technologies and
            creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "border border-white/50 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] text-white"
                  : "border border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-white">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-2">
                  <div
                    className="bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] h-2 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${700 + index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Section */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Download my CV to learn more about my experience and let's create
              something amazing together!
            </p>
            <button
              onClick={handleDownloadCV}
              className="group relative overflow-hidden border border-white text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 transition-all group-hover:text-black flex items-center justify-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
