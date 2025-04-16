import React from 'react';
import { Project, UseCaseCategory, TechnologyConcept } from '../types/data';
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';
import { getImageUrl } from '../utils/imageUtils';

interface ProjectItemProps {
  project: Project;
  onHover: (categories: (UseCaseCategory | TechnologyConcept)[]) => void;
  onClick: (project: Project) => void;
  positionClass: 'left' | 'right';
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, onHover, onClick, positionClass }) => {

  const allProjectCategories = [
    ...project.useCases,
    ...(project.technologyConcepts || [])
  ];

  const handleMouseEnter = () => {
    onHover(allProjectCategories);
  };

  const handleMouseLeave = () => {
    onHover([]);
  };

  const handleClick = () => {
    onClick(project);
  };

  const imageUrl = project.imageUrls && project.imageUrls.length > 0 
                   ? getImageUrl(project.imageUrls[0]) 
                   : undefined;

  return (
    <div 
      className={`timeline-item ${positionClass} ${project.type === 'external_milestone' ? 'milestone' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title={project.type === 'external_milestone' ? 'Externer Meilenstein' : project.name}
      data-has-related={!!project.relatedMilestoneIds && project.relatedMilestoneIds.length > 0}
    >
      <h3>{project.name}</h3>
      <span className="date-period">
        {project.dateOrPeriod}
        {project.type !== 'external_milestone' && project.status === 'LAUFEND' && <span style={{color: 'green', marginLeft: '8px'}}>(Laufend)</span>}
      </span>
      {/* Zeige Bild nur für Projekte, falls imageUrl gefunden wurde */} 
      {project.type !== 'external_milestone' && imageUrl && (
        <div className="timeline-item-image-container">
          <img 
            src={imageUrl}
            alt={`${project.name} Vorschau`} 
            className="timeline-item-image"
          />
        </div>
      )}
      {project.type !== 'external_milestone' && project.shortSummary && (
        <p className="short-summary">{project.shortSummary}</p>
      )}
      {project.type !== 'external_milestone' && (
        <div className="tags-container">
          {project.useCases.map(useCase => (
            <span key={useCase} style={getUseCaseStyle(useCase)}>
              {useCase}
            </span>
          ))}
          {project.technologyConcepts?.map(concept => (
            <span key={concept} style={getTechnologyConceptStyle(concept)}>
              {concept}
            </span>
          ))}
        </div>
      )}
      {project.type === 'external_milestone' && project.technologyConcepts && (
         <div className="tags-container">
            {project.technologyConcepts?.map(concept => (
            <span key={concept} style={getTechnologyConceptStyle(concept)}>
              {concept}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectItem; 