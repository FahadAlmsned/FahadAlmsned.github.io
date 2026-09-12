import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['مبتدئ', 'متوسط', 'متقدم']).default('مبتدئ'),
    date: z.string().optional(),
    source: z.string().optional(),
    translationType: z.enum(['ترجمة مباشرة', 'شرح مبسط']).default('ترجمة مباشرة'),
  }),
});

const dictionary = defineCollection({
  type: 'content',
  schema: z.object({
    term_en: z.string(),
    term_ar: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = { lessons, dictionary };
