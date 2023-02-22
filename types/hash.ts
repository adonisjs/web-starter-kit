import hash from '#config/hash'

declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hash> {}
}
