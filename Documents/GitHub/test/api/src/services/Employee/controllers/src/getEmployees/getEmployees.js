/* imports */
import Employee from '../../../object/Employee.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description find employees that match the filters criteria
 * @param { Array<object> } filters an array of filter objects
 * @returns { array } an array of employee objects that match the filter criteria
 */
export default async function getEmployees( filters ) {
    try {
        const collectionName = 'employees'
        const projection = {
                originalValue: true,
                originalSource: true,
                pastValues: true,
                pastSources: true,
                flagged: true,
                flags: true,
                created: true,
                modified: true
        }
        const results = await DatabaseController.findByFilters( filters, collectionName, projection )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}