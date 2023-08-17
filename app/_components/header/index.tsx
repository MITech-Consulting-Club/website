'use client';
import { useEffect, useState } from 'react';
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
  const [atTop, setAtTop] = useState(true);
  const [mobile, setMobile] = useState(false);

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

    // Check if the device is mobile
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = (event: MediaQueryListEvent) => {
      setMobile(event.matches);
    };

    // Set the initial value
    setMobile(mediaQuery.matches);

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <nav className={` ${styles.navbar} ${!atTop ? styles.navbarScrolled : ''}`}>
      {/* Mobile Navbar */}
      {mobile && (
        <div className={styles.mobileNavbarContainer}>
          <div className={styles.mobileTopNavbar}>
            <div>
              <Link href="/">
                <img src={logo.src} alt="MCC Logo" className={styles.logo} />
              </Link>
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
      {!mobile && (
        <div className={styles.navbarContainer}>
          <div>
            <Link href="/">
              <img src={logo.src} alt="MCC Logo" className={styles.logo} />
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
      )}
    </nav>
  );
};
