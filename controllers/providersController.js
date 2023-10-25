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
 * @name validateProviders
 * @description
 * @param { array } request An array of provider objects
 * @returns 
 */
export async function validateProviders( request ) {
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
