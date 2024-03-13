/* imports */
import Employee from '../../../object/Employee.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import { ObjectId } from 'mongodb'

export default async function delegateEmployeeAccess( employeeId ) {
    try {
        const collectionName = 'employees'
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after'
        }
        const updateDocument = { delegated: true }
        const results = await DatabaseController.update( employeeId, updateDocument, collectionName, options )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}