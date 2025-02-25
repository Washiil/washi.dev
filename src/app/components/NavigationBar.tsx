'use client';

import Link from 'next/link';
import GlitchText from './GlitchedText';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-zinc-800 to-transparent backdrop-blur-lg">
      <div className="m-5 flex flex-col items-center justify-between p-3 md:flex-row">
        {/* Left side: Logo/Text */}
        <button
          onClick={handleBackClick}
          className="pl-12 text-4xl transition-all duration-700 hover:scale-110"
        >
          <span>← </span>
          <GlitchText text="Washi" />
          <span>.</span>
          <GlitchText text="Dev" />
        </button>

        {/* Right side: Navigation Links */}
        <div className="flex space-x-4 font-mono font-light">
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
      <div className="w-full outline outline-1 outline-gray-50/5" />
    </nav>
  );
}
