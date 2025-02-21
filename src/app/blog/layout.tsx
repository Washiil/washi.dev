import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Navbar from '../components/NavigationBar'

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        // We need to put a navigation bar here
        <div className="flex-auto">
            <Navbar/>
            <div className="w-[95%] h-[80%] outline rounded-xl">
                {children}
            </div>
        </div>
    );
}
