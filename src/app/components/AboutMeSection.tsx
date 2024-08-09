import React from 'react';
import styles from '../styles/AboutMeSection.module.css';

const AboutMeSection: React.FC = () => {
  return (
    <div id="about" className={styles.aboutMeContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>Um pouco sobre mim</div>
          <div className={styles.description}>
            <span className={styles.textLigh}>
            O voluntariado é uma parte importante da minha vida:&nbsp;
            </span>
            <span className={styles.textBold}>
              atuo em causas sociais com o Grupo Ampare,
            </span>
            <span className={styles.textWhite}> </span>
            <span className={styles.textLigh}>
              sirvo como líder de banda na minha igreja, e serei juiz na OBR PE 2024
            </span>
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBackground} />
            <img
              className={styles.image}
              src="/Ampare.PNG"
              alt="voluntario"
            />
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground} />
              <img
                className={styles.image}
                src="/play.jpg"
                alt="servindo"
              />
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground} />
              <img
                className={styles.image}
                src="/robotica.jpg"
                alt="robotica"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
