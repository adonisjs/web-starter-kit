import logger from '#config/logger'

declare module '@adonisjs/core/types' {
  /**
   * Here we get a list of loggers you have configured inside
   * the config/hash.ts file.
   */
  export interface LoggersList extends InferLoggers<typeof logger> {}
}
