'use client';

import Link from 'next/link';
import Image from 'next/image';

// import { useState } from 'react';

interface ContactCardProps {
  title: string;
  link: string;
  description: string;
  svg: string;
  alt: string;
}

const ContactCard = ({ title, link, description, svg, alt }: ContactCardProps) => {
  return (
    <div className="draw-right group duration-1000 hover:-translate-y-6">
      <div className="flex h-auto w-auto max-w-xl rounded-lg transition-all">
        <Link href={link} className="flex-shrink-0">
          <Image
            src={svg}
            alt={alt}
            className="h-24 w-24 invert transition-all group-hover:scale-125 lg:h-32 lg:w-32"
          />
        </Link>
        <div className="m-5 flex flex-col">
          <Link
            href={link}
            className="underline-offset-4 transition-all hover:underline group-hover:text-purple-600"
          >
            <h1 className="text-4xl font-mono">{title} 🔗</h1>
          </Link>
          <p className='text-lg py-2'>{description}</p>
        </div>
      </div>
      <div className="mt-5 h-[1px] w-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent group-hover:animate-[draw-right_0.5s_forwards_0.1s]" />
      <style jsx>{`
        @keyframes draw-right {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactCard;
