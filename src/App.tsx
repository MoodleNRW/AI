import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Timeline from './components/Timeline';
import UseCaseCategoryChart from './components/UseCaseCategoryChart';
import ProjectModal from './components/ProjectModal';
import { Project, UseCaseCategory, TechnologyConcept } from './types/data';
import projectsData from './data/projects.json';
import logo from './assets/moodle-nrw_Kooperationsvorhaben_Logo_RGB.png';
import Footer from './components/Footer';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';

const MainLayout: React.FC<{ 
  onProjectHover: (categories: (UseCaseCategory | TechnologyConcept)[]) => void;
  onProjectClick: (project: Project) => void;
  selectedProject: Project | null;
  onCloseModal: () => void;
  allProjects: Project[];
  activeFilters: (UseCaseCategory | TechnologyConcept)[];
  onFilterChange: (filter: UseCaseCategory | TechnologyConcept) => void;
  hoveredCategories: (UseCaseCategory | TechnologyConcept)[];
}> = ({ 
  onProjectHover, onProjectClick, selectedProject, onCloseModal, allProjects, 
  activeFilters, onFilterChange, hoveredCategories 
}) => {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '0 20px 20px 20px'}}>
      <div className="timeline-section" style={{ flex: 2 }}>
        <Timeline 
          onProjectHover={onProjectHover} 
          onProjectClick={onProjectClick} 
          activeFilters={activeFilters}
        />
      </div>
      <div className="legend-section" style={{ flex: 1 }}>
        <UseCaseCategoryChart 
          highlightedCategories={hoveredCategories} 
          activeFilters={activeFilters} 
          onFilterChange={onFilterChange} 
        />
      </div>
      <ProjectModal 
        project={selectedProject} 
        onClose={onCloseModal} 
        allProjects={allProjects}
      />
    </div>
  );
};

function App() {
  const [hoveredCategories, setHoveredCategories] = useState<(UseCaseCategory | TechnologyConcept)[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilters, setActiveFilters] = useState<(UseCaseCategory | TechnologyConcept)[]>([]);
  const allProjects: Project[] = projectsData as Project[];

  const handleProjectHover = (categories: (UseCaseCategory | TechnologyConcept)[]) => {
    setHoveredCategories(categories);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (filter: UseCaseCategory | TechnologyConcept) => {
    setActiveFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      }
      return [...prevFilters, filter];
    });
  };

  return (
    <BrowserRouter basename="/AI/">
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px 5px 20px',
        borderBottom: '1px solid #eee',
        marginBottom: '10px'
      }}>
        <img 
          src={logo} 
          alt="Moodle.NRW Kooperationsvorhaben Logo" 
          style={{ 
            height: '3rem',
            marginBottom: '1rem'
          }} 
        />
        <h1 style={{
          fontSize: '1.3rem',
          margin: 0, 
          color: '#003366',
          fontFamily: 'sans-serif'
        }}>
          Einblicke in unsere Arbeiten um Generative KI: Prototypen & Researches
        </h1>
        <p style={{
          fontSize: '0.9rem',
          marginTop: '5px',
          marginBottom: '15px',
          color: '#555',
          fontFamily: 'sans-serif'
        }}>
          Kontaktieren Sie uns bei Fragen, Kooperation etc. gerne unter <a href="mailto:kontakt@moodlenrw.de" style={{color: '#003366'}}>kontakt@moodlenrw.de</a>
        </p>
      </header>

      <Routes>
        <Route path="/" element={ 
          <MainLayout 
            onProjectHover={handleProjectHover}
            onProjectClick={handleProjectClick}
            selectedProject={selectedProject}
            onCloseModal={handleCloseModal}
            allProjects={allProjects}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            hoveredCategories={hoveredCategories}
          /> 
        } />
        <Route path="/impressum" element={<ImprintPage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
