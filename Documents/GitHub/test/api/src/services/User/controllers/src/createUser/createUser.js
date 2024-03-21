import User from '../../../object/User.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import bcrypt from 'bcryptjs'

/**
 * 
 * @param {object} credentials 
 * @param {object} mongoClient 
 * @returns {Promise<object>} 
 */
export default async function registerUser(credentials, mongoClient) {
  const collection = 'users'
  const checkForExistingEmail = await DatabaseController.findByFilters({
    emailAddress: credentials.emailAddress
  }, collection, mongoClient)

  if (checkForExistingEmail.length > 0) {
    throw new Error('A user with that email already exists.')
  }

  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(credentials.password, salt)
  credentials.hashedPassword = hashedPassword

  const user = User(credentials)
  const insertedUserId = await DatabaseController.insert(user, collection, mongoClient)
  const insertedUser = await DatabaseController.findById({
    _id: insertedUserId.toString()
  }, collection, mongoClient)

  delete insertedUser.hashedPassword
  return insertedUser
}