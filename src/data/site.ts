import type { Localized } from '../i18n';

export const site = {
  name: 'Victor Jost',
  title: 'Victor Jost — Portfolio',
  description: {
    fr: 'Portfolio de Victor Jost, étudiant développeur en 3e année à EPITECH Nancy : applis, sites, systèmes de jeu et une voiture qui roule toute seule.',
    en: 'Portfolio of Victor Jost, a 3rd-year developer student at EPITECH Nancy: apps, websites, game systems and a car that drives itself.',
  } satisfies Localized,
  pitch: {
    fr: 'Étudiant développeur en 3e année à EPITECH Nancy. Applis, sites, systèmes de jeu et une voiture qui roule toute seule.',
    en: '3rd-year developer student at EPITECH Nancy. Apps, websites, game systems and a car that drives itself.',
  } satisfies Localized,
  /** Badge de disponibilité, sous le pitch. */
  availability: {
    fr: 'Stage à temps complet du 29 mars au 31 août 2027',
    en: 'Full-time internship, 29 March to 31 August 2027',
  } satisfies Localized,
  email: 'victor.jost@epitech.eu',
  github: 'https://github.com/VictorTV57',
  linkedin: 'https://www.linkedin.com/in/victor-jost',
};

/** Chemin interne qui tient compte du `base` d'astro.config.mjs. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
