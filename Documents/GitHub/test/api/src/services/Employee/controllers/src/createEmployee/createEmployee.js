/* imports */
import Employee from '../../../object/Employee.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { object } employee 
 * @returns { object }
 */
export default async function createEmployee( newDocument ) {
    try {
        const collectionName = 'employees'
        const employee = await Employee( newDocument )
        const results = await DatabaseController.insert( employee, collectionName )
        return results
    } catch ( error ) {
        return error
    }
}