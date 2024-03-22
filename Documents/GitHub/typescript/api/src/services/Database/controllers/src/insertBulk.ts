/**
 * 
 * @param { array } documents
 * @param { string } collectionName
 * @param { object } options 
 * @returns { Promise<array> }
 */
export default async function insertBulk(documents, collectionName, options, mongoClient) {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const results = await collection.insertMany(documents, options)
  return results
}