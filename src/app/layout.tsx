import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Washi.Dev',
  description: "Washi's Person Blog and Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
