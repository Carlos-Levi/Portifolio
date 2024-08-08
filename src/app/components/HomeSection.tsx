import React from 'react';
import styles from '../styles/Home.module.css';

const HomeSection: React.FC = () => {
  return (
    <div id="home" className={styles.homeSection}>
      <div className={styles.textContainer}>
        <span className={styles.introText}>Sou</span>
        <span className={styles.highlightedText}>Engenheiro de Computação</span>
        <span className={styles.introText}>e</span>
        <span className={styles.highlightedText}>Desenvolvedor de Software</span>
        <span className={styles.introText}>
          apaixonado por criar soluções e transformar ideias em experiências digitais.
        </span>
      </div>
      <div className={styles.iconContainer}>
        <img src="/Vector.svg" alt="Ícone de rolar para baixo" className={styles.icon} />
      </div>
    </div>
  );
};

export default HomeSection;
