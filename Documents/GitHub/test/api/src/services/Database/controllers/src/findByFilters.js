/* imports */
import connectToDatabase from '../../../../utilities/database.js'

/**
 * @description
 * @param { object } filters 
 * @param { string } collectionName
 * @param { object } options 
 * @returns { Promise<object> }
 */
export default async function findByFilters( filters, collectionName, projection ) {
    try {
        const database = await connectToDatabase()
        const collection = await database.collection( collectionName )
        const results = await collection.find( filters ).project( projection )
        return results.toArray()
    } catch ( error ) {
        console.log(error)
        return error
    }
}