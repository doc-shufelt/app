/**
 * Module: Employees Controller
 * @description This module is the controller handling all requests related to employee records
 */
// import { insert, update, find } from '../models/employeeModel.js'
import { sendHttpRequest } from '../../import/finch/utilities/http.js'

var data
var status = 'processing'
var error = {}

/**
 * @name validateEmployees
 * @description
 * @param { array } employees An array of employee objects
 * @returns 
 */
export async function validateEmployees( employees ) {
    console.log('validation')
    console.log(employees.data)
    try {
        const regexSpecialCharacters = new RegExp(/[!@#$%^&*()\+={}[\]:;"<>.?\/|\\]/)
        const regexEmailValidation = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
        
        for ( const employee of employees.data ) {
            if ( ! employee.hasOwnProperty( 'finchId' ) ) {
                status = 'error'
                error = {
                    message: 'The employee must include a finchId property.'
                }
                break
            }
            if ( ! employee.hasOwnProperty( 'firstName' ) ) {
                status = 'error'
                error = {
                    message: 'The request must include a firstName property.'
                }
                break
            } 
            if ( employee.firstName.length < 2 || employee.firstName.length > 20 ) {
                status = 'error'
                error = {
                    message: 'The first name must be between 2 and 20 characters.'
                }
                break
            }
            /*  NEED TO FIX - firstName = Dillon (remote)
            if ( regexSpecialCharacters.test( employee.firstName ) ) {
                status = 'error'
                error = {
                    message: 'The first name cannot contain special characters.'
                }
                break
            }
            */
            if ( ! employee.hasOwnProperty( 'lastName' ) ) {
                status = 'error'
                error = {
                    message: 'The request must include a lastName property.'
                }
                break
            }
            if ( employee.lastName.length < 2 || employee.lastName.length > 30 ) {
                status = 'error'
                error - {
                    message: 'The last name must be between 2 and 30 characters.'
                }
                break
            }
            if ( regexSpecialCharacters.test( employee.lastName ) ) {
                status = 'error'
                error = {
                    message: 'The last name cannot contain special characters.'
                }
                break
            }
            if ( ! employee.hasOwnProperty( 'email' ) ) {
                status = 'error'
                error = {
                    message: 'The request must include an email property.'
                }
                break
            }
            if ( ! regexEmailValidation.test( employee.email ) ) {
                status = 'error'
                error = {
                    message: 'The email provided is not a valid input.'
                }
                break
            }
            if ( ! employee.hasOwnProperty( 'employerId' ) ) {
                status = 'error'
                error = {
                    message: 'The employee must have an employerId.'
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

    } catch ( e ) {
        error = {
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