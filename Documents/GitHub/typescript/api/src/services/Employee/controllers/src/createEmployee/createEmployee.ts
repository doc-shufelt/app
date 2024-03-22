/* imports */
import Employee from '../../../object/Employee.js'
import EmployeeConfig from '../../../config/EmployeeConfig.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function createEmployee(document: object, mongoClient: MongoClient): Promise<string> {
  const employee: object = await Employee(document)
  const results: string = await DatabaseController.insert(employee, EmployeeConfig.collection, mongoClient)
  return results
}