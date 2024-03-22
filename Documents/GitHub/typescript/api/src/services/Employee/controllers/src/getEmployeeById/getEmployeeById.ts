/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import EmployeeConfig from '../../../config/EmployeeConfig.js'

export default async function getEmployeeById(employeeId: string, mongoClient: object, logger: object): Promise<object> {
  const collection: string = 'employees'
  logger.info('executing', {
    message: 'executing getEmployeesById',
    id: id
    
  })

  const results: object = await DatabaseController.findById(id, collection, {}, mongoClient)
  return results
}