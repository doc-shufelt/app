/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { string } _id 
 * @returns { Promise<object> }
 */
export default function getEmployerById( id ) {
    try {
        // do some validation here
        // - valid id
        const collectionName = 'employers'
        const results = DatabaseController.findById( id, collectionName )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}