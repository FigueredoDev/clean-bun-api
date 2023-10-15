import { type HttpRequest, type HttpResponse } from './http'

export interface ControllerInterface {
  handle: (httpRequest: HttpRequest) => HttpResponse
}
