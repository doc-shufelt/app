/* imports */
import {
  ObjectId
} from 'mongodb'

/**
 * 
 * @param { string } documentId 
 * @param { string } collection 
 * @param { object } options 
 * @returns { Promise<array> }
 */
export default async function update(objectId, updateDocument, collectionName, options, mongoClient) {
  const collection = await mongoClient.db('bluebird').collection(collectionName)
  const filter = {
    "_id": new ObjectId(objectId)
  } // build the mongodb-specific filter format from the _id passed in the updateDocument 
  delete updateDocument._id // remove the id to avoid mongo's immutable property error
  const results = await collection.findOneAndUpdate(filter, {
    $set: updateDocument
  }, options)
  return results
}