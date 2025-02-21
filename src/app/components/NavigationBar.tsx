'use client';

import Link from 'next/link'
import GlitchText from './GlitchedText';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="m-5 p-3 flex justify-between items-center">
        {/* Left side: Logo/Text */}
        <Link href="/" className='text-4xl'>
          <GlitchText text='Washi.Dev'/>
        </Link>

        {/* Right side: Navigation Links */}
        <div className="flex space-x-10 font-mono">
            <Link href="/projects" className="p-3 underline-offset-4 opacity-85 text-xl hover:underline">PROJECTS</Link>
            <Link href="/contact" className="p-3 underline-offset-4 opacity-85 text-xl hover:underline">CONTACT</Link>
            <Link href="/blog" className="p-3 underline-offset-4 opacity-85 text-xl hover:underline">BLOG</Link>
        </div>
      </div>
    </nav>
  )
}