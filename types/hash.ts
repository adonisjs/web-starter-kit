import hash from '#config/hash'

declare module '@adonisjs/core/types' {
  /**
   * Here we get a list of hashers you have configured inside
   * the config/hash.ts file.
   */
  export interface HashersList extends InferHashers<typeof hash> {}
}
