import { describe, expect, it } from 'bun:test'
import { SignupController } from './Signup'

describe('SignupController', () => {
  it('should return 400 if no name is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'some-email',
        password: 'some-password',
        passwordConfirmation: 'some-password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Name is required'))
  })

  it('should return 400 if no email is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'some-name',
        password: 'some-password',
        passwordConfirmation: 'some-password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Email is required'))
  })
})
