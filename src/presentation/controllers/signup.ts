import { MissingParamError } from '../errors/missingParamError'
import { badRequest } from '../helpers/httpHelper'
import { type ControllerInterface } from '../protocols/controller'
import { type HttpResponse, type HttpRequest } from '../protocols/http'

export class SignupController implements ControllerInterface {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        const error = new MissingParamError(field)
        return badRequest(error)
      }
    }

    const response = {
      statusCode: 200,
      body: {}
    }

    return response
  }
}
