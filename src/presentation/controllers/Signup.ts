import { type HttpResponse, type HttpRequest } from '../protocols/http'

export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Name is required')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Email is required')
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
