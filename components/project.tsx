"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Code,
  Zap,
  ArrowRight,
  Filter,
  Star,
  Globe,
  Smartphone,
  Palette,
  X,
} from "lucide-react";
import HeaderSection from "./reusable_components/header-section";
import { getStatusColor, getStatusText } from "@/util/util";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  status: "completed" | "in-progress" | "coming-soon";
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX",
      longDescription:
        "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "/assets/img/temp-image.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind"],
      category: "fullstack",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/femidev/project1",
      date: "2024",
      status: "completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      longDescription:
        "A modern task management application with drag-and-drop functionality, real-time collaboration, team management, and advanced filtering options.",
      image: "/assets/img/temp-image.png",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
      category: "web",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/femidev/project2",
      date: "2024",
      status: "completed",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric auth",
      longDescription:
        "A secure mobile banking application with biometric authentication, transaction history, bill payments, and financial analytics dashboard.",
      image: "/assets/img/temp-image.png",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Expo"],
      category: "mobile",
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/femidev/project3",
      date: "2023",
      status: "completed",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio with stunning animations",
      longDescription:
        "A beautiful portfolio website with smooth animations, dark/light mode, contact forms, and optimized performance.",
      image: "/assets/img/temp-image.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      category: "web",
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/femidev/project4",
      date: "2024",
      status: "completed",
    },
    {
      id: 5,
      title: "AI Dashboard",
      description: "Analytics dashboard with AI-powered insights",
      longDescription:
        "An advanced analytics dashboard powered by AI, featuring data visualization, predictive analytics, and automated reporting.",
      image: "/assets/img/temp-image.png",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI"],
      category: "fullstack",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/femidev/project5",
      date: "2024",
      status: "in-progress",
    },
    {
      id: 6,
      title: "Design System",
      description: "Comprehensive UI component library",
      longDescription:
        "A complete design system with reusable components, design tokens, documentation, and Storybook integration.",
      image: "/assets/img/temp-image.png",
      technologies: ["React", "Storybook", "Figma", "Sass", "TypeScript"],
      category: "design",
      featured: false,
      githubUrl: "https://github.com/femidev/project6",
      date: "2023",
      status: "completed",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Code className="w-4 h-4" /> },
    { id: "web", name: "Web Apps", icon: <Globe className="w-4 h-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "fullstack", name: "Full Stack", icon: <Zap className="w-4 h-4" /> },
    { id: "design", name: "Design", icon: <Palette className="w-4 h-4" /> },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
  className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-gray-800"
  id="projects"
>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#4a2fbd] to-[#aa367c] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 relative z-10">
        {/* Header */}
        <HeaderSection
          badge="My Work"
          title="Featured Projects"
          subtitle="Showcasing my passion for creating innovative digital solutions that solve real-world problems"
        />

        {/* Featured Projects Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-400 `}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-500"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center px-3 py-1 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white text-sm font-medium rounded-full">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`flex items-center px-3 py-1 ${getStatusColor(
                      project.status
                    )} text-white text-sm font-medium rounded-full`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Overlay Actions */}
                  <div className="absolute bg-gradient-to-t from-black/80 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white hover:from-[#4a2fbd] hover:to-[#aa367c] transition-all duration-300 transform hover:scale-110"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#aa367c] group-hover:to-[#4a2fbd] transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-[#aa367c20] to-[#4a2fbd20] text-white text-sm rounded-full border border-white/20">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn flex items-center text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#aa367c] hover:to-[#4a2fbd] transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 transition-all duration-1000 delay-600 `}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "border border-white/50 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] text-white"
                  : "border border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className={`transition-all duration-1000 delay-700 `}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-500 transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 rounded"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 rounded"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 ${getStatusColor(
                        project.status
                      )} text-white text-xs font-medium rounded`}
                    >
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#aa367c] group-hover:to-[#4a2fbd] transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-[#aa367c20] to-[#4a2fbd20] text-white text-xs rounded border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button className="group relative overflow-hidden border border-white text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 transition-all group-hover:text-black">
                Load More Projects
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          onClick={() => {
            setSelectedProject(null);
          }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 rounded"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  <span
                    className={`px-3 py-1 ${getStatusColor(
                      selectedProject.status
                    )} text-white text-sm font-medium rounded`}
                  >
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>
                <p className="text-gray-200 text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Project Details */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  About This Project
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-[#aa367c20] to-[#4a2fbd20] text-white border border-white/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Site
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
