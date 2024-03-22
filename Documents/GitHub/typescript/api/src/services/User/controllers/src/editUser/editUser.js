import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
/**
 * @description
 * @param { object } updateDocument 
 * @param {object} mongoClient
 * @returns { Promise<object> }
 */
export default async function editUser(updateDocument, mongoClient) {
  const collection = 'users'
  const options = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const results = await DatabaseController.update(updateDocument._id, updateDocument, collection, options, mongoClient)
  return results
}