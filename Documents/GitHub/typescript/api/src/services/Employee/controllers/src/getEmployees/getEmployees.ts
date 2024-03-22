import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import EmployeeConfig from '../../../config/EmployeeConfig.js'

export default async function getEmployees(filters: object, mongoClient: MongoClient): Promise<array> {
  if (!filters typeof object) {
    throw new Error('there was an error.')
  }
  const results: object = await DatabaseController.findByFilters(filters, EmployeeConfig.collection, {}, mongoClient)
  return results
}