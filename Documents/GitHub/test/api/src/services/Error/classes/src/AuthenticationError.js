/**
 * 
 */
export default class AuthenticationError extends Error {
  constructor(error) {
    super(error)
    this.statusCode = 401
    this.name = this.constructor.name
    this.stack = this.stack
    return this
  }
}