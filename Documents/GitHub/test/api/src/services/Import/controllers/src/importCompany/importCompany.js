/* import */
import ImportConfig from '../../../config/ImportConfig.js'
import Employer from '../../../../Employer/object/Employer.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description The controller to orchestrate importing an employer
 * @param {*} token the finch long term auth token
 * @returns { Promise<object> } A canonical 
 */
export default async function importCompany(token, mongoClient) {
  const collection = 'employers'
  const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.company.endpoint
  const options = { // this will be the options property passed to javascript's fetch() method
    method: ImportConfig.endpoints.company.method,
    headers: {
      'Content-Type': 'application/json',
      'Finch-Api-Version': ImportConfig.apiVersion,
      'Authorization': `Bearer ${ token }`
    }
  }
  const results = await fetch(endpoint, options)
  const employer = await Employer(await results.json())
  const employerId = await DatabaseController.insert(employer, collection, {}, mongoClient)
  return employerId
}