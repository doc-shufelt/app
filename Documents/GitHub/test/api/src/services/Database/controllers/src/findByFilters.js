/**
 * @description
 * @param { object } filters 
 * @param { string } collectionName
 * @param { object } options 
 * @returns { Promise<object> }
 */
export default async function findByFilters(filters, collectionName, projection, mongoClient) {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const results = await collection.find(filters).project(projection)
  return results.toArray()
}