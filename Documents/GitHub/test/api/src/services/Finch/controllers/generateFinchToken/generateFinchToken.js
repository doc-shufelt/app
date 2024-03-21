import FinchConfig from '../../config/FinchConfig.js'
/**
 * @description A controller responsible for converting a finch authorization code to a token using /auth/token
 * @param {string} authorizationCode The finch authorization code returned from Finch Connect to our redirect url
 * @returns {Promise<object>} The finch long term api token object
 */
export default async function generateFinchToken(authorizationCode) {
  const endpoint = FinchConfig.baseUrl + FinchConfig.endpoints.token.endpoint
  const options = {
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
  const results = await fetch(endpoint, options)
  return results.json()
}