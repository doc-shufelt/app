/**
 * Users Controller
 * 
 */
import { insert, update, find } from '../utilities/mongodb/wrapper.js'
import bcrypt from 'bcryptjs'

var data
var status = 'processing'
var recordCount = 0

/**
 * 
 * @param { object } users 
 */
export async function validateUsers( users ) {
    var data
    var status = 'processing'
    var error = {}
    try {
        for ( const user of users ) {
            if ( ! user.hasOwnProperty( 'firstName' ) || user.firstName === undefined || user.firstName === null ) {
                status = 'error'
                error =  {
                    message: 'The request must have a first name property.'
                } 
                break
            }
            if ( ! user.hasOwnProperty( 'lastName' ) || user.lastName === undefined || user.lastName === null ) {
                status = 'error'
                error = {
                    message: 'The request must have a last name property.'
                }
                break
            }
            if ( ! user.hasOwnProperty( 'email' ) || user.email === undefined || user.email === null ) {
                status = 'error'
                error = {
                    message: 'The request must have an email property.'
                }
                break
            }
        }
        if ( status === 'error' ) {
            data = error
        } else {
            status = 'success'
            data = null
        }
    } catch ( error ) {
        return error
    }
    
    const response = {
        status: status,
        data: data
    }
    return response
}