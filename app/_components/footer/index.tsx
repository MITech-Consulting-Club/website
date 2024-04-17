'use client';

import React from 'react';
import styles from './footer.module.scss';

export interface FooterProps {}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://accessibility.mit.edu"
        target="_blank"
        className={styles.accessibility}
      >
        Accessibility Notice
      </a>
      <br />
      <a href="http://youtu.be/dQw4w9WgXcQ" target="_blank">
        <p>
          Made with <b>💜</b> and ☕ by the MCC
          <br /> ©2024
        </p>
      </a>
    </footer>
  );
};
