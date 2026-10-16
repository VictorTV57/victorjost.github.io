// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Site servi à la racine : le dépôt « victorjost.github.io » doit appartenir au compte GitHub « victorjost ».
  site: 'https://victorjost.github.io',
  trailingSlash: 'always',
});
