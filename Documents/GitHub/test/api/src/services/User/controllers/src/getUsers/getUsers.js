import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * 
 * @param {object} filters 
 * @param {object} mongoClient
 * @returns {Promise<array>}
 */
export default async function getUsers(filters, mongoClient) {
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
  const results = await DatabaseController.findByFilters(filters, collection, projection, mongoClient)
  return results
}