/**
 *   MongoDb function wrappers
 */
import { connectToMongoDb } from '../mongodb/database.js'
import { ObjectId } from 'mongodb'

let data
let status = 'processing'
let recordCount = 0

/**
 * @name insert
 * @description A batch insert function wrapping MongoDb's insertMany() function
 * @param { object } objects An object with a <requests> parameter containing an array of objects to insert
 * @returns  { object } A canonical response object with an array of inserted ids in the Response <body>
 */
export async function insert( request ) { 
    var insertedList = []
    try {
        const connection = await connectToDatabase( request.collection )
        const results = await connection.insertMany( request.requests ) 
        const ids = Object.values( results.insertedIds )
        for ( const id of ids ) {  // insertMany() returns only the ObjectId() so we find() the record(s) we just inserted to return
            const inserted = await connection.findOne( { "_id": new ObjectId( id ) } )
            insertedList.push( inserted )
        }
        data = insertedList
        recordCount = results.insertedCount
        status = 'success'
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return response
}

/**
 * @name update
 * @description 
 * @param { array } filter 
 * @param { object } employee 
 * @returns 
 */
export async function update( request ) {
    var data
    var status = 'processing'
    var results
    try {
        const connection = await connectToDatabase( request.collection )
        if ( ( request.filter.hasOwnProperty('_id') && (request.filter._id != undefined ) )) {
            let objectId = request.filter._id
            delete request.object._id // remove the _id from the object before updating to avoid the Mongodb immutable _id error
            results = await connection.findOneAndUpdate( { "_id": new ObjectId( objectId )} , 
                                                         { $set: request.object },
                                                         { returnDocument: 'after' } )
            data = results
            status = 'success'
        } else {
            const error = {
                error: 'Malformed request error',
                message: 'Updating requires that an _id property is provided',
                record: request.object
            }
            data = error
            status = 'error'
        }
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
    }
    const response = {
        status: status,
        data: data
    }
    return response
}

/**
 * @name find
 * @description 
 * @param { object } criteria An object containing an array of key-value pairs describing the filters
 * @returns { object } A canonical response object 
 */
export async function find( request ) {
    var data
    var status = 'processing'
    var recordCount = 0
    try {
        const connection = await connectToDatabase( request.collection )
        if ( request.criteria.hasOwnProperty('_id') ) {
            let employeeId = request.criteria._id
            const results = await connection.findOne( { "_id": new ObjectId(employeeId) } )
            data = results
            status = 'success'
        } else {
            const results = await connection.find( request.criteria, request.options )
            data = await results.toArray() // MongoDb returns a Cursor object so we need to use toArray() here
            recordCount = data.length
            status = 'success'
        }
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
    }
    var response = {
            status: status,
            recordCount: recordCount,
            data: data
        }
    return response
}

/**
 * 
 * @param { collection } collection 
 * @returns { object } A database connection object
 */
async function connectToDatabase( collection ) {
    var client
    var database
    var connection
    try {
        client = await connectToMongoDb()
        database = client.db('bluebird')
        connection = database.collection( collection )
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        return error
    }
    return connection
}