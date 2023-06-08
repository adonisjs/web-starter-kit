import env from '#start/env'
import { defineConfig } from '@adonisjs/view'

/**
 * Configuration options for the View provider
 */
export default defineConfig({
  cache: {
    /**
     * If we should cache templates in-memory after
     * their first compilation. Ideally it should be set
     * to true in production
     */
    enabled: env.get('CACHE_VIEWS', false),
  }
})