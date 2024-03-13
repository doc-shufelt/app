import crypto from 'crypto'
/**
 * @description This function encrypts the finch api token prior to saving to mongodb
 * @param { string } rawToken The raw token returned from generateFinchToken
 * @returns { Promise<object> } An object containing the initialization vector and encrypted token
 */
export default async function encryptToken( rawToken ) {
    try {
        const algorithm = process.env.ENCRYPTION_ALGORITHM
        const key = process.env.ENCRYPTION_PRIVATE_KEY
        const initializationVector = crypto.randomBytes( 12 ).toString( 'base64' )
        const cipher = crypto.createCipheriv( algorithm, key, initializationVector )

        let encryptedToken = cipher.update( rawToken, 'utf-8', 'hex' )
        encryptedToken += cipher.final( 'hex' )

        const tag = cipher.getAuthTag().toString( 'hex' )
        const tokenObject = { 
            initializationVector: initializationVector, 
            encryptedToken: encryptedToken,
            authenticationTag: tag
        }
        return tokenObject
    } catch ( error ) {
        return error.stack
    }
}