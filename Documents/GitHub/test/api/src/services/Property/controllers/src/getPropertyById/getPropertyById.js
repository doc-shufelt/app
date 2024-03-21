/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * 
 * @param { string } id 
 * @returns { Promise<object> }
 */
export default async function getPropertyById(propertyId, mongoClient) {
  const collection = 'properties'
  // TO-DO: validate id format
  const results = await DatabaseController.findById(propertyId, collection, mongoClient)
  return results
}