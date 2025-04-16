// src/utils/imageUtils.ts

// Lade alle PNG-Bilder aus dem assets-Ordner
// Eager: Lädt die Module sofort, gibt Objekt mit Pfad -> Modul zurück
const images = import.meta.glob<{ default: string }>('/src/assets/*.png', { eager: true });

export const getImageUrl = (jsonPath: string): string | undefined => {
  // Suche nach dem passenden Modul im geladenen Objekt
  const imageModule = images[jsonPath];
  
  if (imageModule) {
    // Gib die Standard-Export-URL des Moduls zurück (das ist der Bildpfad nach dem Build)
    return imageModule.default;
  } else {
    console.warn(`Bild nicht gefunden für Pfad: ${jsonPath}`);
    return undefined;
  }
}; 