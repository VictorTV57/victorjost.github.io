/** Langues du site. Le français est servi à la racine, l'anglais sous /en/. */
export const languages = ['fr', 'en'] as const;
export type Lang = (typeof languages)[number];

/** Un texte traduit dans chaque langue. */
export type Localized = Record<Lang, string>;
/** Un texte identique dans toutes les langues (nom propre, techno) ou traduit. */
export type Text = string | Localized;

export function tr(text: Text, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
