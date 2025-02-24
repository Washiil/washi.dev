'use client';

import Link from 'next/link';
import GlitchText from './GlitchedText';

export default function Navbar() {
  return (
    <nav className="fixed backdrop-blur-lg left-0 right-0 top-0 z-50 bg-gradient-to-b from-zinc-800 to-transparent">
      <div className="m-5 flex flex-col items-center justify-between p-3 md:flex-row">
        {/* Left side: Logo/Text */}
        <Link href="/" className="text-4xl pl-12">
          <GlitchText text="Washi" />
          <span>.</span>
          <GlitchText text="Dev"/>
        </Link>

        {/* Right side: Navigation Links */}
        <div className="flex space-x-4 font-mono">
          <Link
            href="/projects"
            className="p-3 text-xl underline-offset-4 opacity-85 hover:underline"
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className="p-3 text-xl underline-offset-4 opacity-85 hover:underline"
          >
            CONTACT
          </Link>
          <Link href="/blog" className="p-3 text-xl underline-offset-4 opacity-85 hover:underline">
            BLOG
          </Link>
        </div>
      </div>
      <div className='w-full outline outline-1 outline-gray-50/5'/>
    </nav>
  );
}
