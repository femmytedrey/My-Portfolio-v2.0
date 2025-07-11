import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base md:text-lg",
    lg: "px-3 py-2 text-lg",
  };

  const baseClasses = `
    font-bold 
    tracking-wide 
    inline-block 
    border 
    border-white/50 
    bg-gradient-to-r 
    from-[#aa367c80] 
    to-[#4a2fbd80] 
    rounded-sm
    ${sizeClasses[size]}
  `;

  return (
    <span className={`${baseClasses} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default SectionBadge;
