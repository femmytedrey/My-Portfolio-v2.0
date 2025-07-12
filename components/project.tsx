"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import HeaderSection from "./reusable_components/header-section";
import axios, { AxiosError } from "axios";
import FeaturedProjectSkeleton from "./loader/featured-project.loader";
import { ProjectType } from "@/types/project.type";
import ProjectModal from "./project-modal";
import { categories } from "./data/project-data";
import AllProject from "./all-project";
import FeaturedProject from "./featured-project";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get("/api/project");

      if (response.data?.success) {
        setProjects(response.data.projects);
      } else {
        setError("Failed to load projects");
      }
    } catch (error) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as AxiosError<{ error?: string }>;
        errorMessage = axiosError.response?.data?.error || "API Error";
      }
      setError(
        errorMessage || "Unable to load projects. Please check your connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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

        {error && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center mb-20">
            <div className="bg-red-500/10 border border-red-500/20 rounded-full p-4 mb-6">
              <AlertCircle className="w-12 h-12 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              {error}
            </p>
            <button
              onClick={fetchProjects}
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white font-semibold rounded-lg hover:from-[#4a2fbd] hover:to-[#aa367c] transition-all duration-300 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>
          </div>
        )}

        {/* Featured Projects Carousel */}
        {isLoading ? (
          <FeaturedProjectSkeleton />
        ) : (
          <FeaturedProject
            projects={projects}
            setSelectedProject={setSelectedProject}
          />
        )}

        {/* Category Filter */}
        {!error && (
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
        )}

        {/* All Projects Grid */}
        <AllProject
          isLoading={isLoading}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          error={error || null}
          projects={projects}
          setSelectedProject={setSelectedProject}
        />
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
