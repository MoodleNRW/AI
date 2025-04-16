import React from 'react';
import { UseCaseCategory, TechnologyConcept } from '../types/data'; // TechnologyConcept wieder benötigt
import { getUseCaseStyle, getTechnologyConceptStyle } from '../styles/categoryStyles';

// Annahme: Wir haben eine Liste aller möglichen Technologiekonzepte irgendwo definiert
// Fürs Erste nehmen wir die aus den Beispieldaten und sortieren sie
import projectsData from '../data/projects.json';
const allConcepts = Array.from(new Set(projectsData.flatMap(p => p.technologyConcepts || []))).sort();

// Props-Schnittstelle erweitern
interface UseCaseCategoryChartProps {
  highlightedCategories: (UseCaseCategory | TechnologyConcept)[];
  activeFilters: (UseCaseCategory | TechnologyConcept)[];
  onFilterChange: (filter: UseCaseCategory | TechnologyConcept) => void;
}

// Typ für den Basis-Stil definieren (konkreter als React.CSSProperties)
// Dies sollte die tatsächlich von getUseCaseStyle/getTechnologyConceptStyle zurückgegebenen Eigenschaften enthalten
type BaseTagStyle = {
  display: string;
  margin: string;
  padding: string;
  borderRadius: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  fontWeight: string | number; // Kann 500 (number) oder 'normal' sein
  fontStyle: string;
  border?: string; // Optional, da es im Basis-Style nicht immer vorhanden ist
};

const UseCaseCategoryChart: React.FC<UseCaseCategoryChartProps> = ({ highlightedCategories, activeFilters, onFilterChange }) => {
  const allUseCases = Object.values(UseCaseCategory);

  const isHighlighted = (category: UseCaseCategory | TechnologyConcept) => highlightedCategories.includes(category);
  const isActiveFilter = (category: UseCaseCategory | TechnologyConcept) => activeFilters.includes(category);

  // Style für aktive Filter anpassen (gibt Teil von CSSProperties zurück)
  const getFilterStyle = (isActive: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    border: isActive ? '2px solid #333' : undefined, // Explizit undefined, wenn nicht aktiv
    // Passe Padding nur an, wenn aktiv, um Style-Konflikte zu minimieren
    padding: isActive ? '1px 4px' : undefined, 
  });

  // Style für Hervorhebung anpassen (gibt Teil von CSSProperties zurück)
  const getHighlightingStyle = (highlighted: boolean, isActive: boolean): React.CSSProperties => ({
    opacity: (highlightedCategories.length > 0 && !isActive) ? (highlighted ? 1 : 0.3) : 1,
    transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border 0.2s ease-in-out', // Border-Übergang hinzufügen
    transform: highlighted ? 'scale(1.05)' : 'scale(1)',
    boxShadow: highlighted ? '0 0 5px rgba(0,0,0,0.3)' : 'none'
  });

  return (
    <div className="legend-container" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h3 style={{ marginTop: '0', marginBottom: '5px' }}>Legend / Filters</h3>
      <p style={{fontSize: '0.8em', color: '#666', marginTop: 0, marginBottom: '15px'}}>Click tags to filter timeline</p>
      
      {/* Use Case Filter */} 
      <div style={{ marginBottom: '15px' }}>
        <strong>Agent Use Cases:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
          {allUseCases.map(useCase => {
            const highlighted = isHighlighted(useCase);
            const isActive = isActiveFilter(useCase);
            // Style-Objekte kombinieren
            const combinedStyle: React.CSSProperties = {
              ...(getUseCaseStyle(useCase) as BaseTagStyle), // Type Assertion
              ...getFilterStyle(isActive),
              ...getHighlightingStyle(highlighted, isActive)
            };
            return (
              <span key={useCase} style={combinedStyle} onClick={() => onFilterChange(useCase)}>
                {useCase}
              </span>
            );
          })}
        </div>
      </div>
      
      {/* Technology Concept Filter */} 
      <div>
        <strong>Technology Concepts:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
          {allConcepts.map(concept => {
            const highlighted = isHighlighted(concept);
            const isActive = isActiveFilter(concept);
             // Style-Objekte kombinieren
            const combinedStyle: React.CSSProperties = {
              ...(getTechnologyConceptStyle(concept) as BaseTagStyle), // Type Assertion
              ...getFilterStyle(isActive),
              ...getHighlightingStyle(highlighted, isActive)
            };
            return (
              <span key={concept} style={combinedStyle} onClick={() => onFilterChange(concept)}>
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