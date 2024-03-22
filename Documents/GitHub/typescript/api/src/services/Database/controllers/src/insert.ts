import { Collection, Document } from "mongodb"

/**
 * 
 * @param {object} document
 * @param {string} collectionName
 * @param {object} options 
 * @param {object} mongoClient
 * @returns {Promise<string>}
 */
export default async function insert(document: object, table: string, options: object, mongoClient: MongoClient): Promise<string> {
  const collection: Collection<Document> = await mongoClient.db('bluebird').collection(collectionName)
  const results: InsertOneResult<Document>  = await collection.insertOne(document, options)
  return results.insertedId.toString()
}