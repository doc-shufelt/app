import Connection from '../../../../Connection/object/Connection.js'
import TokenController from '../../../../Token/controllers/TokenController.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function saveConnection( employerId, token ) {
    try {
        const encryptedToken = await TokenController.encryptToken( token )
        console.log(encryptedToken)
        const connection = await Connection({
            employerId: employerId,
            encryptedToken: encryptedToken.encryptedToken,
            initializationVector: encryptedToken.initializationVector,
            authenticationTag: encryptedToken.authenticationTag
        })
        const connectionDocument = await DatabaseController.insert( connection, 'connections' )
        return connectionDocument
    } catch ( error ) {
        console.log( error )
        return error
    }
}