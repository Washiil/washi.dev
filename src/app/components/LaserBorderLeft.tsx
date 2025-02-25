'use client';

import React, { ReactNode } from 'react';

interface AnimatedBorderBoxProps {
  children: ReactNode;
  className?: string;
}

const LaserBorderLeft: React.FC<AnimatedBorderBoxProps> = ({ children, className = '' }) => {
  return (
    <div className="group relative">
      {/* The content container */}
      <div className={`relative z-10 p-6 ${className}`}>{children}</div>

      {/* Animated borders - positioned absolutely */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left border */}
        <div className="absolute bottom-0 left-0 h-0 w-[1px] bg-gradient-to-t from-transparent via-purple-600 to-transparent group-hover:animate-[draw-up_0.3s_forwards_0.1s]" />
      </div>

      {/* CSS animations defined inline */}
      <style jsx>{`
        @keyframes draw-up {
          0% {
            height: 0%;
            bottom: 0;
          }
          100% {
            height: 100%;
            bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LaserBorderLeft;
