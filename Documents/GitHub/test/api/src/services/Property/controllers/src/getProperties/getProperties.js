/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * 
 * @param {object} filters
 * @param {object} mongoClient
 * @returns { Promise<object> }
 */
export default async function getProperties(filters, mongoClient) {
  const collection = 'properties'
  // TO-DO: validate id format
  const results = await DatabaseController.findByFilters(filters, collection, {
    propertyValue: true
  }, mongoClient)
  return results
}