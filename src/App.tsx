import { useState } from 'react';
import './App.css'
import Timeline from './components/Timeline';
import UseCaseCategoryChart from './components/UseCaseCategoryChart';
import ProjectModal from './components/ProjectModal';
import { Project, UseCaseCategory, TechnologyConcept } from './types/data';

function App() {
  const [hoveredCategories, setHoveredCategories] = useState<(UseCaseCategory | TechnologyConcept)[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectHover = (categories: (UseCaseCategory | TechnologyConcept)[]) => {
    setHoveredCategories(categories);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px'}}>
      <div className="timeline-section" style={{ flex: 2 }}>
        <Timeline 
          onProjectHover={handleProjectHover} 
          onProjectClick={handleProjectClick} 
        />
      </div>
      <div className="legend-section" style={{ flex: 1 }}>
        <UseCaseCategoryChart highlightedCategories={hoveredCategories} />
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}

export default App
