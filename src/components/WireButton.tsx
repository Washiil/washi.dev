'use client';

// import { useState } from 'react';

interface WireButtonProps {
  text: string;
  onClick?: () => void; // Optional click handler
}

const WireButton = ({ text, onClick }: WireButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="m-1 rounded-md border-2 p-1.5 font-mono text-lg opacity-70 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-110 hover:border-purple-600 hover:text-white hover:opacity-100 hover:shadow-lg"
    >
      {text}
    </button>
  );
};

export default WireButton;
