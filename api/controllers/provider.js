/**
 * Module: Providers Controller
 * @description This module is the controller handling all requests related to employee records
 */
import { sendHttpRequest } from '../../import/finch/utilities/http.js'
import emitter from './logger.js'

var data
var status = 'processing'
var recordCount = 0
var error

/**
 * @name validateProviders
 * @description This function iterates through an array of provider objects and validates the inputs
 * @param { array } providers An array of provider objects
 * @returns { object } The canonical Response object
 */
export async function validateProviders( providers ) {
    const automationEnum = [ 'automated', 'assisted', 'none' ]
    const statusEnum = [ 'active', 'closed', 'pending' ]
    try {
        for ( const provider of providers ) {
            if ( ! provider.hasOwnProperty( 'name ' ) ) {
                status = 'error'
                error = {
                    message: 'The provider must include a name property.'
                }
                break
            }
            if ( ! provider.hasOwnProperty( 'status' ) ) {
                status = 'error'
                error = {
                    message: 'The provider must include a status property.'
                }
                break
            }
            if ( ! statusEnum.includes( provider.status ) ) {
                status = 'error'
                error = {
                    message: 'The status provided is not a valid option [active, closed, pending].'
                }
                break
            }
            if ( ! provider.hasOwnProperty( 'automation' ) ) {
                status = 'error'
                error = {
                    message: 'The provider must include an automation property.'
                }
                break
            }
            if ( ! automationEnum.includes( provider.automation ) ) {
                status = 'error'
                error = {
                    message: 'The automation value provided is not valid [automated, assisted, none].'
                }
                break
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
        data: data
    }
    return response
}

export async function getFinchProviderContext( provider ) {
    try {
        const params = {
            method: 'get',
            resource: 'providers',
        }
        const results = await sendHttpRequest( params )
        data = results.data
        status = 'success'
        recordCount = results.recordCount
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return response
}
