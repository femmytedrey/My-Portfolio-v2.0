"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import HeaderSection from "../layout/header-section";
import { categories, skills } from "../../data/skills";
import { Links } from "@/types/link.type";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const handleDownloadCV = () => {
    window.open(Links.CV, "_blank");
  };

  return (
    <section
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
        <HeaderSection
          badge="My Expertise"
          title="Skills & Technologies"
          subtitle="Crafting digital experiences with cutting-edge technologies and creative solutions"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 transition-all duration-1000 delay-400"
        >
          {categories.map((category) => (
            <motion.button
              initial={{ y: 0 }}
              whileTap={{ y: 20 }}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "border border-white/50 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] text-white"
                  : "border border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105"
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
                  <div className="bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] h-2 transition-all duration-1000 ease-out"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Download my CV to learn more about my experience and let&apos;s
              create something amazing together!
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
        </motion.div>

        {/* Stats Section
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-900 `}
        >
          {[
            { number: "10+", label: "Projects Completed" },
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
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
