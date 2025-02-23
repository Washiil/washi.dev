import Navbar from '../components/NavigationBar'

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        // Use flex-col to stack elements vertically
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Add margin-top for spacing and make content area flexible */}
            <main className="flex-1 mt-32 px-4">
                <div className="w-[98%] outline rounded-2xl mx-auto p-5"
                    style={{
                        outline: '2px dashed rgba(150, 150, 150, 10)',
                    }}>
                    {children}
                </div>
            </main>
        </div>
    );
}