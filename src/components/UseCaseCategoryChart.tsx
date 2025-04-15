import React from 'react';
import { UseCaseCategory, TechnologyConcept } from '../types/data'; // TechnologyConcept wieder benötigt
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';

// Annahme: Wir haben eine Liste aller möglichen Technologiekonzepte irgendwo definiert
// Fürs Erste nehmen wir die aus den Beispieldaten und sortieren sie
import projectsData from '../data/projects.json';
const allConcepts = Array.from(new Set(projectsData.flatMap(p => p.technologyConcepts || []))).sort();

// Props-Schnittstelle definieren
interface UseCaseCategoryChartProps {
  highlightedCategories: (UseCaseCategory | TechnologyConcept)[];
}

const UseCaseCategoryChart: React.FC<UseCaseCategoryChartProps> = ({ highlightedCategories }) => {
  const allUseCases = Object.values(UseCaseCategory);

  // Hilfsfunktion zum Überprüfen, ob eine Kategorie hervorgehoben ist
  const isHighlighted = (category: UseCaseCategory | TechnologyConcept) => 
    highlightedCategories.includes(category);

  // Funktion zum Anpassen des Stils für hervorgehobene Elemente
  const getHighlightedStyle = (baseStyle: React.CSSProperties, highlighted: boolean) => {
    return {
      ...baseStyle,
      opacity: highlightedCategories.length > 0 ? (highlighted ? 1 : 0.3) : 1, // Dimmen, wenn etwas gehovert wird, aber nicht dieses Element
      transition: 'opacity 0.2s ease-in-out', // Sanfter Übergang
      transform: highlighted ? 'scale(1.05)' : 'scale(1)', // Leichte Vergrößerung
      boxShadow: highlighted ? '0 0 5px rgba(0,0,0,0.3)' : 'none' // Schatteneffekt
    };
  };

  return (
    <div className="legend-container" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h3 style={{ marginTop: '0', marginBottom: '15px' }}>Legend / Categories</h3>
      <div style={{ marginBottom: '15px' }}>
        <strong>Agent Use Cases:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
          {allUseCases.map(useCase => {
            const highlighted = isHighlighted(useCase);
            const style = getHighlightedStyle(getUseCaseStyle(useCase), highlighted);
            return (
              <span key={useCase} style={style}>
                {useCase}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <strong>Technology Concepts:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
          {allConcepts.map(concept => {
            const highlighted = isHighlighted(concept);
            const style = getHighlightedStyle(getTechnologyConceptStyle(concept), highlighted);
            return (
              <span key={concept} style={style}>
                {concept}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseCaseCategoryChart; 