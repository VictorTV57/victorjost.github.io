import type { Text } from '../i18n';

/** Section « Ce qui m'intéresse » : ce que je cherche pour mon stage. */
export const places = ['Nancy', 'Metz', 'Yutz / Thionville', 'Luxembourg'];

export const interests: { title: Text; text: Text; places?: boolean }[] = [
  {
    title: { fr: 'Où', en: 'Where' },
    text: { fr: 'En Lorraine ou au Luxembourg :', en: 'In Lorraine or in Luxembourg:' },
    places: true,
  },
  {
    title: { fr: 'Quel environnement', en: 'What kind of company' },
    text: {
      fr: 'Un grand groupe, notamment dans le secteur bancaire et financier, avec des équipes et des projets à grande échelle.',
      en: 'A large company, particularly in banking and finance, with large-scale teams and projects.',
    },
  },
  {
    title: { fr: "Ce que j'apporte", en: 'What I bring' },
    text: {
      fr: "Je m'adapte vite : nouveau langage, nouvelle équipe, nouveau domaine. Mon parcours le montre, du C# en entreprise au Python sur une voiture autonome.",
      en: 'I adapt quickly: a new language, a new team, a new field. My path shows it, from C# at a company to Python on a self-driving car.',
    },
  },
  {
    title: { fr: 'Ce que je cherche', en: "What I'm after" },
    text: {
      fr: 'Découvrir de nouvelles choses : un métier, des outils, une façon de travailler que je ne connais pas encore.',
      en: "Discovering new things: a field, tools, a way of working I don't know yet.",
    },
  },
];
