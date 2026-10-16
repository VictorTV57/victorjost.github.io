import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Un fichier Markdown par projet dans src/content/projects/.
 * Le nom du fichier sert d'identifiant (et d'URL pour la page photos).
 * Le corps du fichier n'est utilisé que par la page photos.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['epitech', 'perso', 'entreprise']),
      /** 1 = en haut. Dans chaque catégorie, le plus petit numéro s'affiche, les autres vont dans le repli. */
      order: z.number(),
      kind: z.string(),
      summary: z.string(),
      thumb: image(),
      tags: z.array(z.string()),
      /** Pastille verte sous le texte, ex. « En développement ». */
      status: z.string().optional(),
      repo: z.url().optional(),
      /** Code non publiable (entreprise). Sans repo ni private, la carte affiche « Dépôt à venir ». */
      private: z.boolean().default(false),
      /** Présent = le projet a sa page photos sur /projets/<id>/. */
      page: z
        .object({
          kind: z.string(),
          photos: z.array(
            z.object({
              caption: z.string(),
              size: z.enum(['big', 'wide']).optional(),
              /** Sans image, un cadre provisoire s'affiche. */
              src: image().optional(),
              alt: z.string().optional(),
            }),
          ),
        })
        .optional(),
    }),
});

const hackathons = defineCollection({
  loader: file('./src/content/hackathons.json'),
  schema: z.object({
    /** 1 = en haut. */
    order: z.number(),
    date: z.string(),
    title: z.string(),
    summary: z.string(),
    result: z.string(),
  }),
});

export const collections = { projects, hackathons };
