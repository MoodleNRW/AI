import { UseCaseCategory, TechnologyConcept } from '../types/data';

// Farben für Use Cases (basierend auf deiner Vorgabe)
const useCaseColors: Record<UseCaseCategory, string> = {
  [UseCaseCategory.AGENTIC_RAG]: '#a0c4ff', // Blau
  [UseCaseCategory.WORKFLOW_AUTOMATION]: '#fdffb6', // Hellgelb
  [UseCaseCategory.TOOL_BASED]: '#ffd6a5', // Orange
  [UseCaseCategory.CODING]: '#caffbf', // Grün
  [UseCaseCategory.COMPUTER_USE]: '#ffadad', // Rot
  [UseCaseCategory.VOICE]: '#bdb2ff' // Lila
};

// Farben für Technologiekonzepte (Beispiele)
// Dunklere Farben für API Integration und Multi-Agent hinzugefügt/angepasst
const conceptColors: Record<TechnologyConcept, string> = {
  'RAG': '#d4a373',
  'ASR': '#e9c46a',
  'TTS': '#f4a261',
  'Code Generation': '#e76f51',
  'Chatbot': '#2a9d8f',
  'API Integration': '#588157', // Geändert zu einem lesbareren Grün
  'Classification': '#a8dadc',
  'NLP': '#457b9d',
  'Multi-Agent': '#6a4c93', // Geändert zu einem dunkleren Lila
  'Document Analysis': '#fca311',
  'Pinecone': '#14213d',
  'Vector Database': '#003049',
  'Moodle Integration': '#f77f00',
  'LMS': '#3a86ff',
  'Research': '#ffbe0b',
  'Web Scraping': '#fb5607',
  'Summarization': '#ff006e',
  'Search': '#8338ec',
  'Autonomous Agent': '#3a0ca3',
  'Clustering': '#7400b8',
  'Keyword Extraction': '#6930c3',
  'DokuWiki': '#5e60ce',
  'Self-Learning': '#5390d9',
  'Topic Modeling': '#4ea8de',
  'Transcription': '#48bfe3',
  'Chunking': '#56cfe1',
  'Coaching': '#64dfdf',
  'Real-time': '#72efdd',
  'LLM Comparison': '#80ffdb',
  'Plugin Development': '#0077b6',
  'Moodle': '#0096c7',
  'Prompt Engineering': '#023e8a',
  // Füge bei Bedarf weitere hinzu
};

const defaultColor = '#e0e0e0'; // Standardfarbe
const lightTextColor = '#ffffff';
const darkTextColor = '#333333';

// Hilfsfunktion zur Bestimmung der Textfarbe basierend auf der Hintergrundhelligkeit
function getTextColorForBackground(hexColor: string): string {
  // Entferne das # am Anfang
  const color = hexColor.substring(1);
  // Konvertiere zu RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  // Berechne die relative Luminanz (vereinfachte Formel)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  // Wähle Textfarbe basierend auf Luminanz
  return luminance > 0.5 ? darkTextColor : lightTextColor;
}

// Generische Styling-Funktion
const getTagStyle = (backgroundColor: string, isConcept: boolean = false) => {
  const color = getTextColorForBackground(backgroundColor);
  return {
    display: 'inline-block',
    margin: '0 4px 4px 0',
    padding: '3px 6px',
    borderRadius: '4px',
    backgroundColor,
    color, 
    fontSize: '0.85em',
    fontWeight: isConcept ? 'normal' : '500', // Concepts normal, Use Cases etwas fetter
    fontStyle: isConcept ? 'italic' : 'normal',
  };
};

export const getUseCaseStyle = (useCase: UseCaseCategory) => {
  const backgroundColor = useCaseColors[useCase] || defaultColor;
  return getTagStyle(backgroundColor, false);
};

export const getTechnologyConceptStyle = (concept: TechnologyConcept) => {
  const backgroundColor = conceptColors[concept] || defaultColor;
  // Füge hier eine Prüfung für explizit definierte Farben hinzu, falls defaultColor verwendet wird
  if (backgroundColor === defaultColor) {
      // Für Default-Farbe immer dunklen Text nehmen
      return { ...getTagStyle(backgroundColor, true), color: darkTextColor };
  }
  return getTagStyle(backgroundColor, true);
}; 