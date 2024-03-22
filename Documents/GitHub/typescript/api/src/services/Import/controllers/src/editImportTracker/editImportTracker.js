import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
/**
 * 
 * @param {string} importTrackerId 
 * @param {object} updateDocument 
 * @param {object} mongoClient the singleton instance of mongodb
 * @returns { Promise<object> }
 */
export default async function editImportTracker(importTrackerId, updateDocument, mongoClient) {
  const collection = 'imports'
  const options = {
    upsert: false,
    returnNewDocument: true,
    returnDocument: 'after'
  }
  const results = await DatabaseController.update(importTrackerId, updateDocument, collection, options, mongoClient)
  return results
}