import Image from 'next/image';
import Navbar from '../components/NavigationBar';
import linkedinIcon from '../../../public/linkedin.svg';
import githubIcon from '../../../public/github.svg';
import mailIcon from '../../../public/email.svg';
import webIcon from '../../../public/web.svg';
import LaserBorderBottom from '../components/LaserBorderBottom';
import Link from 'next/link';

export default function Contact() {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-56">
        <div className="mx-auto rounded-2xl">
          <div className="lg:grid-row-2 grid grid-cols-1 grid-rows-1 gap-y-4 lg:gap-y-16 gap-x-4 lg:grid-cols-2 font-mono">
            <LaserBorderBottom className='group'>
                <div className="flex h-auto w-auto rounded-lg transition-all">
                    <Image src={githubIcon} alt="Github SVG" className="lg:h-36 lg:w-36 h-24 w-24 invert transition-all group-hover:scale-125"/>
                    <div className='flex flex-col m-5'>
                        <Link href={"https://github.com/Washiil"} className='hover:text-purple-600 underline-offset-4 hover:underline transition-all'>
                            <p className='text-4xl'>Github 🔗</p>
                        </Link>
                        <p>This is my personal GitHub. It contains passion projects, commisions, and more!</p>
                    </div>
                </div>
            </LaserBorderBottom>
            <LaserBorderBottom className='group'>
                <div className="flex h-auto w-auto rounded-lg transition-all">
                    <Image src={linkedinIcon} alt="LinkedIn SVG" className="lg:h-36 lg:w-36 h-24 w-24 invert transition-all group-hover:scale-125"/>
                    <div className='flex flex-col m-5'>
                        <Link href={"https://github.com/Washiil"} className='hover:text-purple-600 underline-offset-4 hover:underline transition-all'>
                            <p className='text-4xl'>LinkedIn 🔗</p>
                        </Link>
                        <p>Connect with me here and we can chat! Always looking to meet new people!</p>
                    </div>
                </div>
            </LaserBorderBottom>
            <LaserBorderBottom className='group'>
                <div className="flex h-auto w-auto rounded-lg transition-all">
                    <Image src={mailIcon} alt="Mail SVG" className="lg:h-36 lg:w-36 h-24 w-24 invert transition-all group-hover:scale-125"/>
                    <div className='flex flex-col m-5'>
                        <Link href={"https://github.com/Washiil"} className='hover:text-purple-600 underline-offset-4 hover:underline transition-all'>
                            <p className='text-4xl'>Email 🔗</p>
                        </Link>
                        <p>All inquiries are welcome! I love to chat and am open for most any project!</p>
                    </div>
                </div>
            </LaserBorderBottom>
            <LaserBorderBottom className='group'>
                <div className="flex h-auto w-auto rounded-lg transition-all">
                    <Image src={webIcon} alt="Web SVG" className="lg:h-36 lg:w-36 h-24 w-24 invert transition-all group-hover:scale-125"/>
                    <div className='flex flex-col m-5'>
                        <Link href={"https://github.com/Washiil"} className='hover:text-purple-600 underline-offset-4 hover:underline transition-all'>
                            <p className='text-4xl'>Portfolio 🔗</p>
                        </Link>
                        <p>My personal portfolio which you are currently viewing! Checkout my projects page for more fun stuff!</p>
                    </div>
                </div>
            </LaserBorderBottom>
          </div>
        </div>
      </main>
    </div>
  );
}
