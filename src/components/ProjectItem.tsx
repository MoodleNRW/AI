import React from 'react';
import { Project, UseCaseCategory, TechnologyConcept } from '../types/data';
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';

interface ProjectItemProps {
  project: Project;
  onHover: (categories: (UseCaseCategory | TechnologyConcept)[]) => void;
  onClick: (project: Project) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, onHover, onClick }) => {

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

  return (
    <div 
      className="project-item"
      style={{ borderBottom: '1px solid #eee', marginBottom: '15px', paddingBottom: '15px', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h3 style={{ marginBottom: '5px' }}>
        {project.name} 
        <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '8px' }}>
          ({project.specificDate} / {project.period})
        </span>
      </h3>
      <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap'}}>
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
      {project.technologies && <p style={{ marginTop: '8px', fontSize: '0.9em', color: '#555' }}><strong>Technologies:</strong> {project.technologies}</p>}
      {project.insights && <p style={{ marginTop: '8px', fontSize: '0.9em', color: '#555' }}><strong>Insights:</strong> {project.insights}</p>}
    </div>
  );
};

export default ProjectItem; 