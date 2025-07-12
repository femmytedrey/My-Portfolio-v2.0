import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-700"></div>

      {/* Content Skeleton */}
      <div className="p-5">
        {/* Title and Star */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 w-4 bg-gray-700 rounded"></div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          <div className="h-6 bg-gray-700 rounded w-16"></div>
          <div className="h-6 bg-gray-700 rounded w-20"></div>
          <div className="h-6 bg-gray-700 rounded w-14"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
