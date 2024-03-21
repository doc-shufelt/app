/* imports */
import ImportConfig from '../../../config/ImportConfig.js'

/**
 * 
 * @param { object } directory 
 * @param { string } token 
 * @returns 
 */
export default async function importIndividual(token, directory) {
  const employeeList = [] // an array to hold the collection of cleaned employee records
  const directoryIds = [] // need to format the employeeList to conform to the request body requirements
  for (const employee of directory) {
    directoryIds.push({
      individual_id: employee.id
    })
  }
  const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.individual.endpoint
  const options = { // this will be the options property passed to javascript's fetch() method
    method: ImportConfig.endpoints.individual.method,
    headers: {
      'Content-Type': 'application/json',
      'Finch-Api-Version': ImportConfig.apiVersion,
      'Authorization': `Bearer ${ token }`
    },
    body: JSON.stringify({
      requests: directoryIds
    }, {
      include: 'ssn'
    }),
  }
  const results = await fetch(endpoint, options)
  const individuals = await results.json()

  for (let individual of individuals.responses) {
    let employee = {
      id: individual.body.id,
      emailAddress: individual.body.emails[0].data ?? null,
      phoneNumber: individual.body.phone_numbers[0].data ?? null,
      addressOne: individual.body.residence.line1,
      addressTwo: individual.body.residence.line2,
      city: individual.body.residence.city,
      state: individual.body.residence.state,
      postalCode: individual.body.residence.postal_code,
      gender: individual.body.gender,
      ethnicity: individual.body.ethnicity,
      dateOfBirth: individual.body.dob,
      ssn: individual.body.ssn
    }
    employeeList.push(employee)
  }
  return employeeList // array of objects
}