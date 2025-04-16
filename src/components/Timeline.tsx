import React from 'react';
import ProjectItem from './ProjectItem';
import { Project, UseCaseCategory, TechnologyConcept } from '../types/data';
import projectsData from '../data/projects.json';

// Props-Schnittstelle für Timeline definieren
interface TimelineProps {
  onProjectHover: (categories: (UseCaseCategory | TechnologyConcept)[]) => void;
  onProjectClick: (project: Project) => void;
  activeFilters: (UseCaseCategory | TechnologyConcept)[];
}

const Timeline: React.FC<TimelineProps> = ({ onProjectHover, onProjectClick, activeFilters }) => {
  const projects: Project[] = projectsData as Project[];

  // Projekte nach specificDate sortieren (aufsteigend)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(a.specificDate).getTime() - new Date(b.specificDate).getTime();
  });

  // Filtere zuerst externe Meilensteine heraus
  const internalProjects = sortedProjects.filter(p => p.type !== 'external_milestone');

  // Wende dann die aktiven Filter an
  const filteredProjects = activeFilters.length === 0 
    ? internalProjects // Wenn keine Filter aktiv sind, zeige alle internen Projekte
    : internalProjects.filter(project => { // Sonst filtere
        // Kombiniere Use Cases und Konzepte des Projekts
        const projectCategories = [
          ...project.useCases,
          ...(project.technologyConcepts || [])
        ];
        // Prüfe, ob ALLE aktiven Filter in den Projektkategorien enthalten sind
        return activeFilters.every(filter => projectCategories.includes(filter));
      });

  return (
    <div className="timeline-container-visual">
      {filteredProjects.length > 0 ? (
        // Gefilterte Projekte mappen
        filteredProjects.map((project, index) => {
          const positionClass = index % 2 === 0 ? 'left' : 'right'; // Abwechselnd links/rechts
          return (
            <ProjectItem 
              key={project.id} 
              project={project} 
              onHover={onProjectHover}
              onClick={onProjectClick}
              positionClass={positionClass} // Position-Klasse übergeben
            />
          );
        })
      ) : (
        <p>No projects to display.</p>
      )}
    </div>
  );
};

export default Timeline; 