# Portfolio de Victor Jost

Site statique en Astro et TypeScript, en français et en anglais, publié sur GitHub Pages à chaque push sur `main` (voir `.github/workflows/deploy.yml`).
Le style suit le design system « Victor Jost » : https://claude.ai/artifact/3QgCeSwDMcaXUkdLgqLdao

## Lancer en local

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # vérifie les types (astro check) puis génère dist/
```

## Pages

| Page | Français | Anglais |
| --- | --- | --- |
| Accueil (résumé de chaque section) | `/` | `/en/` |
| Projets, puis un projet | `/projets/`, `/projets/<id>/` | `/en/projects/`, `/en/projects/<id>/` |
| Hackathons, puis un hackathon | `/hackathons/`, `/hackathons/<id>/` | `/en/hackathons/`, `/en/hackathons/<id>/` |
| Parcours, puis une étape | `/parcours/`, `/parcours/<id>/` | `/en/journey/`, `/en/journey/<id>/` |
| Compétences | `/competences/` | `/en/skills/` |
| En dehors du code | `/en-dehors-du-code/` | `/en/beyond-code/` |
| Erreurs | `/404.html` (bilingue), `/401/`… | `/en/401/`… |

Les fichiers de `src/pages/` sont des coquilles de trois lignes qui appellent une vue de `src/views/` avec la langue.
Les segments d'adresse traduits sont déclarés dans `src/i18n/routes.ts`.

## Modifier le contenu

Chaque texte s'écrit soit tel quel (identique dans les deux langues), soit traduit :

```yaml
kind:
  fr: Projet personnel
  en: Personal project
```

| Quoi | Où |
| --- | --- |
| Projets | `src/content/projects/*.md`, un fichier par projet (frontmatter seulement) |
| Hackathons | `src/content/hackathons.json` |
| Expérience et formation | `src/data/parcours.ts` |
| Compétences | `src/data/skills.ts` |
| Jeux, films, playlist | `src/data/perso.ts` |
| À propos | `src/data/about.ts` |
| Nom, pitch, disponibilité, liens | `src/data/site.ts` |
| Textes de l'interface (menus, boutons) | `src/i18n/ui.ts` |
| Pages d'erreur | `src/i18n/errors.ts` |
| Couleurs, espacements, ombres | `src/styles/tokens.css` |

### Ajouter un projet

Créer `src/content/projects/mon-projet.md` : sa page apparaît sur `/projets/mon-projet/` et `/en/projects/mon-projet/`.

```yaml
---
title: Mon projet
category: perso          # epitech | perso | entreprise
order: 4                 # 1 = en haut ; l'accueil ne montre que le premier de chaque catégorie
kind:
  fr: Projet personnel
  en: Personal project
summary:                 # texte court des cartes
  fr: Ce que fait le projet.
  en: What the project does.
description:             # facultatif : texte plus long de la page du projet
  fr: …
  en: …
thumb: ./thumbs/mon-projet.svg
tags:
  - TypeScript
  - fr: Extension web
    en: Browser extension
status:                  # facultatif
  fr: En développement
  en: In development
repo: https://github.com/VictorTV57/mon-projet   # facultatif
private: true            # facultatif : « code privé » au lieu de « dépôt à venir »
photos:                  # facultatif : galerie de la page du projet
  - caption:
      fr: La voiture terminée
      en: The finished car
    size: big              # big | wide, facultatif
    src: ./photos/piste.jpg  # facultatif : sans image, un cadre provisoire s'affiche
---
```

Le schéma est vérifié au build (`src/content.config.ts`) : un champ manquant, mal typé ou une traduction oubliée fait échouer `npm run build`.
Les photos sont optimisées automatiquement (formats et tailles responsives).

## Adresse du site

Le site est servi à la racine de https://victorjost.github.io (dépôt `victorjost.github.io` de l'organisation `victorjost`).
GitHub Pages ne sert que `404.html` comme page d'erreur ; il s'affiche en anglais quand l'adresse demandée commence par `/en/`.
Les autres pages d'erreur ne servent que si le site change d'hébergeur.
