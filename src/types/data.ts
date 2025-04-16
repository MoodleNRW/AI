export enum UseCaseCategory {
  AGENTIC_RAG = 'Agentic RAG',
  WORKFLOW_AUTOMATION = 'Workflow Automation',
  TOOL_BASED = 'Tool-based Agents',
  CODING = 'Coding Agents',
  COMPUTER_USE = 'Computer Use Agents',
  VOICE = 'Voice Agents',
}

// Neuer Typ für allgemeine Technologiekonzepte
export type TechnologyConcept = string; // Vorerst als String, könnte spezifischer werden

export interface Project {
  id: string; // Eindeutige ID für React Keys
  dateOrPeriod: string; // Kombiniertes Feld für Datum oder Zeitraum
  status: 'LAUFEND' | 'BEENDET'; // Status des Projekts
  type?: 'project' | 'external_milestone'; // Typ hinzufügen
  name: string;
  useCases: UseCaseCategory[];
  technologyConcepts?: TechnologyConcept[]; // Neues Feld für allgemeine Konzepte
  technologies?: string; // Optional
  insights?: { summary: string[] }; // Strukturierte Insights als Array von Absätzen
  shortSummary?: string; // Kurze Zusammenfassung für die Timeline-Ansicht
  relatedMilestoneIds?: string[]; // IDs von verknüpften externen Meilensteinen
  imageUrls?: string[]; // URLs zu Bildern für das Projekt
  relatedLinks?: { label: string; url: string }[]; // Links zu externen Dokumenten/Seiten
  participants?: string[]; // Neues Feld für Beteiligte (optional)
} 