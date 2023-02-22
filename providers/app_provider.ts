import { ApplicationService } from '@adonisjs/core/types'

/**
 * Freshly baked provider for your app. Feel free to use the lifecycle
 * methods to perform actions as the application is getting ready
 */
export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
