import Navbar from "../components/NavigationBar";

export default function Contact() {
    return (
        // Use flex-col to stack elements vertically
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Add margin-top for spacing and make content area flexible */}
            <main className="flex-1 mt-32 px-4">
                <div className="w-[98%] outline rounded-2xl mx-auto"
                    style={{
                        outline: '2px dashed rgba(150, 150, 150, 10)',
                    }}>
                    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                        <h1 className="text-4xl font-mono">Contact is Under Construction</h1>
                    </div>
                </div>
            </main>
        </div>
    );
}
