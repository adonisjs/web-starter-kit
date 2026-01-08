import { defineConfig } from '@adonisjs/static'

/**
 * Configuration options to tweak the static files middleware.
 * The complete set of options are documented on the
 * official documentation website.
 *
 * https://docs.adonisjs.com/guides/basics/static-file-server
 */
const staticServerConfig = defineConfig({
  /**
   * Enable or disable the static file server middleware.
   */
  enabled: true,

  /**
   * Enable ETag headers for static files.
   * ETags help browsers cache files efficiently by comparing
   * file versions without re-downloading unchanged files.
   */
  etag: true,

  /**
   * Include Last-Modified headers in responses.
   * Allows browsers to use conditional requests for better caching.
   */
  lastModified: true,

  /**
   * How to handle dotfiles (files starting with .).
   * 'ignore' - pretend dotfiles don't exist (404).
   * 'allow' - serve dotfiles normally.
   * 'deny' - respond with 403 Forbidden.
   */
  dotFiles: 'ignore',
})

export default staticServerConfig
