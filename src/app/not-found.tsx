import Navbar from "./components/NavigationBar"
import GlitchText from "./components/GlitchedText";

export default function NotFound() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-7xl font-mono">
                    <GlitchText text="404"/>
                </div>

                <div className="h-[1px] w-1/3 my-5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"/>

                <h1 className="text-4xl font-mono">Page Not Found</h1>
            </div>
        </div>
    );
  }