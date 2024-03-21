/* imports */
import {
  mongo
} from 'mongoose'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { object } employee 
 * @returns { object }
 */
export default async function createEmployeeBulk(documents, mongoClient) {
  const collection = 'employees'
  const employees = []
  const results = await DatabaseController.insertBulk(documents, collection, {}, mongoClient)
  for (let employeeId of Object.values(results.insertedIds)) {
    const record = await DatabaseController.findById(employeeId.toString(), 'employees', {}, mongoClient)
    employees.push(record)
  }
  return employees
}