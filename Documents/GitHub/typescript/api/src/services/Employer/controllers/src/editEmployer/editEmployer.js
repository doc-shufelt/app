/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

export default async function editEmployer(updateDocument, mongoClient) {
  const collectionName = 'employers'
  const options = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const results = await DatabaseController.update(updateDocument._id, updateDocument, collectionName, options, mongoClient)
  return results
}