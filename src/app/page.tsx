// import Image from "next/image";
import React from "react";
import GlitchText from "./components/GlitchedText";
import WireButton from "./components/WireButton";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog"}
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
      
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <GlitchText text="Washi"/>
        <span>.</span>
        <GlitchText text="Dev"/>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <WireButton key={item.href} text={item.name}/>
            ))}
          </ul>
      </nav>

    </div>
  );
}
