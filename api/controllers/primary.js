/**
 * Module: Employees Controller
 * @description This module is the controller handling all requests related to basic CRUD operations
 */

import emitter from './logger.js'
import { validateEmployees } from '../controllers/employee.js'
import { validateEmployers } from '../controllers/employer.js'
import { validateProviders } from '../controllers/provider.js'
import { validateReports } from '../controllers/report.js'
import { validateUsers } from '../controllers/user.js'
import { insert, update, find } from '../utilities/mongodb/wrapper.js'

var data
var status = 'processing'
var recordCount = 0

/**
 * @name addRecords
 * @description Controller function that orchestrates bulk inserting of new records to MongoDb
 * @param { object } request An object containing an array of records to update in MongoDb
 * @param { string } collection A string representing the name of the mongodb table to operate on
 * @returns { object } A canonical response object with an array of inserted ids in the Response <body>
 */
export async function addRecords( request, collection ) {
    var validation
    try {
        switch( collection ) {
            case 'users': 
                validation = await validateUsers( request.requests )
                break
            case 'providers':
                validation = await validateProviders( request.requests )
                break
            case 'employees':
                validation = await validateEmployees( request.requests )
                break
            case 'employers':
                validation = await validateEmployers( request.requests )
                break
            case 'reports':
                validation = await validateReports( request.requests )
                break
        }
        
        if ( validation.status === 'error' ) {
            status = 'error'
            data = validation.data
        }
    
        if ( status != 'error' ) {
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
 * @returns { object }
 */
export async function findRecords( request, collection ) {
    emitter.emit( 
        'function-invoked', 
        { 
            module: 'controller', 
            function: 'findRecords', 
            collection: collection, 
            timestamp: new Date()
        } 
    )
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
    emitter.emit( 
        'function-returned', 
        { 
            module: 'controller', 
            function: 'findRecords', 
            collection: collection, 
            status: response.status,
            recordCount: response.recordCount,
            timestamp: new Date()
        }
    )
    return response
} 