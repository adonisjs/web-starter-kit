import logger from "#config/logger"

declare module '@adonisjs/core/types' {
  export interface LoggersList extends InferLoggers<typeof logger> {}
}
