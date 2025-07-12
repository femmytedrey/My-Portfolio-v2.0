import React from "react";

const FeaturedProjectSkeleton = () => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2].map((i, index) => (
          <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden animate-pulse">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-20">
              <div className="h-6 bg-gray-700 rounded-full w-20"></div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="h-6 bg-gray-700 rounded-full w-24"></div>
            </div>

            {/* Image Skeleton */}
            <div className="relative h-64 bg-gray-700"></div>

            {/* Content */}
            <div className="p-6">
              {/* Title and Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="h-7 bg-gray-700 rounded w-1/2"></div>
                <div className="h-5 bg-gray-700 rounded w-20"></div>
              </div>

              {/* Description */}
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-7 bg-gray-700 rounded-full w-16"></div>
                <div className="h-7 bg-gray-700 rounded-full w-20"></div>
                <div className="h-7 bg-gray-700 rounded-full w-18"></div>
                <div className="h-7 bg-gray-700 rounded-full w-14"></div>
              </div>

              {/* Learn More Button */}
              <div className="h-5 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectSkeleton;
