import React from 'react';
import { Project } from '../types/data';
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000, // Ensure it's on top
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  maxWidth: '700px',
  width: '90%',
  maxHeight: '80vh',
  overflowY: 'auto',
  position: 'relative',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#888',
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) {
    return null; // Render nothing if no project is selected
  }

  return (
    <div style={modalOverlayStyle} onClick={onClose}> {/* Close on overlay click */} 
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside content */} 
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        <h2>{project.name}</h2>
        <p><strong>Datum / Zeitraum:</strong> {project.specificDate} / {project.period}</p>
        <p><strong>Status:</strong> {project.status}</p>
        
        {project.useCases.length > 0 && (
          <div style={{ marginBottom: '15px' }}>
            <strong>Use Cases:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
              {project.useCases.map(useCase => (
                <span key={useCase} style={getUseCaseStyle(useCase)}>{useCase}</span>
              ))}
            </div>
          </div>
        )}

        {project.technologyConcepts && project.technologyConcepts.length > 0 && (
          <div style={{ marginBottom: '15px' }}>
            <strong>Technology Concepts:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
              {project.technologyConcepts.map(concept => (
                <span key={concept} style={getTechnologyConceptStyle(concept)}>{concept}</span>
              ))}
            </div>
          </div>
        )}

        {project.technologies && (
          <p><strong>Technologien:</strong> {project.technologies}</p>
        )}
        
        <div style={{ marginTop: '15px' }}>
          <strong>Was wurde gemacht / Ergebnisse:</strong>
          <p style={{ whiteSpace: 'pre-wrap' }}>{project.insights}</p> {/* pre-wrap to respect newlines in insights */} 
        </div>

        {/* Optional: Hier könnten Links etc. hinzugefügt werden */} 
      </div>
    </div>
  );
};

export default ProjectModal; 