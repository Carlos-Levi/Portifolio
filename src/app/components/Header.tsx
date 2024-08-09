"use client";

import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>LV</div>
      </div>
      <div className={styles.navContainer}>
        <div onClick={() => scrollToSection('home')} className={styles.navItem}>
          <div className={styles.navTextActive}>HOME</div>
          <div className={styles.underline}></div>
        </div>
        <div onClick={() => scrollToSection('work')} className={styles.navItem}>
          <div className={styles.navText}>Work</div>
        </div>
        <div onClick={() => scrollToSection('about')} className={styles.navItem}>
          <div className={styles.navText}>About</div>
        </div>
      </div>
    </div>
  );
};

export default Header;