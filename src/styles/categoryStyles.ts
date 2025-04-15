import { UseCaseCategory, TechnologyConcept } from '../types/data';

// Farben für Use Cases (basierend auf deiner Vorgabe)
const useCaseColors: Record<UseCaseCategory, string> = {
  [UseCaseCategory.AGENTIC_RAG]: '#a0c4ff', // Blau
  [UseCaseCategory.WORKFLOW_AUTOMATION]: '#fdffb6', // Hellgelb (angepasst von Orange)
  [UseCaseCategory.TOOL_BASED]: '#ffd6a5', // Orange (angepasst von Gelb)
  [UseCaseCategory.CODING]: '#caffbf', // Grün (angepasst von Lila)
  [UseCaseCategory.COMPUTER_USE]: '#ffadad', // Rot
  [UseCaseCategory.VOICE]: '#bdb2ff' // Lila (angepasst von Braun)
};

// Farben für Technologiekonzepte (Beispiele)
const conceptColors: Record<TechnologyConcept, string> = {
  'RAG': '#d4a373',
  'ASR': '#e9c46a',
  'TTS': '#f4a261',
  'Code Generation': '#e76f51',
  'Chatbot': '#2a9d8f',
  'API Integration': '#264653',
  'Classification': '#a8dadc',
  'NLP': '#457b9d',
  'Multi-Agent': '#1d3557',
  // Füge bei Bedarf weitere hinzu
};

const defaultColor = '#e0e0e0'; // Standardfarbe, falls keine spezifische gefunden wird

export const getUseCaseStyle = (useCase: UseCaseCategory) => {
  const backgroundColor = useCaseColors[useCase] || defaultColor;
  return {
    display: 'inline-block',
    margin: '0 4px 4px 0', // Kleinere Margins
    padding: '3px 6px',
    borderRadius: '4px',
    backgroundColor,
    color: '#333', // Dunklerer Text für bessere Lesbarkeit auf hellen Farben
    fontSize: '0.85em', // Kleinere Schrift
    fontWeight: '500' // Etwas weniger fett
  };
};

export const getTechnologyConceptStyle = (concept: TechnologyConcept) => {
  const backgroundColor = conceptColors[concept] || defaultColor;
  return {
    display: 'inline-block',
    margin: '0 4px 4px 0',
    padding: '3px 6px',
    borderRadius: '4px',
    backgroundColor,
    color: '#333',
    fontSize: '0.85em',
    fontStyle: 'italic'
  };
}; 