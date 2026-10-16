# Portfolio de Victor Jost

Site statique en Astro et TypeScript, publié sur GitHub Pages à chaque push sur `main` (voir `.github/workflows/deploy.yml`).
Le style suit le design system « Victor Jost » : https://claude.ai/artifact/3QgCeSwDMcaXUkdLgqLdao

## Lancer en local

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # vérifie les types (astro check) puis génère dist/
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Projets | `src/content/projects/*.md`, un fichier par projet |
| Hackathons | `src/content/hackathons.json` |
| Expérience et formation | `src/data/parcours.ts` |
| Jeux, films, playlist | `src/data/perso.ts` |
| Nom, pitch, disponibilité, liens | `src/data/site.ts` |
| Couleurs, espacements, polices | `src/styles/global.css` (tokens en tête de fichier) |

### Ajouter un projet

Créer `src/content/projects/mon-projet.md` :

```yaml
---
title: Mon projet
category: perso          # epitech | perso | entreprise
order: 4                 # 1 = en haut ; les suivants vont dans « Voir les autres projets »
kind: Projet personnel
summary: Ce que fait le projet, en une ou deux phrases.
thumb: ./thumbs/mon-projet.svg
tags: [TypeScript, Astro]
status: En développement # facultatif
repo: https://github.com/VictorTV57/mon-projet   # facultatif
private: true            # facultatif : affiche « Code privé » au lieu de « Dépôt à venir »
---
```

Le schéma est vérifié au build (`src/content.config.ts`) : un champ manquant ou mal typé fait échouer `npm run build`.

### Page photos

Ajouter un bloc `page` crée la page `/projets/<nom-du-fichier>/` et le lien « Voir les photos » sur la carte.
Le texte sous le `---` final devient la description de la page.

```yaml
page:
  kind: Projet pédagogique national EPITECH
  photos:
    - caption: La voiture terminée, sur la piste
      size: big              # big | wide, facultatif
      src: ./photos/piste.jpg  # facultatif : sans image, un cadre provisoire s'affiche
```

Les photos sont optimisées automatiquement (formats et tailles responsives).

## Adresse du site

Le site est servi à la racine de https://victorjost.github.io. GitHub Pages ne sert un dépôt
`<nom>.github.io` à la racine que s'il appartient au compte (ou à l'organisation) `<nom>` :
ce dépôt doit donc vivre sur le compte GitHub `victorjost`.
Pour le publier ailleurs dans un sous-chemin, ajouter `base: '/<nom-du-dépôt>'` dans `astro.config.mjs` ;
tous les liens internes passent par `url()` (`src/data/site.ts`) et suivent automatiquement.
