import Navbar from '../components/NavigationBar';
import GlitchText from '../components/GlitchedText';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="font-mono text-7xl">
          <GlitchText text="404" />
        </div>

        <div className="my-5 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

        <h1 className="font-mono text-4xl">Page Not Found</h1>
      </div>
    </div>
  );
}
