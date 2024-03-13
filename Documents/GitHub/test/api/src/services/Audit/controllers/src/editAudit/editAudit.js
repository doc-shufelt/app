/* imports */
import Audit from '../../../object/Audit.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description This controller prepares and executes a request to edit a single mongodb audit document 
 * @param { object } updateDocument The changes to be made to the document
 * @returns { Promise<object> } A
 */
export default async function editAudit( updateDocument ) {
    try {
        if ( ! updateDocument.hasOwnProperty( '_id' ) ) {
            throw new Error('no _id')
        }
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after',
            projection: {
                originalValue: true,
                originalSource: true,
                pastValues: true,
                pastSources: true,
                flagged: true,
                flags: true,
                created: true,
                modified: true
            }
        }
        const results = await DatabaseController.update( updateDocument, options )
        return results
    } catch ( error ) {
        return error
    }
}