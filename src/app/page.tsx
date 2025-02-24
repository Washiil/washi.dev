// import Image from "next/image";
import React from 'react';
import GlitchText from './components/GlitchedText';
// import WireButton from "./components/WireButton";
import Link from 'next/link';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
        <GlitchText text="Washi" />
        <span>.</span>
        <GlitchText text="Dev" />
      </h1>
      
      <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="m-2 p-3 font-mono text-xl underline-offset-4 opacity-65 transition-all hover:-translate-y-2 hover:scale-125 hover:text-purple-600 hover:underline hover:opacity-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </main>
  );
}
