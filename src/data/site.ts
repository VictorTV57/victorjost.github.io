export const site = {
  name: 'Victor Jost',
  title: 'Victor Jost — Portfolio',
  description:
    'Portfolio de Victor Jost, étudiant développeur en 3e année à EPITECH Nancy : applis, sites, systèmes de jeu et une voiture qui roule toute seule.',
  pitch:
    'Étudiant développeur en 3e année à EPITECH Nancy. Applis, sites, systèmes de jeu et une voiture qui roule toute seule.',
  /** Badge de disponibilité : à adapter (ex. « Recherche un stage de X mois, à partir de ... »). */
  availability: 'Ta disponibilité ici',
  email: 'victor.jost@epitech.eu',
  github: 'https://github.com/VictorTV57',
  linkedin: 'https://www.linkedin.com/in/victor-jost',
};

/** Chemin interne qui tient compte du `base` d'astro.config.mjs. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
