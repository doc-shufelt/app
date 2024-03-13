/* imports */
import Employer from '../../../object/Employer.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { object } employee 
 * @returns { object }
 */
export default async function createEmployer( newDocument ) {
    try {
        const collectionName = 'employers'
        const employer = Employer( newDocument )
        const results = await DatabaseController.insert( employer, collectionName )
        return results
    } catch ( error ) {
        return error
    }
}