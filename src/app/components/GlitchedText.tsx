'use client'

import { useState, useEffect } from 'react';

interface GlitchCharProps {
  char: string;
}

const GlitchChar = ({ char }: GlitchCharProps) => {
  const [displayChar, setDisplayChar] = useState(char);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayChar(char);
      return;
    }

    const randomCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
    setDisplayChar(String.fromCharCode(randomCharCode));

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const randomCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
        setDisplayChar(String.fromCharCode(randomCharCode));
      }
    }, 250);

    return () => clearInterval(interval);
  }, [char, isHovered]);

  return (
    <span 
      className="inline-block cursor-pointer mx-[5px] hover:text-purple-600 transition-colors font-mono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTimeout(() => {
            setIsHovered(false);
            setDisplayChar(char);
        }, Math.random() * 2500 + 500); // Continue effect for 2 seconds before stopping
      }}
    >
      {displayChar}
    </span>
  );
};

interface GlitchTextProps {
  text: string;
}

const GlitchText = ({ text }: GlitchTextProps) => {
  const characters = text.split('');

  return (
    <span className="inline-block">
      {characters.map((char, index) => (
        <GlitchChar
          key={`${index}-${char}`}
          char={char}
        />
      ))}
    </span>
  );
};

export default GlitchText;