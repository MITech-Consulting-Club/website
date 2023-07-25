'use client';
import React from 'react';
import styles from './header.module.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { Route, routes } from './routes';
import { usePathname } from 'next/navigation';

import LOGO from '../assets/MITechLogo.png';

export interface HeaderProps {}

export const Header = () => {
  const path = usePathname();
  const [atTop, setAtTop] = React.useState(Math.round(window.scrollY) === 0);
  // Check if page is at top to update the background color
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      // A bit hacky way to make sure the component doesn't re-render every single scroll event
      if (Math.round(window.scrollY) != 0 && atTop) {
        setAtTop(false);
        return;
      } else if (Math.round(window.scrollY) == 0) {
        setAtTop(true);
        return;
      }
    });
  }, []);

  return (
    <nav className={` ${styles.navbar} ${!atTop ? styles.navbarScrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className="navbarLogo">
          <Link href="/">
            <Image
              src={LOGO}
              alt="MITech Consulting Club Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.navbarRoutes}>
          {routes.map((r: Route) => (
            <Link
              key={r.path + r.title}
              href={r.path}
              className={` ${styles.navbarRoute} ${
                path == r.path ? styles.navbarActiveRoute : ''
              }`}
            >
              {r.title}
            </Link>
          ))}
        </div>
        <div className={styles.navbarSocials}>
          <a
            href="https://www.linkedin.com/company/mitech-consulting-club/"
            target="_blank"
            className={styles.socialIcon}
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mitechconsulting/"
            target="_blank"
            style={{ fontSize: 25 }}
            className={styles.socialIcon}
          >
            <BsInstagram />
          </a>
          <a href="mailto:" target="_blank" className={styles.socialIcon}>
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};
