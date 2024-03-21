/* imports */
import Employee from '../../../object/Employee.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { object } employee 
 * @returns { object }
 */
export default async function createEmployee(document, mongoClient) {
  const collectionName = 'employees'
  const employee = await Employee(document)
  const results = await DatabaseController.insert(employee, collectionName, mongoClient)
  return results
}