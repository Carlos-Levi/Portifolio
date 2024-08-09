"use client";

import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Atualiza a seção ativa
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>LV</div>
      </div>
      <div className={styles.navContainer}>
        <div
          onClick={() => scrollToSection('home')}
          className={styles.navItem}
        >
          <div className={activeSection === 'home' ? styles.navTextActive : styles.navText}>
            HOME
          </div>
          <div className={styles.underline}></div>
        </div>
        <div
          onClick={() => scrollToSection('work')}
          className={styles.navItem}
        >
          <div className={activeSection === 'work' ? styles.navTextActive : styles.navText}>
            Work
          </div>
          <div className={styles.underline}></div>
        </div>
        <div
          onClick={() => scrollToSection('about')}
          className={styles.navItem}
        >
          <div className={activeSection === 'about' ? styles.navTextActive : styles.navText}>
            About
          </div>
          <div className={styles.underline}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
