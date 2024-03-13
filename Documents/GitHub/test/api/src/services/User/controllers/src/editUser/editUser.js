import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
/**
 * @description
 * @param { object } User 
 * @returns { Promise<object> }
 */
export default async function editUser( updateDocument ) {
    try {
        const collectionName = 'users'
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