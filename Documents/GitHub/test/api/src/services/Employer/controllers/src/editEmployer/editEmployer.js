/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function editEmployer( updateDocument ) {
    try {
        const collectionName = 'employers'
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after'
        }
        const results =  await DatabaseController.update( updateDocument._id, updateDocument, collectionName, options )
        return results
    } catch ( error ) {
        console.log(error)
        return error
    }
}
