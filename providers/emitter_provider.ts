import { BaseEvent } from '@adonisjs/core/events'
import { ApplicationService } from '@adonisjs/core/types'

export default class EmitterProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    /**
     * Giving dispatch ability to the "BaseEvent" class
     */
    BaseEvent.useEmitter(await this.app.container.make('emitter'))
  }
}
