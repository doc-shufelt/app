/**
 * Module: Employees Controller
 * @description This module is the controller handling all requests related to basic CRUD operations
 */

import emitter from '../controllers/loggerController.js'
import { validateEmployees } from '../controllers/employeesController.js'
import { insert, update, find } from '../utilities/mongodb/wrapper.js'

var data
var status = 'processing'
var recordCount = 0

/**
 * @name addRecords
 * @description Controller function that orchestrates bulk inserting of new records to MongoDb
 * @param { object } request An object containing an array of objects to update in MongoDb
 * @param { string } collection A string representing the name of the resource being requested
 * @returns { object } A canonical response object with an array of inserted ids in the Response <body>
 */
export async function addRecords( request, collection ) {
    console.log(request)
   /* try {
        const validation = await validateRequest( request )
        if ( validation.status === 'error' ) {
            const error = {
                name: request.resource + ' validation error',
                message: validation.message,
                stack: validation.body
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
    } */
    if ( status != 'error' ) {
        try {
            const params = {
                requests: request.requests,
                collection: collection
            }
            const results = await insert( params )
            if ( results.status === 'error' ) {
                status = 'error'
                data = results.data
                recordCount = results.recordCount
            } else {
                status = 'success'
                data = results.data
                recordCount = results.recordCount
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
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return response
} 

/**
 * @name editRecords
 * @description Controller function that orchestrates bulk editing of employee records to MongoDb
 * @param { object } employees An object containing an array of employee objects to write to MongoDb
 * @return { object } A canonical response object with an array of edited ids in the Response <body>
 */
export async function editRecords( request, collection ) {
    var updated = []
    var fallout = []
    var errors
    try {
        const validation = { status: 'success' }
        if ( validation.status === 'error' ) {
            const error = {
                name: collection + ' validation error',
                message: validation.message,
                stack: validation.data
            }
            data = error
            status = 'error'
        } else {
            for ( const object of request.requests ) {
                console.log(request)
                let params = {
                    collection: collection,
                    object: object,
                    filter: { _id: object._id }
                }
                const result = await update( params )
                if ( result.status === 'error') {
                    fallout.push( result.data )
                } else {
                    updated.push( result.data )
                    recordCount += 1
                }
            }
            if ( fallout.length > 0 ) {
                errors = fallout
            }
            data = updated
            status = 'success'
        }  
    }  catch ( e ) {
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
        fallout: errors,
        data: data
    }
    return response
}

/**
 * @name findRecords
 * @param { object } criteria 
 * @returns 
 */
export async function findRecords( request, collection ) {
    try {
        const params = {
            collection: collection,
            criteria: request
        }
        const results = await find( params )
        if ( results.status === 'error' ) {
            status = 'error'
            data = results.data
        } else {
            status = 'success'
            data = results.data
            recordCount = data.length
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
        recordCount: recordCount,
        data: data
    }
    return response
} 