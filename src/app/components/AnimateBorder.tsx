'use client'

import React, { ReactNode } from 'react';

interface AnimatedBorderBoxProps {
  children: ReactNode;
  className?: string;
}

const AnimatedBorderBox: React.FC<AnimatedBorderBoxProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className="relative group">
      {/* The content container */}
      <div className={`relative z-10 p-6 ${className}`}>
        {children}
      </div>
      
      {/* Animated borders - positioned absolutely */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left border */}
        <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-purple-500 group-hover:animate-[draw-up_0.3s_forwards_0.1s]" />
      </div>

      {/* CSS animations defined inline */}
      <style jsx>{`
        @keyframes draw-up {
          0% { height: 0%; bottom: 0; }
          100% { height: 100%; bottom: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBorderBox;