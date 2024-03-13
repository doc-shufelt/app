/* imports */
import ImportConfig from '../../../config/ImportConfig.js'
import { sub, format } from 'date-fns'
/**
*
 * @description This function calls Finch's employer/payment endpoint to retrieve the most recent payment run.
 * @param { string } token The connection's secure token
 * @returns { Promise<string> } A string containing the most recent payment run id
 */
export default async function importPayment( token ) {
    try {
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.payment.endpoint
        // initialize the start and end dates for the query parameters
        const endDate = format( new Date(), 'yyyy-MM-dd' )
        const startDate = format( sub( endDate, { days: 30 } ), 'yyyy-MM-dd' )  // FIX
        const uri = endpoint + `?start_date=${ startDate }&end_date=${ endDate }`
        const options = {
            method: ImportConfig.endpoints.payment.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${ token }`  // FIX THIS - ONLY DID IT FOR TESTING
            }
        }
        const results = await fetch( uri, options )
        const payment = await results.json()
        return {
            id: payment[0].id,
            startDate: payment[0].pay_period.start_date,
            endDate: payment[0].pay_period.end_date
        }
    } catch ( error ) {
        throw new Error( error )
    }
}