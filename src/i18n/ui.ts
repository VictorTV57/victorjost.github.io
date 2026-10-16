import type { Lang } from '.';

/** Textes de l'interface. La version anglaise doit avoir exactement les mêmes clés (vérifié par TypeScript). */
const fr = {
  switchTo: 'English',
  switchToAria: 'Read this page in English',
  nav: {
    label: 'Navigation',
    home: 'Accueil',
    projects: 'Projets',
    hackathons: 'Hackathons',
    journey: 'Parcours',
    skills: 'Compétences',
    beyond: 'En dehors du code',
    contact: 'Contact',
  },
  githubCta: 'Voir mon GitHub',
  contactCta: 'Me contacter',
  about: 'À propos',
  categories: {
    epitech: 'Projets EPITECH',
    perso: 'Projets perso',
    entreprise: 'En entreprise',
  },
  projects: {
    seeProject: 'Voir le projet',
    seeAll: (n: number) => `Voir les ${n} projets`,
    viewCode: 'Voir le code',
    notePhotos: "Le code de ce projet n'est pas public : voici le projet en images.",
    notePrivate: 'Le code de ce projet est privé.',
    noteSoon: 'Le dépôt sera bientôt public.',
    back: 'Tous les projets',
    photos: 'En images',
  },
  imperium: {
    label: "Régler l'heure à 18 h avec Hora",
    custom: 'Moteur maison',
    language: 'Langage',
    location: 'Emplacement',
    call: 'Appel',
  },
  hackathons: {
    intro: 'Coder contre la montre, en équipe.',
    seeAll: 'Voir tous les hackathons',
    back: 'Tous les hackathons',
    see: 'Voir le hackathon',
  },
  journey: {
    experience: 'Expérience professionnelle et autres',
    formation: 'Formation',
    seeAll: 'Voir tout le parcours',
    back: 'Tout le parcours',
    now: 'En cours',
  },
  skills: {
    languages: 'Langages',
    notions: 'Notions',
    tools: 'Frameworks et outils',
    spoken: 'Langues',
    seeAll: 'Voir les compétences',
  },
  beyond: {
    intro: 'Ce qui tourne sur mon écran et dans mes écouteurs quand je ne code pas.',
    nowPlaying: 'Mes jeux du moment',
    favGames: 'Mes jeux préférés',
    favFilms: 'Mes films préférés',
    spotify: 'Sur mon Spotify',
    steam: 'Mon profil Steam',
    listen: 'Écouter sur Spotify',
    achievements: (done: number, total: number) => `${done} / ${total} succès`,
    achievementsAria: (done: number, total: number) => `Succès : ${done} sur ${total}`,
    seeAll: 'Voir la suite',
  },
  contact: {
    title: 'On en parle ?',
    text: 'Une question sur un projet, une opportunité de stage ? Écris-moi, je réponds vite.',
  },
  footer: 'Site statique Astro, hébergé sur GitHub Pages',
};

const en: typeof fr = {
  switchTo: 'Français',
  switchToAria: 'Lire cette page en français',
  nav: {
    label: 'Navigation',
    home: 'Home',
    projects: 'Projects',
    hackathons: 'Hackathons',
    journey: 'Journey',
    skills: 'Skills',
    beyond: 'Beyond code',
    contact: 'Contact',
  },
  githubCta: 'View my GitHub',
  contactCta: 'Contact me',
  about: 'About',
  categories: {
    epitech: 'EPITECH projects',
    perso: 'Personal projects',
    entreprise: 'At work',
  },
  projects: {
    seeProject: 'View project',
    seeAll: (n: number) => `See all ${n} projects`,
    viewCode: 'View the code',
    notePhotos: "This project's code isn't public: here it is in pictures.",
    notePrivate: "This project's code is private.",
    noteSoon: 'The repository will be public soon.',
    back: 'All projects',
    photos: 'In pictures',
  },
  imperium: {
    label: 'Set the time to 6 pm with Hora',
    custom: 'Custom engine',
    language: 'Language',
    location: 'Location',
    call: 'Call',
  },
  hackathons: {
    intro: 'Coding against the clock, as a team.',
    seeAll: 'See all hackathons',
    back: 'All hackathons',
    see: 'View hackathon',
  },
  journey: {
    experience: 'Work experience and more',
    formation: 'Education',
    seeAll: 'See the full journey',
    back: 'Full journey',
    now: 'Ongoing',
  },
  skills: {
    languages: 'Languages',
    notions: 'Basics',
    tools: 'Frameworks and tools',
    spoken: 'Spoken languages',
    seeAll: 'See skills',
  },
  beyond: {
    intro: "What's on my screen and in my headphones when I'm not coding.",
    nowPlaying: "What I'm playing",
    favGames: 'My favourite games',
    favFilms: 'My favourite films',
    spotify: 'On my Spotify',
    steam: 'My Steam profile',
    listen: 'Listen on Spotify',
    achievements: (done: number, total: number) => `${done} / ${total} achievements`,
    achievementsAria: (done: number, total: number) => `Achievements: ${done} of ${total}`,
    seeAll: 'See more',
  },
  contact: {
    title: 'Shall we talk?',
    text: 'A question about a project, an internship opportunity? Write to me, I reply quickly.',
  },
  footer: 'Static Astro site, hosted on GitHub Pages',
};

const UI: Record<Lang, typeof fr> = { fr, en };

export function useUi(lang: Lang) {
  return UI[lang];
}
