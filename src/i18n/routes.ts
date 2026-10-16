import { url } from '../data/site';
import type { Lang, Localized } from '.';

/** Les pages du site. Chaque section a une adresse traduite dans chaque langue. */
export type Section = 'home' | 'projects' | 'hackathons' | 'journey' | 'skills' | 'beyond';

/**
 * Segments d'URL par langue. Ils doivent correspondre aux dossiers de src/pages/ (fr) et src/pages/en/ (en).
 */
const SLUGS: Record<Section, Localized> = {
  home: { fr: '', en: '' },
  projects: { fr: 'projets', en: 'projects' },
  hackathons: { fr: 'hackathons', en: 'hackathons' },
  journey: { fr: 'parcours', en: 'journey' },
  skills: { fr: 'competences', en: 'skills' },
  beyond: { fr: 'en-dehors-du-code', en: 'beyond-code' },
};

/** Ancres des sections de l'accueil, dans leur ordre d'apparition : ce sont les entrées du sommaire. */
export type TocId = 'a-propos' | 'projets' | 'hackathons' | 'contact' | 'experience' | 'formation' | 'competences' | 'perso';

export interface Route {
  section: Section;
  /** Identifiant d'un élément (projet, hackathon, étape du parcours) pour sa page de détail. */
  id?: string;
}

/** Adresse d'une page dans une langue, ex. href('en', 'projects', 'robocar') → /en/projects/robocar/ */
export function href(lang: Lang, section: Section, id?: string): string {
  const parts = [lang === 'fr' ? '' : lang, SLUGS[section][lang], id ?? ''].filter(Boolean);
  return url(parts.length ? `${parts.join('/')}/` : '');
}
