/* imports */
import {
  mongo
} from 'mongoose'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function createEmployeeBulk(documents:array, mongoClient: MongoClient): Promise<array> {
  const collection = 'employees'
  const employees: object[] = []
  const results: array = await DatabaseController.insertBulk(documents, collection, {}, mongoClient)
  for (let employeeId: string of Object.values(results.insertedIds): string) {
    const record: object = await DatabaseController.findById(employeeId.toString(), 'employees', {}, mongoClient)
    employees.push(record)
  }
  return employees
}