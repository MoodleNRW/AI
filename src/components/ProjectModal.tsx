import React, { useState } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Project } from '../types/data';
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';
import { getImageUrl } from '../utils/imageUtils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  allProjects: Project[];
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

const enlargedImageOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dunklerer Hintergrund
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1100, // Muss über dem Modal-Overlay liegen
  cursor: 'pointer',
};

const enlargedImageStyle: React.CSSProperties = {
  maxWidth: '90%',
  maxHeight: '90vh',
  objectFit: 'contain', // Verhindert Verzerrung
  display: 'block',
  cursor: 'default', // Normaler Cursor für das Bild selbst
};

// Definiere die Komponenten-Overrides
const markdownComponents: Components = {
  a: ({ href, children, ...props }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ),
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, allProjects }) => {
  const [enlargedImageUrl, setEnlargedImageUrl] = useState<string | null>(null);

  if (!project) {
    return null;
  }

  // Finde die verknüpften Meilensteine
  const relatedMilestones = project.relatedMilestoneIds
    ? allProjects.filter(p => project.relatedMilestoneIds?.includes(p.id))
    : [];

  const handleImageClick = (imageUrl: string) => {
    setEnlargedImageUrl(imageUrl);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImageUrl(null);
  };

  return (
    // Umschließe alles mit Fragment, um das Overlay neben dem Modal rendern zu können
    <>
      <div style={modalOverlayStyle} onClick={onClose}> 
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}> 
          <button style={closeButtonStyle} onClick={onClose}>&times;</button>
          <h2>{project.name}</h2>
          <p><strong>Datum / Zeitraum:</strong> {project.dateOrPeriod}</p>
          {project.type !== 'external_milestone' && <p><strong>Status:</strong> {project.status}</p>}
          
          {project.participants && project.participants.length > 0 && (
            <div style={{ marginTop: '10px', marginBottom: '15px' }}>
              <strong>Beteiligte:</strong>
              <p style={{ marginTop: '5px' }}>{project.participants.join(', ')}</p>
            </div>
          )}

          {project.type !== 'external_milestone' && project.useCases.length > 0 && (
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

          {project.type !== 'external_milestone' && project.technologies && (
            <p><strong>Technologien:</strong> {project.technologies}</p>
          )}
          
          {project.insights && (
            <div style={{ marginTop: '15px' }}>
              <strong>Beschreibung / Ergebnisse:</strong>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {project.insights.summary.join('\n\n')}
              </ReactMarkdown>
            </div>
          )}

          {/* Bilder-Galerie im Modal - jetzt klickbar */} 
          {project.imageUrls && project.imageUrls.length > 0 && (
            <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
              <h4>Bilder / Screenshots:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.imageUrls.map((jsonPath, index) => {
                  const imageUrl = getImageUrl(jsonPath);
                  return imageUrl ? (
                    <img 
                      key={index} 
                      src={imageUrl}
                      alt={`${project.name} Bild ${index + 1}`} 
                      style={{ 
                        maxWidth: '150px', // Kleinere Vorschau
                        maxHeight: '100px', 
                        height: 'auto', 
                        border: '1px solid #eee', 
                        borderRadius: '4px',
                        cursor: 'pointer' // Zeige Klick-Cursor
                      }} 
                      onClick={() => handleImageClick(imageUrl)} // Klick-Handler
                    />
                  ) : null;
                })}
              </div>
            </div>
          )}

          {relatedMilestones.length > 0 && (
            <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
              <h4>Bezug zu späteren Entwicklungen:</h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {relatedMilestones.map(milestone => (
                  <li key={milestone.id} style={{ marginBottom: '5px' }}>
                    <strong>{milestone.dateOrPeriod}:</strong> {milestone.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* NEU: Conditional Rendering für das vergrößerte Bild-Overlay */} 
      {enlargedImageUrl && (
        <div style={enlargedImageOverlayStyle} onClick={handleCloseEnlarged}>
          <img 
            src={enlargedImageUrl} 
            alt="Vergrößerte Ansicht" 
            style={enlargedImageStyle}
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen bei Klick auf Bild
          />
        </div>
      )}
    </>
  );
};

export default ProjectModal; 