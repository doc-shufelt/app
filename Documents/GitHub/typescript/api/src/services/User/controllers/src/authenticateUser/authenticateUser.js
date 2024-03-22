/* imports */
import bcrypt from 'bcryptjs'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import AuthenticationError from '../../../../Error/classes/src/AuthenticationError.js'

/**
 * @description
 * @param { string } email 
 * @param { string } password 
 * @returns { Promise<object> }
 */
export default async function authenticateUser(emailAddress, password, mongoClient) {
  const collection = 'users'
  const filter = {
    emailAddress: emailAddress
  }
  const user = await DatabaseController.findByFilters(filter, collection, {}, mongoClient)
  if (!user) {
    throw new AuthenticationError('The username is not valid.')
  }
  // check whether the password is correct
  const hash = user[0].hashedPassword
  const authorize = await bcrypt.compare(password, hash)
  if (!authorize) {
    throw new AuthenticationError('The password is incorrect.')
  }
  // update the last login property on the user record in mongodb
  const updateDocument = {
    lastLogin: new Date().toISOString()
  }
  const updatedUser = await DatabaseController.update(user[0]._id, updateDocument, collection, mongoClient)
  delete updatedUser.hashedPassword
  return updatedUser
}