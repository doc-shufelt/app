/* imports */
import { ObjectId } from 'mongodb'
import connectToDatabase from '../../../../utilities/database.js'

/**
 * @description
 * @param { string } documentId 
 * @param { string } collection 
 * @param { object } options 
 * @returns { Promise<object> }
 */
export default async function findById( documentId, collectionName, projection ) {
    try {
        const database = await connectToDatabase()
        const collection = await database.collection( collectionName )
        const filterById = { '_id': new ObjectId( documentId ) }
        const results = await collection.find( filterById ).project( projection )
        return results.toArray()
    } catch ( error ) {
        return error
    }
}