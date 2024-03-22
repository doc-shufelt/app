/* imports */
import EmployerController from '../../../../Employer/controllers/EmployerController.js'
import EmployeeController from '../../../../Employee/controllers/EmployeeController.js'
import CensusController from '../../../../Census/controllers/CensusController.js'
import UserController from '../../../../User/controllers/UserController.js'
import Census from '../../../object/Census.js'

export default async function createCensus(employerId, mongoClient) {
  const employer = await EmployerController.getEmployerById(employerId, mongoClient)
  const employees = await EmployeeController.getEmployees({
    employerId: employerId
  }, mongoClient)
  const authorizedUser = await UserController.getUserById(employer.authorizedUserId, mongoClient)
  const agent = {
    firstName: 'Ryan',
    lastName: 'McBride',
    phoneNumber: '(919)322-1234',
    emailAddress: 'ryan@bluebirdbenefits.io'
  }
  const census = await Census(employer, authorizedUser, agent, employees)
  await CensusController.createExcelReport(census)
  return census
}