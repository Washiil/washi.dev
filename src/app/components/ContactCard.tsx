'use client';

import LaserBorderBottom from "./LaserBorderBottom";
import Link from "next/link";
import Image from "next/image";

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
        <LaserBorderBottom className='group'>
            <div className="flex h-auto w-auto max-w-xl rounded-lg transition-all">
                <Image src={svg} alt={alt} className="lg:h-32 lg:w-32 h-24 w-24 invert transition-all group-hover:scale-125"/>
                <div className='flex flex-col m-5'>
                    <Link href={link} className='hover:text-purple-600 underline-offset-4 hover:underline transition-all'>
                        <p className='text-4xl'>{title} 🔗</p>
                    </Link>
                    <p>{description}</p>
                </div>
            </div>
        </LaserBorderBottom>
  );
};

export default ContactCard;
