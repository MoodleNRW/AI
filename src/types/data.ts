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
  period: string; // z.B. '2023 – Q1'
  specificDate: string; // YYYY-MM-DD Format für Sortierung
  status: 'LAUFEND' | 'BEENDET'; // Status des Projekts
  name: string;
  useCases: UseCaseCategory[];
  technologyConcepts?: TechnologyConcept[]; // Neues Feld für allgemeine Konzepte
  technologies?: string; // Optional
  insights?: string; // Optional
} 