/* imports */
import connectToDatabase from '../../../../utilities/database.js'
import {
  ObjectId
} from 'mongodb'

export default async function findById(documentId: string, collectionName: string, projection: object, mongoClient: MongoClient): Promise<object> {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const filterById = {
    "_id": new ObjectId(documentId)
  }
  const results = await collection.findOne(filterById, projection)
  return results
}