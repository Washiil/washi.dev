// Will most likely be using MDX with some sort of content based
// management system to format and display the MDX files and then
// use these files to diaply here so that I can reduce overhead.

import Navbar from '../components/NavigationBar';

export default function Projects() {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-32 flex-1 px-4">
        <div
          className="mx-auto w-[98%] rounded-2xl outline"
          style={{
            outline: '2px dashed rgba(150, 150, 150, 10)',
          }}
        >
          <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <h1 className="font-mono text-4xl">Contact page is Under Construction</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
