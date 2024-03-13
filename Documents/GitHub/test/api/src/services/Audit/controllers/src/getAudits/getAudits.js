/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { object } filters 
 * @returns { Promise<array> }
 */
export default async function getAudits( filters ) {
    try {
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
        const results = await DatabaseController.findByFilters( filters, 'audits', projection )
        return results
    } catch ( error ) {
        return error
    }    
}