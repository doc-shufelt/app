/* imports */
import connectToDatabase from '../../../../utilities/database.js'
import {
  ObjectId
} from 'mongodb'

/**
 * @description
 * @param { string } documentId 
 * @param { string } collection 
 * @param { object } options 
 * @returns { Promise<object> }
 */
export default async function findById(documentId, collectionName, projection, mongoClient) {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const filterById = {
    "_id": new ObjectId(documentId)
  }
  const results = await collection.findOne(filterById, projection)
  return results
}