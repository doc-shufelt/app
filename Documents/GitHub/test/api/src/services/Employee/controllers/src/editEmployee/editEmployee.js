/* imports */
import Employee from '../../../object/Employee.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
/**
 * 
 * @param { object } employee 
 * @returns { Promise<object> }
 */
export default async function updateEmployee( employee ) {
    try {
        const collectionName = 'employees'
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after'
        }
        const updateDocument = { delegated: true }
        const results =  await DatabaseController.update( employee._id, updateDocument, collectionName, options )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}