import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function getUsers( filters ) {
    try {
        const collectionName = 'users'
        const projection = {
                firstName: true,
                lastName: true,
                emailAddress: true,
                lastLogin: true,
                role: true,
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