/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description Function saves a list of property objects to mongodb
 * @param { array } properties
 * @returns 
 */
export default async function savePropertyBulk(properties, mongoClient) {
    const collection = 'properties'
    const results = DatabaseController.insertBulk(properties, collection, {}, mongoClient)
    return results
}