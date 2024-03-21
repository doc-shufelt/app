/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description find employees that match the filters criteria
 * @param { Array<object> } filters an array of filter objects
 * @returns { Promise<array> } an array of employee objects that match the filter criteria
 */
export default async function getEmployees(filters, mongoClient) {
  const collectionName = 'employees'
  const results = await DatabaseController.findByFilters(filters, collectionName, {}, mongoClient)
  console.log(results)
  return results
}