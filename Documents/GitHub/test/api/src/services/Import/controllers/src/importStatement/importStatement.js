/* imports */
import ImportConfig from '../../../config/ImportConfig.js'
import ImportController from '../../ImportController.js'

/**
 * 
 * @param {paymentId} paymentId the stable id for the finch payment
 * @param {string} token 
 * @returns {Promise<array>}
 */
export default async function importStatement(paymentId, token) {
  const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.statement.endpoint
  const request = [{
    payment_id: paymentId
  }]
  const options = {
    method: ImportConfig.endpoints.statement.method,
    headers: {
      'Content-Type': 'application/json',
      'Finch-Api-Version': ImportConfig.apiVersion,
      'Authorization': `Bearer ${ token }`
    },
    body: JSON.stringify({
      requests: request
    }),
  }
  const results = await fetch(endpoint, options)
  const finchStatements = await results.json()
  const statements = await ImportController.processStatement(finchStatements.responses[0].body.pay_statements)
  return statements
}