import Navbar from '../components/NavigationBar';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-32 flex-1 px-4">
        <div
          className="mx-auto w-[98%] rounded-2xl p-5 outline"
          style={{
            outline: '2px dashed rgba(150, 150, 150, 10)',
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
