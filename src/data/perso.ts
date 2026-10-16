import type { Text } from '../i18n';

/**
 * Section « En dehors du code ».
 * Les couleurs c1/c2 dessinent des visuels provisoires, à remplacer par de vraies jaquettes.
 */
interface Placeholder {
  c1: string;
  c2: string;
}

export interface NowPlaying extends Placeholder {
  title: Text;
  info: Text;
  /** Texte à droite, ex. « Tous les jours ». */
  time?: Text;
  achievements?: { done: number; total: number };
  /** Masqué du site sans être supprimé. */
  hidden?: boolean;
}

export interface Cover extends Placeholder {
  title: Text;
  info: Text;
}

export interface Track {
  title: Text;
  artist: Text;
  length: string;
}

export const steamUrl = 'https://steamcommunity.com/profiles/76561199100609206/';
export const spotifyUrl = 'https://open.spotify.com/user/315fxifq3ipkhdz65c7jawu2luui';

const gameTitle = { fr: 'Titre du jeu', en: 'Game title' };
const filmTitle = { fr: 'Titre du film ou de la vidéo', en: 'Film or video title' };
const platform = { fr: 'Plateforme', en: 'Platform' };
const year = { fr: 'Année', en: 'Year' };
const director = { fr: 'Réalisateur ou chaîne YouTube, année', en: 'Director or YouTube channel, year' };

export const nowPlaying: NowPlaying[] = [
  {
    title: 'Roblox',
    info: { fr: 'PC · je développe aussi dessus', en: 'PC · I also develop on it' },
    time: { fr: 'Tous les jours', en: 'Every day' },
    c1: '#1F4FE0', c2: '#0E1A2B',
    hidden: true, // retiré temporairement : passer à false (ou supprimer la ligne) pour le réafficher
  },
  { title: gameTitle, info: platform, achievements: { done: 12, total: 26 }, c1: '#F5B800', c2: '#0E1A2B' },
  { title: gameTitle, info: platform, achievements: { done: 40, total: 50 }, c1: '#56637A', c2: '#DCE2EA' },
];

/** Un classement : l'ordre du tableau donne le rang. */
export const favoriteGames: Cover[] = [
  { title: gameTitle, info: year, c1: '#0E1A2B', c2: '#1F4FE0' },
  { title: gameTitle, info: year, c1: '#1F4FE0', c2: '#8FA8F5' },
  { title: gameTitle, info: year, c1: '#F5B800', c2: '#0E1A2B' },
  { title: gameTitle, info: year, c1: '#56637A', c2: '#0E1A2B' },
];

/** Films et vidéos (YouTube ou autre). */
export const favoriteFilms: Cover[] = [
  { title: filmTitle, info: director, c1: '#0E1A2B', c2: '#F5B800' },
  { title: filmTitle, info: director, c1: '#1F4FE0', c2: '#0E1A2B' },
  { title: filmTitle, info: director, c1: '#DCE2EA', c2: '#56637A' },
  { title: filmTitle, info: director, c1: '#0E1A2B', c2: '#8FA8F5' },
  { title: filmTitle, info: director, c1: '#F5B800', c2: '#1F4FE0' },
];

const trackTitle = { fr: 'Titre', en: 'Title' };
const artist = { fr: 'Artiste', en: 'Artist' };

/**
 * Pour afficher la vraie playlist, remplacer le bloc .playlist de Perso.astro par le lecteur officiel :
 * Spotify > la playlist > ... > Partager > Intégrer la playlist.
 */
export const playlist = {
  name: { fr: 'Nom de ma playlist', en: 'My playlist name' } as Text,
  description: { fr: "Ce que j'écoute en codant", en: 'What I listen to while coding' } as Text,
  tracks: [
    { title: trackTitle, artist, length: '3:24' },
    { title: trackTitle, artist, length: '2:58' },
    { title: trackTitle, artist, length: '4:11' },
    { title: trackTitle, artist, length: '3:47' },
    { title: trackTitle, artist, length: '3:05' },
  ] satisfies Track[],
};
