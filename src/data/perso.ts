/**
 * Section « En dehors du code ».
 * Les couleurs c1/c2 dessinent des visuels provisoires, à remplacer par de vraies jaquettes.
 */
interface Placeholder {
  c1: string;
  c2: string;
}

export interface NowPlaying extends Placeholder {
  title: string;
  info: string;
  /** Texte à droite, ex. « Tous les jours ». */
  time?: string;
  achievements?: { done: number; total: number };
}

export interface Cover extends Placeholder {
  title: string;
  info: string;
}

export interface Track {
  title: string;
  artist: string;
  length: string;
}

export const steamUrl = 'https://steamcommunity.com/id/TON-PROFIL';
export const spotifyUrl = 'https://open.spotify.com/user/TON-PROFIL';

export const nowPlaying: NowPlaying[] = [
  { title: 'Roblox', info: 'PC · je développe aussi dessus', time: 'Tous les jours', c1: '#1F4FE0', c2: '#0E1A2B' },
  { title: 'Titre du jeu', info: 'Plateforme', achievements: { done: 12, total: 26 }, c1: '#F5B800', c2: '#0E1A2B' },
  { title: 'Titre du jeu', info: 'Plateforme', achievements: { done: 40, total: 50 }, c1: '#56637A', c2: '#DCE2EA' },
];

/** Un classement : l'ordre du tableau donne le rang. */
export const favoriteGames: Cover[] = [
  { title: 'Titre du jeu', info: 'Année', c1: '#0E1A2B', c2: '#1F4FE0' },
  { title: 'Titre du jeu', info: 'Année', c1: '#1F4FE0', c2: '#8FA8F5' },
  { title: 'Titre du jeu', info: 'Année', c1: '#F5B800', c2: '#0E1A2B' },
  { title: 'Titre du jeu', info: 'Année', c1: '#56637A', c2: '#0E1A2B' },
];

export const favoriteFilms: Cover[] = [
  { title: 'Titre du film', info: 'Réalisateur, année', c1: '#0E1A2B', c2: '#F5B800' },
  { title: 'Titre du film', info: 'Réalisateur, année', c1: '#1F4FE0', c2: '#0E1A2B' },
  { title: 'Titre du film', info: 'Réalisateur, année', c1: '#DCE2EA', c2: '#56637A' },
  { title: 'Titre du film', info: 'Réalisateur, année', c1: '#0E1A2B', c2: '#8FA8F5' },
  { title: 'Titre du film', info: 'Réalisateur, année', c1: '#F5B800', c2: '#1F4FE0' },
];

/**
 * Pour afficher la vraie playlist, remplacer le bloc .playlist de Perso.astro par le lecteur officiel :
 * Spotify > la playlist > ... > Partager > Intégrer la playlist.
 */
export const playlist = {
  name: 'Nom de ma playlist',
  description: "Ce que j'écoute en codant",
  tracks: [
    { title: 'Titre', artist: 'Artiste', length: '3:24' },
    { title: 'Titre', artist: 'Artiste', length: '2:58' },
    { title: 'Titre', artist: 'Artiste', length: '4:11' },
    { title: 'Titre', artist: 'Artiste', length: '3:47' },
    { title: 'Titre', artist: 'Artiste', length: '3:05' },
  ] satisfies Track[],
};
