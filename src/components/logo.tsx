import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showFullName?: boolean;
}

export function Logo({ size = "md", className = "", showFullName = false }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-2xl"
  };

  const containerClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4"
  };
  
  return (
    <div className={`flex items-center ${containerClasses[size]} ${className}`}>
      {/* Text-based logo */}
      <div className="relative">
        <span className={`font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${sizeClasses[size]}`}>
          {showFullName ? "Jaeung Jang" : "JJ"}
        </span>
        {/* Subtle accent dot */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60" />
      </div>
    </div>
  );
}
