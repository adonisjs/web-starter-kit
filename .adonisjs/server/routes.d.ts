import '@adonisjs/core/types/http'

declare module '@adonisjs/core/types/http' {
  type ScannedRoutes = {
    'ALL': {
    },
    'GET': {
    },
    'HEAD': {
    },
  }
export interface RoutesList extends ScannedRoutes {}
}