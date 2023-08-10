'use client';
import React from 'react';
import styles from './header.module.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { Route, routes } from './routes';
import { usePathname } from 'next/navigation';
import logo from '@/public/logo.png';

export interface HeaderProps {}

export const Header = () => {
  const path = usePathname();
  const [atTop, setAtTop] = React.useState(true);
  // Check if page is at top to update the background color
  React.useEffect(() => {
    if (typeof window != 'undefined') {
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
    }
  }, []);

  return (
    <nav className={` ${styles.navbar} ${!atTop ? styles.navbarScrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div>
          <Link href="/">
            <img src={logo.src} alt="MCC Logo" width={250} />
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
          <a
            href="mailto:mitech-exec@mit.edu"
            target="_blank"
            className={styles.socialIcon}
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};
