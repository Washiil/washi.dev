'use client'

import { useState, useEffect } from 'react';

interface GlitchCharProps {
  char: string;
}

const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?></{}[]\\|+=@#$%^&".split('');

const getRandomChar = () => {
  return possibleChars[Math.floor(Math.random() * possibleChars.length)];
}

const GlitchChar = ({ char }: GlitchCharProps) => {
  const [displayChar, setDisplayChar] = useState(char);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayChar(char);
      return;
    }

    setDisplayChar(getRandomChar);

    // Glitch effect while hovered
    const interval = setInterval(() => {
      setDisplayChar(getRandomChar);
    }, Math.random() * 100 + 200); // Faster updates for glitch effect

    return () => clearInterval(interval);
  }, [isHovered, char]);

  useEffect(() => {
    if (isHovered) return; // Avoid interference with hover effect

    // Random glitch effect even when not hovered (5% chance per second)
    const randomGlitchInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        setIsHovered(true);

        setTimeout(() => {
          setIsHovered(false);
        }, Math.random() * 750 + 300);
      }
    }, Math.random() * 750 + 300);

    return () => clearInterval(randomGlitchInterval);
  }, [char, isHovered]);

  return (
    <span 
      className={`inline-block cursor-pointer mx-[2px] transition-all font-mono 
        ${isHovered ? 'text-purple-600 -translate-y-4' : 'text-white-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setIsHovered(false);
          setDisplayChar(char);
        }, Math.random() * 2500 + 500); // Keep glitching for 500ms after leaving
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
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <GlitchChar key={`${index}-${char}`} char={char} />
      ))}
    </span>
  );
};

export default GlitchText;
