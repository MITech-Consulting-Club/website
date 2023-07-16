'use client';

import React from 'react';
import styles from './header.module.scss';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { Route, routes } from './routes';
import { usePathname } from 'next/navigation';

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const path = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className="navbarLogo">
          <Link href="/">
            <h2>
              MITech Consulting
              <br /> Club
            </h2>
          </Link>
        </div>
        <div className={styles.navbarRoutes}>
          {/*@ts-ignore*/}
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
            href="https://www.instagram.com/mitechconsulting/"
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
