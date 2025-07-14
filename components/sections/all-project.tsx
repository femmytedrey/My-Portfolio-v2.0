import { ProjectType } from "@/types/project.type";
import ProjectSkeleton from "../loaders/project-skeleton";
import { categories } from "../../data/project-data";
import { ArrowRight, Code, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { getStatusColor, getStatusText } from "@/lib/util/util";
import { useState } from "react";

interface AllProjectProps {
  isLoading: boolean;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  error: string | null;
  projects: ProjectType[];
  setSelectedProject: (project: ProjectType | null) => void;
}

const AllProject = ({
  isLoading,
  activeCategory,
  setActiveCategory,
  setSelectedProject,
  error,
  projects,
}: AllProjectProps) => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {isLoading && (
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i, index) => (
              <div key={index}>
                <ProjectSkeleton />
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && !isLoading && !error && (
        <div className="flex flex-col items-center justify-center min-h-[388px] text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-full p-6 mb-6">
            <Code className="w-16 h-16 text-gray-400" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            No Projects Found
          </h3>

          <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
            {activeCategory === "all"
              ? "No projects available at the moment. Check back soon for amazing work!"
              : `No ${categories
                  .find((cat) => cat.id === activeCategory)
                  ?.name.toLowerCase()} projects found. Try a different category.`}
          </p>

          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white font-semibold rounded-lg hover:from-[#4a2fbd] hover:to-[#aa367c] transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Projects
            </button>
          )}
        </div>
      )}

      <div className={`transition-all duration-1000 delay-700 `}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, itemsToShow).map((project, index) => (
            <div
              key={index || project.id}
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
          <button
            onClick={() => setItemsToShow(itemsToShow + 6)}
            className="group relative overflow-hidden border border-white text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 transition-all group-hover:text-black">
              Load More Projects
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      )}
    </>
  );
};

export default AllProject;
