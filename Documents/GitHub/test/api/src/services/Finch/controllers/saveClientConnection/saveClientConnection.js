/**
 * 
 * @param { object } encryptedToken An object containing string the encrypted token and initialization vector.
 * @param { string } employerId The string representation of the mongodb _id for the employer.
 * @returns { Promise<array> } A promise 
 */
export default async function saveClientConnection( encryptedToken, employerId ) {
    try {
        // set the mongodb collection
        const collection = 'connections'
        // construct an object representing the connection
        const record = {
            employerId: employerId.toString(),
            encryptedToken: encryptedToken.encryptedToken,
            initializationVector: encryptedToken.initializationVector,
            authenticationTag: encryptedToken.authenticationTag,
            active: true,
            deleted: false,
            importer: 'finch', 
            provider: 'bamboohr', // figure out how we know what provider they use
            created: new Date().toISOString(),
            modified: new Date().toISOString(),
            lastUsed: new Date().toISOString()
        }
        // save the record to mongodb
        const results = await create( [ record ], collection )
        return results
    } catch ( error ) {
        return error
    }
  }