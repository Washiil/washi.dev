'use client';

import React, { ReactNode } from 'react';

interface AnimatedBorderBoxProps {
  children: ReactNode;
  className?: string;
}

const LaserBorderBottom: React.FC<AnimatedBorderBoxProps> = ({ children, className = '' }) => {
  return (
    <div className="group relative">
      {/* The content container */}
      <div className={`relative z-10 p-6 ${className}`}>{children}</div>

      {/* Animated borders - positioned absolutely */}
      <div className="absolute inset-0">
        {/* Left border */}
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent group-hover:animate-[draw-right_0.3s_forwards_0.1s]"/>
      </div>

      {/* CSS animations defined inline */}
      <style jsx>{`
        @keyframes draw-right {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LaserBorderBottom;
