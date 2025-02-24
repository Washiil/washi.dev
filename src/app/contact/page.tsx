import Image from 'next/image';
import Navbar from '../components/NavigationBar';
import linkedinIcon from '../../../public/linkedin.svg';
import githubIcon from '../../../public/github.svg';
import mailIcon from '../../../public/email.svg';
import webIcon from '../../../public/web.svg';

export default function Contact() {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-32 flex-1 px-4">
        <div className="mx-auto w-fit rounded-2xl">
          <div className="md:grid-row-2 grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-lg transition-all hover:scale-125">
              <Image src={githubIcon} alt="Github SVG" className="h-52 w-52 invert" />
            </div>
            <div className="flex h-64 w-64 items-center justify-center rounded-lg transition-all hover:scale-125">
              <Image src={linkedinIcon} alt="LinkedIn SVG" className="h-60 w-60 invert" />
            </div>
            <div className="flex h-64 w-64 items-center justify-center rounded-lg transition-all hover:scale-125">
              <Image src={mailIcon} alt="Mail SVG" className="h-60 w-60 invert" />
            </div>
            <div className="flex h-64 w-64 items-center justify-center rounded-lg transition-all hover:scale-125">
              <Image src={webIcon} alt="Web SVG" className="h-60 w-60 invert" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
