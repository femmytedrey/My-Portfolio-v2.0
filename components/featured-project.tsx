import { ProjectType } from "@/types/project.type";
import { getStatusColor, getStatusText } from "@/util/util";
import { ArrowRight, Calendar, ExternalLink, Eye, Github, Star } from "lucide-react";
import Image from "next/image";

interface FeaturedProjectProps {
    projects: ProjectType[];
    setSelectedProject: (project: ProjectType | null) => void;
}
const FeaturedProject = ({projects, setSelectedProject} :FeaturedProjectProps) => {
      const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className="mb-20 transition-all duration-1000 delay-400">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.slice(0, 2).map((project, index) => (
          <div
            key={index || project.id}
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
  );
};

export default FeaturedProject;
