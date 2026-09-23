import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const viaggi = defineCollection({
  // Astro v6 requires an explicit loader: glob() reads every .md file in the folder below.
  loader: glob({ pattern: '**/*.md', base: './src/content/viaggi' }),
  schema: z.object({
    // Must match the "reg_name" property in src/data/italy-regions.json exactly
    // (e.g. "Molise", "Puglia", "Toscana", "Emilia-Romagna").
    regione: z.string(),
    titolo: z.string(),
    data: z.string(),
    km: z.number(),
    dislivelloM: z.number(),
    giorni: z.number(),
    gpxFile: z.string(),
    coverColors: z.array(z.string()).default([
      '#6B7A5E', '#8A6A4F', '#5C6F63', '#7A5C42',
    ]),
    // Photos shown in the trip gallery, in scroll order. Each one lights up
    // its own point on the mini map, so lat/lng is where the shot was taken.
    // `src` is a path under public/ (e.g. "/foto/molise/cacciatore.jpg");
    // leave it out to show a coloured placeholder until the real photo exists.
    foto: z.array(z.object({
      src: z.string().optional(),
      luogo: z.string(),
      didascalia: z.string().default(''),
      lat: z.number(),
      lng: z.number(),
    })).default([]),
  }),
});

export const collections = { viaggi };
