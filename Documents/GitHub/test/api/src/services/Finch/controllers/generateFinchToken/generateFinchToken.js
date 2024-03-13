import FinchConfig from '../../config/FinchConfig.js'
/**
 * @description A controller responsible for converting a finch authorization code to a token
 * @param { string } authorizationCode The finch authorization code returned from Finch Connect to our redirect url
 * @returns { Promise<object> } The finch permanent api token
 */
export default async function generateFinchToken( authorizationCode ) {
    try {
        const endpoint = FinchConfig.baseUrl + FinchConfig.endpoints.token.endpoint
        const options = {  // this will be the options property passed to javascript's fetch() method
            method: FinchConfig.endpoints.token.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': FinchConfig.apiVersion
            },
            body: JSON.stringify({
                client_id: process.env.FINCH_CLIENT_ID,
                client_secret: process.env.FINCH_CLIENT_SECRET,
                code: authorizationCode,
                redirect_uri: FinchConfig.redirectUri.development,
                sandbox: true
            })
        }
        const results = await fetch( endpoint, options )
        if ( results instanceof Error ) {
            throw new Error(results.stack)
        }
        return results.json()
    } catch ( error ) {
        console.log( error )
        return error
    }
}