import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * 
 * @param {string} userId
 * @param {object} mongoClient 
 * @returns {Promise<object>}
 */
export default async function getUserById(userId, mongoClient) {
  const collection = 'users'
  const projection = {
    firstName: true,
    lastName: true,
    emailAddress: true,
    lastLogin: true,
    role: true,
    created: true,
    modified: true
  }
  const results = await DatabaseController.findById(userId, collection, projection, mongoClient)
  return results
}