/* imports */
import ImportConfig from '../../../config/ImportConfig.js' 
import ImportController from '../../ImportController.js'

/**
 * 
 * @param { string } finchPaymentId the stable id for the finch payment
 * @param { Promise<string> } token 
 * @returns 
 */
export default async function importStatement( paymentId, token ) {
    try {
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.statement.endpoint
        const request = [ { payment_id: paymentId } ]
        // define the https request parameters
        const options = {
            method: ImportConfig.endpoints.statement.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${ token }`
            },
            body: JSON.stringify( { requests: request } ),
        }
        const results = await fetch( endpoint, options )
        const statement = await results.json()
        const statements = await ImportController.processStatement( statement.responses[0].body.pay_statements )
        return statements
    } catch ( error ) {
        throw new Error( error )
    }
}