import '@adonisjs/core/types/http'

declare module '@adonisjs/core/types/http' {
  type ScannedRoutes = {
    ALL: {
      'users.index': { paramsTuple?: []; params?: {} }
      'users.create': { paramsTuple?: []; params?: {} }
      'users.store': { paramsTuple?: []; params?: {} }
      'users.show': { paramsTuple: [string]; params: { id: string } }
      'users.edit': { paramsTuple: [string]; params: { id: string } }
      'users.update': { paramsTuple: [string]; params: { id: string } }
      'users.destroy': { paramsTuple: [string]; params: { id: string } }
    }
    GET: {
      'users.index': { paramsTuple?: []; params?: {} }
      'users.create': { paramsTuple?: []; params?: {} }
      'users.show': { paramsTuple: [string]; params: { id: string } }
      'users.edit': { paramsTuple: [string]; params: { id: string } }
    }
    HEAD: {
      'users.index': { paramsTuple?: []; params?: {} }
      'users.create': { paramsTuple?: []; params?: {} }
      'users.show': { paramsTuple: [string]; params: { id: string } }
      'users.edit': { paramsTuple: [string]; params: { id: string } }
    }
    POST: {
      'users.store': { paramsTuple?: []; params?: {} }
    }
    PUT: {
      'users.update': { paramsTuple: [string]; params: { id: string } }
    }
    PATCH: {
      'users.update': { paramsTuple: [string]; params: { id: string } }
    }
    DELETE: {
      'users.destroy': { paramsTuple: [string]; params: { id: string } }
    }
  }
  export interface RoutesList extends ScannedRoutes {}
}
