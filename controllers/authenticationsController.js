/**
 *   Authorization Controller
 */
import bcrypt from 'bcryptjs'
import { findRecords } from '../controllers/controller.js'

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
    // TO-DO: Finish this implementation
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
    let collection = 'users'
    if ( request.username === undefined || request.username === null ) {
        return {
            status: 'error',
            message: 'The request must provide a username.'
        }
    }
    if ( request.password === undefined || request.password === null ) {
        return {
            status: 'error',
            message: 'The request must provide a password.'
        }
    }
    const params = request.username 
    const results = await findRecords( params, collection )
    if ( results ) {
        const hash = results.data[0].passwordHash  // findUsers returns an array of matches; here we know that there can only be one
        const authorize = await bcrypt.compare(request.password, hash)
        if ( authorize ) {
            data = results.data[0]
            recordCount = results.recordCount
            status = 'success'
        } else {
            const error = {
                status: 'error',
                type: 'Authentication error',
                message: 'The username or password was incorrect.'
            }
            data = error
            status = 'error'
        }
    } else {
        const error = {
            status: 'error',
            name: 'Authentication error',
            message: 'The username or password was incorrect.'
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