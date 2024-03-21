/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import EmployeeConfig from '../../../config/EmployeeConfig.js'

export default async function getEmployeeById(employeeId, mongoClient, logger) {
  const collection = 'employees'
  logger.info('executing', {
    message: 'executing getEmployeesById',
    id: employeeId
  })
  const results = await DatabaseController.findById(employeeId, collection, {}, mongoClient)
  return results
}