import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
  VITE_NODE_ENV: z.enum(['dev', 'test', 'prod']).default('prod'),
})

export const env = envSchema.parse(import.meta.env)

