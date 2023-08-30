'use client';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { Route, routes } from './routes';
import { usePathname } from 'next/navigation';
import logo from '@/public/logo.png';

export interface HeaderProps {}

export const Header = () => {
  const path = usePathname();
  const [atTop, setAtTop] = useState(true);
  const [desktop, setDesktop] = useState(false);

  // Check if page is at top to update the background color
  useEffect(() => {
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

    // Check if the device is desktop
    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    const handleResize = (event: MediaQueryListEvent) => {
      setDesktop(event.matches);
    };

    // Set the initial value
    setDesktop(mediaQuery.matches);

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <nav className={` ${styles.navbar} ${!atTop ? styles.navbarScrolled : ''}`}>
      {/* Mobile and Tablet Navbar */}
      {!desktop && (
        <div className={styles.mobileNavbarContainer}>
          <div className={styles.mobileTopNavbar}>
            <div>
              <Link href="/">
                <Image
                  src={logo.src}
                  alt="MCC Logo"
                  width={150}
                  height={62}
                  className={styles.logo}
                />
              </Link>
            </div>
            <div className={styles.navbarSocials}>
              <Link
                href="https://www.linkedin.com/company/mitech-consulting-club/"
                target="_blank"
                aria-label="MITech LinkedIn"
                className={styles.socialIcon}
              >
                <BsLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/mitechconsulting/"
                target="_blank"
                aria-label="MITech Instagram"
                className={styles.socialIcon}
              >
                <BsInstagram />
              </Link>
              <Link
                href="mailto:mitech-exec@mit.edu"
                target="_blank"
                aria-label="MITech Email"
                className={styles.socialIcon}
              >
                <MdEmail />
              </Link>
            </div>
          </div>
          <div className={styles.mobileBottomNavbar}>
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
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      {desktop && (
        <div className={styles.navbarContainer}>
          <div>
            <Link href="/">
              <Image
                src={logo.src}
                alt="MCC Logo"
                width={250}
                height={104}
                className={styles.logo}
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
            <Link
              href="https://www.linkedin.com/company/mitech-consulting-club/"
              target="_blank"
              aria-label="MITech LinkedIn"
              className={styles.socialIcon}
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/mitechconsulting/"
              target="_blank"
              aria-label="MITech Instagram"
              className={styles.socialIcon}
            >
              <BsInstagram />
            </Link>
            <Link
              href="mailto:mitech-exec@mit.edu"
              target="_blank"
              aria-label="MITech Email"
              className={styles.socialIcon}
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
