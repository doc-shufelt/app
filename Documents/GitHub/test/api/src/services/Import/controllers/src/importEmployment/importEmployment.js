/* imports */
import ImportConfig from '../../../config/ImportConfig.js'

/**
 * @param {string} token
 * @param {array} directory 
 * @returns { Promise<array> }
 */
export default async function importEmployment(token, directory) {
  const employeeList = []
  const directoryIds = [] // need to format the employeeList to conform to the request body requirements
  for (const employee of directory) {
    directoryIds.push({
      individual_id: employee.id
    })
  }
  const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.employment.endpoint
  const options = { // this will be the options property passed to javascript's fetch() method
    method: ImportConfig.endpoints.employment.method,
    headers: {
      'Content-Type': 'application/json',
      'Finch-Api-Version': ImportConfig.apiVersion,
      'Authorization': `Bearer ${ token }` // FIX THIS - ONLY DID IT FOR TESTING
    },
    body: JSON.stringify({
      requests: directoryIds
    })
  }
  const results = await fetch(endpoint, options)
  const employmentData = await results.json()
  for (let individual of employmentData.responses) {
    let employee = {
      id: individual.body.id,
      jobTitle: individual.body.title,
      employmentType: individual.body.employment.type,
      employmentSubtype: individual.body.employment.subtype,
      startDate: individual.body.start_date,
      endDate: individual.body.end_date,
      classCode: individual.body.class_code,
      income: individual.body.income.amount,
      unit: individual.body.income.unit,
      currency: individual.body.income.currency
    }
    employeeList.push(employee)
  }
  return employeeList
}