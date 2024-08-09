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
                  Um template inovador para sites imobiliários, projetado para apresentar propriedades com elegância.&nbsp;
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  Inclui funcionalidades interativas e um design responsivo para melhorar a experiência do usuário.
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
              <div className={styles.projectTitle}>Breath Natural</div>
              <div>
                <span className={styles.projectDescription}>
                  Um aplicativo de identificação de plantas para Macbook, projetado para ajudar entusiastas da natureza a identificar e aprender sobre plantas.&nbsp;
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  Interface intuitiva e recursos de busca detalhados para uma experiência educativa e envolvente.
                </span>
              </div>
            </div>
            <div className={styles.projectType}>Macbook App</div>
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
            alt="Breath Natural"
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
                  Um aplicativo para automação residencial, proporcionando controle eficiente de dispositivos e sistemas domésticos.&nbsp;
                </span>
                <span className={styles.projectDescriptionHighlight}>
                  Com uma interface amigável e funcionalidades avançadas!
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
