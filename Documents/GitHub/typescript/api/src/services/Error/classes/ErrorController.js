/* imports */
import RequestValidationError from './src/AuthenticationError.js'
import RouteNotSupportedError from './src/RouteNotSupportedError.js'
import AuthenticationError from './src/AuthenticationError.js'

const ErrorController = {
  RequestValidationError,
  RouteNotSupportedError,
  AuthenticationError
}

export default ErrorController