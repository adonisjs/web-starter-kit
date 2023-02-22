import { Logger } from '@adonisjs/core/logger'
import { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'

/**
 * The container bindings middleware binds classes to their request
 * specific value with the container resolver.
 *
 * You can also bind custom classes inside this middleware
 */
export default class ContainerBindingsMiddleware {
  handle(ctx: HttpContext, next: NextFn) {
    /**
     * During the current HTTP request, inject "HTTPContext" class
     * will get the "ctx" object
     */
    ctx.containerResolver.bindValue(HttpContext, ctx)

    /**
     * During the current HTTP request, inject "Logger" class
     * will get the "ctx.logger" object
     */
    ctx.containerResolver.bindValue(Logger, ctx.logger)

    return next()
  }
}
