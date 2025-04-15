import React from 'react';
import ProjectItem from './ProjectItem';
import { Project, UseCaseCategory, TechnologyConcept } from '../types/data';
import projectsData from '../data/projects.json';

// Props-Schnittstelle für Timeline definieren
interface TimelineProps {
  onProjectHover: (categories: (UseCaseCategory | TechnologyConcept)[]) => void;
  onProjectClick: (project: Project) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onProjectHover, onProjectClick }) => {
  const projects: Project[] = projectsData as Project[];

  // Projekte nach specificDate sortieren (aufsteigend)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(a.specificDate).getTime() - new Date(b.specificDate).getTime();
  });

  return (
    <div className="timeline-container">
      <h2>Project Timeline</h2>
      {sortedProjects.length > 0 ? (
        // Sortierte Projekte mappen
        sortedProjects.map(project => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            onHover={onProjectHover}
            onClick={onProjectClick}
          />
        ))
      ) : (
        <p>No projects to display.</p>
      )}
    </div>
  );
};

export default Timeline; 