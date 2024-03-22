import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import EmployeeConfig from '../../../config/EmployeeConfig.js'

export default async function editEmployee(employeeId: string, updateDocument: object, mongoClient: MongoClient): Promise<array> {
  const collection: string = EmployeeConfig.collection
  const options: object = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const results: object = await DatabaseController.update(employeeId, updateDocument, collection, options, mongoClient)
  return results
}