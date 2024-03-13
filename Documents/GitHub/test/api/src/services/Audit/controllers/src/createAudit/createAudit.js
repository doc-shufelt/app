/* imports */
import Audit from '../../../object/Audit.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description This controller prepares and executes a request to edit a single mongodb audit document 
 * @param { object } updateDocument The changes to be made to the document
 * @returns { Promise<object> } A
 */
export default async function createAudit( updateDocument ) {
    try {
        const audit = await Audit( updateDocument )
        const results = await DatabaseController.insertOne( audit, 'audits' )
        return results
    } catch ( error ) {
        return error
    }
}