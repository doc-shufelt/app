/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * 
 * @param { string } id 
 * @returns { Promise<object> }
 */
export default async function getEmployeeById( id ) {
    try {
        const collectionName = 'employees'
        const results = await DatabaseController.findById( id, collectionName )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}