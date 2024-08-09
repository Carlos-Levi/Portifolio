import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.getInTouch}>
            <span className={styles.get}>Entre em</span>
            
            <span className={styles.inTouch}>Contato.</span>
          </div>
          <div className={styles.subText}>
            Estou ansioso para colaborar em projetos empolgantes ou discutir novas oportunidades.
          </div>
        </div>
        <div className={styles.iconsWrapper}>
          <a href="https://www.linkedin.com/in/levi-vieira" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className={styles.icon} />
          </a>
          <a href="mailto:carlos.levi2001@gmail.com">
            <img src="/mail.svg" alt="Email" className={styles.icon} />
          </a>
        </div>
        <div className={styles.madeWith}>
          <span className={styles.madeWithText}>
            Criado por Levi Vieira
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
