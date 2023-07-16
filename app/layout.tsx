import React from 'react';
import '@/app/_styles/globals.scss';
import { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import { Header } from '@/app/_components/header';

// @ts-ignore
const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MITech Consulting Group',
  description:
    "MIT's newest consulting club that offers innovative solutions to businesses looking to take their operations to the next level.",
  themeColor: '#9e3ffd',
};

export interface RootProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <body className={workSans.className}>
        {/*<SkipNavLink />*/}
        <Header />
        <main>
          <SkipNavContent />
          {children}
        </main>
        {/*Footer*/}
      </body>
    </html>
  );
};

export default RootLayout;
