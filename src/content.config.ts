import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Un texte identique dans toutes les langues, ou traduit : `{ fr: ..., en: ... }`. */
const text = z.union([z.string(), z.object({ fr: z.string(), en: z.string() })]);

/**
 * Un fichier Markdown par projet dans src/content/projects/ (seul le frontmatter est lu).
 * Le nom du fichier sert d'identifiant et d'adresse : /projets/<id>/ et /en/projects/<id>/.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: text,
      category: z.enum(['epitech', 'perso', 'entreprise']),
      /** 1 = en haut. Sur l'accueil, seul le premier de chaque catégorie s'affiche. */
      order: z.number(),
      kind: text,
      /** Texte court des cartes. */
      summary: text,
      /** Texte de la page du projet. Sans lui, la page reprend `summary`. */
      description: text.optional(),
      thumb: image(),
      tags: z.array(text),
      /** Pastille verte, ex. « En développement ». */
      status: text.optional(),
      repo: z.url().optional(),
      /** Code non publiable (entreprise). Sans repo ni private, la page indique que le dépôt arrive. */
      private: z.boolean().default(false),
      /** Galerie de la page du projet. Sans `src`, un cadre provisoire s'affiche. */
      photos: z
        .array(
          z.object({
            caption: text,
            size: z.enum(['big', 'wide']).optional(),
            src: image().optional(),
            alt: text.optional(),
          }),
        )
        .optional(),
    }),
});

const hackathons = defineCollection({
  loader: file('./src/content/hackathons.json'),
  schema: z.object({
    /** 1 = en haut. */
    order: z.number(),
    date: text,
    title: text,
    summary: text,
    /** Texte de la page du hackathon. Sans lui, la page reprend `summary`. */
    description: text.optional(),
    result: text,
    tags: z.array(text).default([]),
  }),
});

export const collections = { projects, hackathons };
