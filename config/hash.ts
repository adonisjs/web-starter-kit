import { defineConfig, drivers } from '@adonisjs/core/hash'

/**
 * Hashing configuration.
 * Defines the hashing algorithm and parameters used for password hashing.
 */
const hashConfig = defineConfig({
  /**
   * The default hashing algorithm to use.
   */
  default: 'scrypt',

  /**
   * List of available hashers and their configuration.
   */
  list: {
    /**
     * Scrypt hasher configuration.
     * Scrypt is a password-based key derivation function designed to be
     * computationally intensive and memory-hard to resist brute-force attacks.
     */
    scrypt: drivers.scrypt({
      /**
       * CPU/memory cost parameter.
       * Higher values increase security but require more resources.
       */
      cost: 16384,

      /**
       * Block size parameter.
       * Affects memory usage and performance.
       */
      blockSize: 8,

      /**
       * Parallelization parameter.
       * Controls the number of independent mixing functions.
       */
      parallelization: 1,

      /**
       * Maximum memory in bytes to use for hashing.
       * Set to 32MB (33554432 bytes) by default.
       */
      maxMemory: 33554432,
    }),
  },
})

export default hashConfig

/**
 * Inferring types for the list of hashers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hashConfig> {}
}
