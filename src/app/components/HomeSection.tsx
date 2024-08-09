import React from 'react';
import styles from '../styles/Home.module.css';

const HomeSection: React.FC = () => {
  return (
    <div id="home" className={styles.homeSection}>
      <div className={styles.textContainer}>
        <span className={styles.highlightedText}>
          Engenheiro de Computação e Desenvolvedor de Software
        </span>
        <span className={styles.introText}>
          Apaixonado por criar soluções e transformar ideias em experiências digitais.
         
        </span>
      </div>
    </div>
  );
};

export default HomeSection;

