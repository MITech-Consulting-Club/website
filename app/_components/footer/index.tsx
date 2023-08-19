'use client';

import React from 'react';
import styles from './footer.module.scss';

export interface FooterProps {}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="http://youtu.be/dQw4w9WgXcQ" target="_blank">
        <p>
          Made with <b>💜</b> and ☕ by the MCC
          <br /> ©2023
        </p>
      </a>
    </footer>
  );
};
