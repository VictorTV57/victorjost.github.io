import type { Text } from '../i18n';

export const languages = ['C', 'C++', 'C#', 'Python', 'JavaScript', 'TypeScript'];
export const notions = ['Luau', 'Rust', 'Haskell'];
export const tools = ['.NET MAUI', 'Web API', 'Node.js', 'Vite', 'Astro', 'SQL Server', 'Git'];

export const spoken: { name: Text; level: Text; note?: Text }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' } },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: '825 au TEPitech', en: '825 on the TEPitech' },
    note: { fr: '(équivalent TOEIC)', en: '(TOEIC equivalent)' },
  },
];
