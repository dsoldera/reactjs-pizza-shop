import { env } from '@/env'
import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  // driver: 'pg',
  dbCredentials: {
    url: env.DB_URL,
  },
  dialect: 'postgresql'
} satisfies Config
