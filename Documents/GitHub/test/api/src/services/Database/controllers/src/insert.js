/* imports */
import connectToDatabase from '../../../../utilities/database.js'

/**
 * 
 * @param { object } document
 * @param { string } collectionName
 * @param { object } options 
 * @returns { Promise<array> }
 */
export default async function insert( document, collectionName, options ) {
    try {
        const database = await connectToDatabase()
        const collection = await database.collection( collectionName )
        const results = await collection.insertOne( document )
        if ( results instanceof Error ) {
            throw new Error( 'there was an issue inserting the record to Mongodb.')
        }
        return results.insertedId.toString()
    } catch ( error ) {
        console.log( error )
        return error
    }
}