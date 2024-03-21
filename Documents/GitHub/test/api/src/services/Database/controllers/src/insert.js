/**
 * 
 * @param {object} document
 * @param {string} collectionName
 * @param {object} options 
 * @param {object} mongoClient
 * @returns {Promise<string>}
 */
export default async function insert(document, collectionName, options, mongoClient) {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const results = await collection.insertOne(document, options)
  return results.insertedId.toString()
}