'use client';

import React from 'react';
import '@/app/_styles/globals.scss';
// import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Header } from '@/app/_components/header';
import styles from './layout.module.scss';
import { Footer } from '@/app/_components/footer';

const workSans = Work_Sans({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'MITech Consulting Group',
//   description:
//     "MIT's newest consulting club that offers innovative solutions to businesses looking to take their operations to the next level.",
//   themeColor: '#9e3ffd',
// };

export interface RootProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
