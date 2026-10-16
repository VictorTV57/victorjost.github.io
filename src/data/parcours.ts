import type { Text } from '../i18n';

export interface Step {
  /** Identifiant : sert d'adresse à la page de détail (/parcours/<id>/). */
  id: string;
  kind: 'experience' | 'formation';
  when: Text;
  title: Text;
  text: Text;
  /** Points clés (diplômes, mentions, options), en liste sous le texte. */
  details?: Text[];
  /** En cours : le repère de la frise est plein. */
  now?: boolean;
}

export const experience: Step[] = [
  {
    id: 'epiclutch',
    kind: 'experience',
    when: { fr: 'En cours · association', en: 'Ongoing · student club' },
    title: { fr: "Responsable d'EpiClutch, EPITECH Nancy", en: 'Head of EpiClutch, EPITECH Nancy' },
    text: {
      fr: "J'ai repris deux associations jeu vidéo de l'école : VOJAUJ, côté jeux gratuits et bonne ambiance, et EpiClutch, côté jeux payants et compétition (toujours dans la bonne ambiance). Elles ont fusionné sous le nom le plus connu, EpiClutch. On organise au moins deux soirées jeux vidéo par mois.",
      en: "I took over the school's two video game clubs: VOJAUJ, for free games and good vibes, and EpiClutch, for paid games and competition (still with good vibes). They merged under the better-known name, EpiClutch. We host at least two gaming nights a month.",
    },
    now: true,
  },
  {
    id: 'ambassadeur-epitech',
    kind: 'experience',
    when: { fr: 'En cours · EPITECH Nancy', en: 'Ongoing · EPITECH Nancy' },
    title: { fr: 'Ambassadeur EPITECH', en: 'EPITECH ambassador' },
    text: {
      fr: "Je représente l'école sur les salons et lors des journées portes ouvertes, pour présenter la formation aux futurs étudiants et à leurs parents.",
      en: 'I represent the school at fairs and open days, presenting the programme to future students and their parents.',
    },
    now: true,
  },
  {
    id: 'manta',
    kind: 'experience',
    when: { fr: 'En cours · Coding Club EPITECH', en: 'Ongoing · EPITECH Coding Club' },
    title: 'Manta',
    text: {
      fr: "J'encadre des collégiens et des lycéens pendant les Coding Clubs : on monte des projets adaptés à leur niveau, et surtout fun, pour leur donner le goût de coder.",
      en: 'I mentor middle and high school students during Coding Clubs: we build projects suited to their level, and above all fun, to make them want to code.',
    },
    now: true,
  },
  {
    id: 'onyx-informatique',
    kind: 'experience',
    when: { fr: 'Sept. – déc. 2025 · stage', en: 'Sept. – Dec. 2025 · internship' },
    title: { fr: 'Développeur stagiaire, ONYX Informatique', en: 'Developer intern, ONYX Informatique' },
    text: {
      fr: 'Application de suivi de dossiers patients en C#/.NET MAUI, API web et SQL Server, à Yutz.',
      en: 'Patient record tracking app in C#/.NET MAUI, web API and SQL Server, in Yutz.',
    },
  },
  {
    id: 'vivatech',
    kind: 'experience',
    when: { fr: 'Juin 2025 et juin 2026 · bénévolat', en: 'June 2025 and June 2026 · volunteering' },
    title: { fr: "Capitaine d'équipe bénévole, VivaTech Paris", en: 'Volunteer team captain, VivaTech Paris' },
    text: {
      fr: 'Deux éditions à encadrer une équipe de bénévoles sur le salon, en partenariat avec EPITECH Nancy et TechUp Network.',
      en: 'Two editions leading a team of volunteers at the show, in partnership with EPITECH Nancy and TechUp Network.',
    },
  },
];

export const formation: Step[] = [
  {
    id: 'epitech',
    kind: 'formation',
    when: '2024 – 2029',
    title: { fr: 'Programme Grande École, EPITECH Nancy', en: 'Master’s programme (Programme Grande École), EPITECH Nancy' },
    text: {
      fr: 'Pédagogie par projets. Actuellement en 3e année.',
      en: 'Project-based learning. Currently in 3rd year.',
    },
    now: true,
  },
  {
    id: 'indp',
    kind: 'formation',
    when: '2009 – 2024',
    title: 'INDP, Thionville',
    text: {
      fr: 'Toute ma scolarité dans le même établissement, de la maternelle au lycée.',
      en: 'My whole schooling in the same school, from nursery to high school.',
    },
    details: [
      { fr: 'Brevet : mention Bien', en: 'Brevet (end of middle school): “Bien” (good) grade' },
      { fr: 'Seconde : option management', en: 'Year 10 (Seconde): management option' },
      {
        fr: 'Bac technologique STMG, option ressources humaines : mention Assez bien',
        en: 'Technological baccalauréat STMG, human resources option: “Assez bien” (fairly good) grade',
      },
    ],
  },
];

export const steps: Step[] = [...experience, ...formation];
