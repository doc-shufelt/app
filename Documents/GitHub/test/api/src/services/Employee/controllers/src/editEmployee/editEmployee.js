/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
/**
 * 
 * @param { object } employee 
 * @returns { Promise<object> }
 */
export default async function editEmployee(employeeId, updateDocument, mongoClient) {
  const collection = 'employees'
  const options = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const results = await DatabaseController.update(employeeId, updateDocument, collection, options, mongoClient)
  return results
}