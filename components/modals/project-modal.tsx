import { ProjectType } from "@/types/project.type";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { getStatusColor, getStatusText } from "@/lib/util/util";

interface ProjectModalProps {
  selectedProject: ProjectType;
  setSelectedProject: (project: ProjectType | null) => void;
}

const ProjectModal = ({
  selectedProject,
  setSelectedProject,
}: ProjectModalProps) => {
  return (
    <div
      onClick={() => {
        setSelectedProject(null);
      }}
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.3, opacity: 0 }}
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
        <div className="p-6 md:p-8 text-start">
          {/* Project Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 ">
              About This Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {selectedProject.longDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-start">
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
      </motion.div>
    </div>
  );
};

export default ProjectModal;
