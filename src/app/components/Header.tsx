import React from 'react';
import Link from 'next/link'; // Importa o componente Link do Next.js
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>LV</div>
      </div>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navItem}>
          <div className={styles.navTextActive}>HOME</div>
          <div className={styles.underline}></div>
        </Link>
        <Link href="/work" className={styles.navItem}>
          <div className={styles.navText}>Work</div>
        </Link>
        <Link href="/about" className={styles.navItem}>
          <div className={styles.navText}>About</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
