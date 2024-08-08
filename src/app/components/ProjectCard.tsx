import React from 'react';
import projectCardStyles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={projectCardStyles.card}>
      <img src={imageUrl} alt={title} className={projectCardStyles.image} />
      <div className={projectCardStyles.content}>
        <div className={projectCardStyles.title}>{title}</div>
        <div className={projectCardStyles.description}>{description}</div>
        <div className={projectCardStyles.category}>Category</div>
        <div className={projectCardStyles.button}>
          <span>View work</span>
          <img
            src="/icon.svg" // Caminho relativo ao diretório public
            alt="Icon"
            className={projectCardStyles.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;