/* imports */
import ImportConfig from '../../../config/ImportConfig.js'

/**
 * @description this method executes the import from /directory endpoint
 * @param {string} token the finch long term auth token 
 * @returns {Promise<array>} an arry of employee objects from /directory endpoint
 */
export default async function importDirectory(token) {
  var employeeList = []
  const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.directory.endpoint
  const options = {
    method: ImportConfig.endpoints.directory.method,
    headers: {
      'Content-Type': 'application/json',
      'Finch-Api-Version': ImportConfig.apiVersion,
      'Authorization': `Bearer ${ token }`
    }
  }
  const results = await fetch(endpoint, options)
  const directory = await results.json()
  // select and clean the names of the properties we need from this endpoint
  for (let individual of directory.individuals) {
    let employee = {
      id: individual.id,
      firstName: individual.first_name,
      middleName: individual.middle_name,
      lastName: individual.last_name,
      active: individual.is_active
    }
    employeeList.push(employee)
  }
  return employeeList
}