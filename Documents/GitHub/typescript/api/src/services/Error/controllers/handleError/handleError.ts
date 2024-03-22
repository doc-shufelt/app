import AuthenticationError from '../../classes/src/AuthenticationError.js'
import RouteNotSupportedError from '../../classes/src/RouteNotSupportedError.js'
import RequestValidationError from '../../classes/src/RequestValidationError.js'
/**
 * 
 * @param { object } error 
 * @param { object } req 
 * @param { object } res 
 * @param {*} next 
 */
export default async function handleError(error) {
  if (error instanceof RequestValidationError) {
    return new ResourceNotFoundError(error)
  }
  if (error instanceof RouteNotSupportedError) {
    return new ResourceNotFoundError(error)
  }
  if (error instanceof AuthenticationError) {
    return new AuthenticationError(error)
  }
}