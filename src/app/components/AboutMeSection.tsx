import React from 'react';
import styles from '../styles/AboutMeSection.module.css';

const AboutMeSection: React.FC = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>A bit about me</div>
          <div className={styles.description}>
            <span className={styles.textLight}>
              I am a UI/UX designer who is passionate about creating
            </span>
            <span className={styles.textBold}>
              beautiful and joyful digital experiences. Besides design, I love
            </span>
            <span className={styles.textWhite}> </span>
            <span className={styles.textBold}>
              music, games and travelling.
            </span>
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBackground} />
            <img
              className={styles.image}
              src="https://via.placeholder.com/282x408"
              alt="About me image 1"
            />
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground} />
              <img
                className={styles.image}
                src="https://via.placeholder.com/282x374"
                alt="About me image 2"
              />
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground} />
              <img
                className={styles.image}
                src="https://via.placeholder.com/282x375"
                alt="About me image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;

