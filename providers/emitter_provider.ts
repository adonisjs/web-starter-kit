import { BaseEvent } from '@adonisjs/core/events'
import { ApplicationService } from '@adonisjs/core/types'

/**
 * The Emitter provider uses the AdonisJS application lifecycle
 * "boot" hook to provide dispatch ability to the "BaseEvent"
 * class
 */
export default class EmitterProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    BaseEvent.useEmitter(await this.app.container.make('emitter'))
  }
}
