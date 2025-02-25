'use client';

import LaserBorderBottom from './LaserBorderBottom';
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
    <LaserBorderBottom className="group">
      <div className="flex h-auto w-auto max-w-xl rounded-lg transition-all">
        <Link href={link} className="flex-shrink-0"> {/* Wrap the Image in a Link */}
          <Image
            src={svg}
            alt={alt}
            className="h-24 w-24 invert transition-all group-hover:scale-125 lg:h-32 lg:w-32"
          />
        </Link>
        <div className="m-5 flex flex-col">
          <Link
            href={link}
            className="underline-offset-4 transition-all group-hover:text-purple-600 hover:underline"
          >
            <p className="text-4xl">{title} 🔗</p>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </LaserBorderBottom>
  );
};

export default ContactCard;
