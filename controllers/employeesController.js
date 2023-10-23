/**
 * Module: Employees Controller
 * @description This module is the controller handling all requests related to employee records
 */
// import { insert, update, find } from '../models/employeeModel.js'
import { sendHttpRequest } from '../utilities/http/http.js'

var data
var status = 'processing'
var recordCount = 0
var response



/**
 * @name validateEmployees
 * @description
 * @param { array } employees An array of employee objects
 * @returns 
 */
export async function validateEmployees( request ) {
    let data
    let error
    let errors = []
    let status = 'processing'
    try {
        if ( ! Array.isArray( request.requests )) {
            return error = {
                name: 'Employee validation error',
                message: 'The function must be passed an array of employee objects.'
            }
        }
        if ( request.requests.length < 1 ) {
            return error = {
                name: 'Employee validation error',
                message: 'The input array must have at least one element.'
            }
        }
        request.requests.forEach( ( request ) => {
            if ( ! request.hasOwnProperty( 'finchId' )) {
                errors.push('The request must provide a Finch Id property')
            }
            if ( ! request.hasOwnProperty( 'firstName' ) ) {
                errors.push('The request must provide a first name property.')
            } else {
                if ( request.firstName.length < 2 ) {
                    errors.push('The First Name property must have at least 2 characters')
                }
                if ( request.firstName.length > 35 ) {
                    errors.push('The First Name property must have fewer than 35 characters')
                }
            }
            if ( ! request.hasOwnProperty( 'lastName' )) {
                errors.push( 'The request must contain a Last Name property' )
            } else {
                if ( request.lastName.length < 2 ) {
                    errors.push( 'The Last Name must have 2 or more characters ')
                }
                if ( request.lastName.length > 35 ) {
                    errors.push( 'The Last Name must have fewer than 35 characters.' )
                }
            }
            if ( ! request.hasOwnProperty( 'employerId') ) {
                errors.push( 'The request must contain an EmployerId property' )
            }
            if ( ! request.hasOwnProperty( 'email') ) {
                errors.push( 'The request must contain an Email property' )
            }

            if ( errors.length > 0 ) {  // return after the first record that fails validation
                error =  {
                    name: 'Employee validation error',
                    errors: errors,
                    offender: request
                }
                return response = {
                    status: 'error',
                    data: error
                }
            }
        }) 
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
    response = {
        status: status,
        data: data
    }
    return response
}