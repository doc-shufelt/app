/**
 * Module: Providers Controller
 * @description This module is the controller handling all requests related to employee records
 */
import { insert, update, find } from '../utilities/mongodb/wrapper.js'
import emitter from '../controllers/loggerController.js'

var data
var status = 'processing'
var recordCount = 0

/**
 * @name addProviders
 * @description Controller function that orchestrates bulk inserting of new employee records to MongoDb
 * @param { object } employees An object containing an array of employee objects to update in MongoDb
 * @returns { object } A canonical response object with an array of inserted ids in the Response <body>
 */
export async function addProviders( request ) {
    try {
        let validation = await validateProviders( request )
        if ( validation.status === 'error' ) {
            const error = {
                name: 'Employee validation error',
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
    }
    if ( status != 'error' ) {
        try {
            const params = {
                collection: 'providers',
                requests: request.requests
            }
            const results = await insert( params )
            if ( results.status === 'error' ) {
                status = 'error'
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
    var response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return response
} 

/**
 * @name editEmployees
 * @description Controller function that orchestrates bulk editing of employee records to MongoDb
 * @param { object } employees An object containing an array of employee objects to write to MongoDb
 * @return { object } A canonical response object with an array of edited ids in the Response <body>
 */
export async function editProviders( request ) {
    var updated = []
    var fallout = []
    var errors 
    var counter = 0
    try {
        const validation = await validateProviders( request.requests )
        if ( validation.status === 'error' ) {
            const error = {
                name: 'Provider validation error',
                message: validation.message,
                stack: validation.data
            }
            data = error
            status = 'error'
        } else {
            for ( const object of request.requests ) {
                let params = {
                    collection: 'providers',
                    object: object,
                    filter: { _id: object._id }
                }
                const result = await update( params )
                if ( result.status === 'error') {
                    fallout.push( result.data )
                } else {
                    updated.push( result.data )
                    counter += 1
                }
            }
            if ( fallout.length > 0 ) {
                errors = fallout
            }
            data = updated
            recordCount = counter
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
    var response = {
        status: status,
        recordCount: recordCount,
        fallout: fallout,
        data: data
    }
    return response
}

/**
 * @name findProviders
 * @param { object } criteria 
 * @returns 
 */
export async function findProviders( request ) {
    try {
        const params = {
            collection: 'providers',
            criteria: request.criteria,
            options: {}
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
    var response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return response
} 

/**
 * @name validateProviders
 * @description
 * @param { array } request An array of provider objects
 * @returns 
 */
async function validateProviders( request ) {
    let data
    let error
    let errors = []
    let status = 'processing'
    try {
        if ( ! Array.isArray( request.requests )) {
            return error = {
                name: 'Provider validation error',
                message: 'The function must be passed an array of provider objects.'
            }
        }
        if ( request.requests.length < 1 ) {
            return error = {
                name: 'Provider validation error',
                message: 'The input array must have at least one element.'
            }
        }
        request.requests.forEach( ( request ) => {
            if ( ! request.hasOwnProperty( 'name' )) {
                errors.push('The request must provide a name property')
            }
            if ( errors.length > 0 ) {  // return after the first employee that fails validation
                error =  {
                    name: 'Provider validation error',
                    errors: errors,
                    offender: request
                }
                return response = {
                    status: 'error',
                    data: error
                }
            }
        }) // end foreach
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
        data: data
    }
    return response
}
