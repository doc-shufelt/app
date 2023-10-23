/**
 *   Authorization Controller
 */
import bcrypt from 'bcrypt'
import { findUsers } from './usersController.js'

var data
var status = 'processing'
var recordCount = 0

/**
 * @description
 * @param { object }
 * @returns { object }
 */
export async function createToken() {
    return {
        status: 'success',
        recordCount: 0,
        data: {
            name: 'Token Created'
        }
    }
}

/**
 * @description This function handles validating the authenticity of an API token
 * @param { object } request 
 * @returns { object }
 */
export async function validateToken( request ) {
    return {
        status: 'success',
        recordCount: 0,
        data: {
            name: 'Token Retrieved'
        }
    }
}

/**
 * @name authenticateLogin
 * @description This function handles authenticating a login request from /login
 * @param { object } request
 * @returns { object } A canonical Response object
 */
export async function authenticateLogin( request ) {
    const params = {
        criteria:{ emailAddress: request.requests.username }
    }
    const results = await findUsers( params )
    if ( results ) {
        const hash = results.data[0].passwordHash  // findUsers returns an array of matches; here we know that there can only be one
        const authorize = await bcrypt.compare(request.requests.password, hash)
        if ( authorize ) {
            data = results.data[0]
            recordCount = results.recordCount
            status = 'success'
        } else {
            const error = {
                name: 'Authentication error',
                message: 'The username or password was incorrect.'
            }
            data = error
            status = 'error'
        }
    } else {
        const error = {
            name: 'Username not found error',
            message: 'The username provided could not be found.'
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