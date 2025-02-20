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
            className="text-lg opacity-70 border-2 p-1.5 rounded-md m-1 
                transition-all duration-500 ease-in-out 
                hover:shadow-lg hover:border-purple-600 hover:text-white 
                hover:opacity-100 hover:-translate-y-2  hover:scale-110 font-mono"
            >
            {text}
        </button>
    );
};

export default WireButton;
