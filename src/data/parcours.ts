export interface Step {
  when: string;
  title: string;
  text: string;
  /** En cours : le repère de la frise est plein. */
  now?: boolean;
}

export const experience: Step[] = [
  {
    when: 'En cours · association',
    title: "Responsable d'EpiClutch, EPITECH Nancy",
    text: "J'ai repris deux associations jeu vidéo de l'école : VOJAUJ, côté jeux gratuits et bonne ambiance, et EpiClutch, côté jeux payants et compétition (toujours dans la bonne ambiance). Elles ont fusionné sous le nom le plus connu, EpiClutch. On organise au moins deux soirées jeux vidéo par mois.",
    now: true,
  },
  {
    when: 'En cours · EPITECH Nancy',
    title: 'Ambassadeur EPITECH',
    text: "Je représente l'école sur les salons et lors des journées portes ouvertes, pour présenter la formation aux futurs étudiants et à leurs parents.",
    now: true,
  },
  {
    when: 'En cours · Coding Club EPITECH',
    title: 'Manta',
    text: "J'encadre des collégiens et des lycéens pendant les Coding Clubs : on monte des projets adaptés à leur niveau, et surtout fun, pour leur donner le goût de coder.",
    now: true,
  },
  {
    when: 'Sept. – déc. 2025 · stage',
    title: 'Développeur stagiaire, ONYX Informatique',
    text: 'Application de suivi de dossiers patients en C#/.NET MAUI, API web et SQL Server, à Yutz.',
  },
  {
    when: 'Juin 2025 et juin 2026 · bénévolat',
    title: "Capitaine d'équipe bénévole, VivaTech Paris",
    text: 'Deux éditions à encadrer une équipe de bénévoles sur le salon, en partenariat avec EPITECH Nancy et TechUp Network.',
  },
];

export const formation: Step[] = [
  {
    when: '2024 – 2029',
    title: 'Programme Grande École, EPITECH Nancy',
    text: 'Pédagogie par projets. Actuellement en 3e année.',
    now: true,
  },
  {
    when: 'De la maternelle à 2024',
    title: "Nom de l'établissement, ville",
    text: 'Toute ma scolarité dans le même établissement, de la maternelle au lycée. Baccalauréat, spécialités à préciser.',
  },
];
