import Image from 'next/image';
import Navbar from '../components/NavigationBar';
import linkedinIcon from '../../../public/linkedin.svg'
import githubIcon from '../../../public/github.svg'
import mailIcon from '../../../public/email.svg'
import webIcon from '../../../public/web.svg'

export default function Contact() {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-32 flex-1 px-4">
        <div className="mx-auto w-fit rounded-2xl">
            <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2 md:grid-row-2">
                <div className="rounded-lg flex items-center justify-center transition-all hover:scale-125 h-64 w-64">
                    <Image src={githubIcon} alt='Github SVG' className='invert h-52 w-52'/>
                </div>
                <div className="rounded-lg flex items-center justify-center transition-all hover:scale-125 h-64 w-64">
                    <Image src={linkedinIcon} alt='LinkedIn SVG' className='invert h-60 w-60'/>
                </div>
                <div className="rounded-lg flex items-center justify-center transition-all hover:scale-125 h-64 w-64">
                    <Image src={mailIcon} alt='Mail SVG' className='invert h-60 w-60'/>
                </div>
                <div className="rounded-lg flex items-center justify-center transition-all hover:scale-125 h-64 w-64">
                    <Image src={webIcon} alt='Web SVG' className='invert h-60 w-60'/>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
