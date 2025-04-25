import React, { useState, useEffect } from 'react';
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
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  // Sortierfunktion anpassen, um dateOrPeriod zu verwenden
  /*const sortProjects = (a: Project, b: Project) => {
    // Versuche, gültige Daten zu parsen, gib bei ungültigen Formaten einen Fallback-Wert
    const dateA = new Date(a.dateOrPeriod); 
    const dateB = new Date(b.dateOrPeriod);
    const timeA = !isNaN(dateA.getTime()) ? dateA.getTime() : 0; // Fallback bei ungültigem Datum
    const timeB = !isNaN(dateB.getTime()) ? dateB.getTime() : 0; // Fallback bei ungültigem Datum

    // Wenn beide Daten ungültig sind oder gleich, keine Änderung der Reihenfolge
    if (timeA === 0 && timeB === 0) return 0;
    // Wenn nur A ungültig ist, kommt B zuerst
    if (timeA === 0) return 1; 
    // Wenn nur B ungültig ist, kommt A zuerst
    if (timeB === 0) return -1;

    // Ansonsten normaler Datumsvergleich
    return timeA - timeB;
  };
*/
  useEffect(() => {
    // let filteredData = projectsData as Project[]; -> wird const
    const filteredData = projectsData as Project[];
  
    // Projekte nach dateOrPeriod sortieren (aufsteigend)
    // const sortedProjects = [...filteredData].sort(sortProjects);
    
    // Filterung anwenden
    let filteredProjects = filteredData;
    if (activeFilters.length > 0) {
      filteredProjects = filteredData.filter(project => {
        const projectCategories = [
          ...(project.useCases || []),
          ...(project.technologyConcepts || [])
        ];
        return activeFilters.every(filter => projectCategories.includes(filter));
      });
    }

    // Erst filtern, DANN sortieren
    const sortedAndFilteredProjects = [...filteredProjects]; //.sort(sortProjects);

    // // Filtere zuerst externe Meilensteine heraus -> Logik nicht mehr benötigt?
    // // Diese Logik scheint durch activeFilters abgedeckt oder nicht mehr relevant

    // // Zeige nur gefilterte Projekte an (oder alle, wenn kein Filter aktiv)
    // const finalProjectsToShow = activeFilters.length > 0 ? filteredProjects : sortedProjects;
    // setVisibleProjects(finalProjectsToShow);

    setVisibleProjects(sortedAndFilteredProjects);

  }, [activeFilters]);

  return (
    <div className="timeline-container-visual">
      {visibleProjects.length > 0 ? (
        // Gefilterte Projekte mappen
        visibleProjects.map((project, index) => {
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