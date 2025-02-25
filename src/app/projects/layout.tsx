import Navbar from '../components/NavigationBar';

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-500/20 to-black">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-40 flex-1 px-4">
        <div className="w-full text-center">
          <h1 className="font-mono text-4xl">Projects</h1>
        </div>
        <div className="mx-auto w-[98%] rounded-2xl p-5">{children}</div>
      </main>
    </div>
  );
}
