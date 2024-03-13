/* imports */
import connectToDatabase from '../../../../utilities/database.js'
import { ObjectId } from 'mongodb'

/**
 * 
 * @param { string } documentId 
 * @param { string } collection 
 * @param { object } options 
 * @returns { Promise<array> }
 */
export default async function update( objectId, updateDocument, collectionName, options ) {
    try {
        // connect to mongodb
        const database = await connectToDatabase()
        const collection = await database.collection( collectionName )
        // build the mongodb-specific filter format from the _id passed in the updateDocument 
        const filter = { "_id": new ObjectId( objectId ) }
        delete updateDocument._id // remove the id to avoid mongo's immutable property error
        // find and update the document
        const results = await collection.findOneAndUpdate( filter, { $set: updateDocument }, options )
        return results
    } catch ( error ) {
        console.log( error )
        return error
    }
}