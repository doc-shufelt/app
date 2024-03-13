/* import */
import ImportConfig from '../../../config/ImportConfig.js'
import Employer from '../../../../Employer/object/Employer.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description The controller to orchestrate importing an employer
 * @param {*} authorizationCode the finch authorization code
 * @returns { Promise<object> } A canonical 
 */
export default async function importCompany( token ) {
    try {
      const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.company.endpoint
      const options = {  // this will be the options property passed to javascript's fetch() method
          method: ImportConfig.endpoints.company.method,
          headers: {
              'Content-Type': 'application/json',
              'Finch-Api-Version': ImportConfig.apiVersion,
              'Authorization': `Bearer ${ token }`  // FIX THIS - ONLY DID IT FOR TESTING
          }
      }
      // retrieve the employer record from finch
      const results = await fetch( endpoint, options )
      // convert the raw results to a canonical employer object
      const employer = Employer( await results.json() )
      // save the new record to mongodb
      const employerDocument = await DatabaseController.insert( employer, 'employers' )
      return employerDocument
    } catch ( error ) {
      throw new Error( error ) 
    }
}