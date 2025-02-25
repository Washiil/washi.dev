import Navbar from '../components/NavigationBar';
import linkedinIcon from '../../../public/linkedin.svg';
import githubIcon from '../../../public/github.svg';
import mailIcon from '../../../public/email.svg';
import webIcon from '../../../public/web.svg';
import ContactCard from '../components/ContactCard';

export default function Contact() {
  return (
    // Use flex-col to stack elements vertically
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar />

      {/* Add margin-top for spacing and make content area flexible */}
      <main className="mt-56">
        <div className="mx-[8%] rounded-2xl">
          <div className="lg:grid-row-2 grid grid-cols-1 grid-rows-1 place-items-center gap-x-4 gap-y-4 font-mono lg:grid-cols-2 lg:gap-y-16">
            <ContactCard
              title="Github"
              alt="Github SVG"
              svg={githubIcon}
              description="This is my personal GitHub. It contains passion projects, commisions, and more!"
              link="https://github.com/Washiil"
            />
            <ContactCard
              title="LinkedIn"
              alt="LinkedIn SVG"
              svg={linkedinIcon}
              description="Connect with me here and we can chat! Always looking to meet new people!"
              link="https://github.com/Washiil" // Replace with your LinkedIn link
            />
            <ContactCard
              title="Email"
              alt="Mail SVG"
              svg={mailIcon}
              description="All inquiries are welcome! I love to chat and am open for most any project!"
              link="https://github.com/Washiil" // Replace with your email link or a mailto: link
            />
            <ContactCard
              title="Portfolio"
              alt="Web SVG"
              svg={webIcon}
              description="My personal portfolio which you are currently viewing! Checkout my projects page for more fun stuff!"
              link="https://github.com/Washiil" // Replace with your portfolio link
            />
          </div>
        </div>

        <div className="mx-20 mb-12 mt-20 text-center font-mono">
          <p>Thank you for visiting my website hope to hear from you soon! ❤️</p>
        </div>
      </main>
    </div>
  );
}
