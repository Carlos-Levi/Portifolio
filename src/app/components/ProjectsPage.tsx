import React from 'react';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
  return (
    <div id='work' className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Selected</span>
        <span className={styles.titleMain}> </span>
        <span className={styles.titleHighlight}>Works</span>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <div className={styles.imageBackground}></div>
          <img
            className={styles.projectImg}
            src="/projeto1.png"
            alt="Real estate Template"
          />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectHeader}>
            <div>
              <div className={styles.projectTitle}>Real estate Template</div>
              <div>
                <span className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  adipiscing elit. Ultrices lorem non feugiat egestas amet.
                </span>
              </div>
            </div>
            <div className={styles.projectType}>Website Design</div>
          </div>
          <div className={`${styles.viewWorkButton} ${styles.viewWorkButtonHighlighted}`}>
            <span>View work</span>
            <img
              src="/icon.svg" 
              alt="View work icon"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectDetails}>
          <div className={styles.projectHeader}>
            <div>
              <div className={styles.projectTitle}>Plant identification app</div>
              <div>
                <span className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  adipiscing elit. Ultrices lorem non feugiat egestas amet.
                </span>
              </div>
            </div>
            <div className={styles.projectType}>Mobile App</div>
          </div>
          <div className={styles.viewWorkButton}>
            <span>View work</span>
            <img
              src="/icon.svg" 
              alt="View work icon"
              className={styles.arrow}
            />
          </div>
        </div>
        <div className={styles.projectImage}>
          <div className={styles.imageBackground}></div>
          <img
            className={styles.projectImg}
            src="/breath_natural.png"
            alt="Plant identification app"
          />
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <div className={styles.imageBackground}></div>
          <img
            className={styles.projectImg}
            src="/mobile_app.png"
            alt="Smart Home App"
          />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectHeader}>
            <div>
              <div className={styles.projectTitle}>Smart Home App</div>
              <div>
                <span className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  adipiscing elit. Ultrices lorem non feugiat egestas amet.
                </span>
              </div>
            </div>
            <div className={styles.projectType}>Animation</div>
          </div>
          <div className={styles.viewWorkButton}>
            <span>View work</span>
            <img
              src="/icon.svg" // Caminho relativo ao diretório public
              alt="View work icon"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
