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
  }),
});

export const collections = { viaggi };
