/* imports */
import EmployeeController from '../../../controllers/EmployeeController.js'

export default async function delegateEmployeeAccess(employeeId) {
  const collectionName = 'employees'
  const options = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const updateDocument = {
    delegated: true
  }
  const results = await EmployeeController.editEmployee(employeeId, updateDocument, collectionName, options)
  return results
}