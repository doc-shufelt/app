/**
 * @name employersController
 * @description This module handles 
 * 
 */

var data
var status = 'processing'
var error

/**
 * 
 * @param { array } employers 
 */
export async function validateEmployers( employers ) {

    try {
        for ( const employer of employers ) {
            if ( ! employer.hasOwnProperty( 'name' ) ) {
                status = 'error'
                error = {
                    message: 'The employer must have a name property.'
                }
                break
            }  
            if ( employer.name.length < 2 || employer.name.length > 35 ) {
                status = 'error'
                error = {
                    message: 'The company name property must be between 3 and 35 characters.'
                }
                break
            }
            if ( ! employer.hasOwnProperty( 'ein' ) ) {
                status = 'error'
                error = { 
                    message: 'The request must provide an EIN.'
                }
                break
            }
            if ( employer.ein.length != 9 ) {
                status = 'error'
                error = {
                    message: 'The EIN must consist of 9 digits.'
                }
                break
            }
            if ( ! employer.hasOwnProperty( 'addressOne' ) ) {
                status = 'error'
                error = {
                    message: 'The request must provide a street address.'
                }
                break
            } 
            if ( employer.addressOne.length  < 5 || employer.addressOne.length > 50 ) {
                status = 'error'
                error = {
                    message: 'Street address must be between 5 and 50 characters.'
                }
                break
            }
            if ( ! employer.hasOwnProperty( 'city' ) ) {
                status = 'error'
                error = {
                    message: 'The request must provide a city property.'
                }
                break
                
            }
            if ( ! employer.hasOwnProperty( 'state' ) ) {
                status = 'error'
                error = {
                    message: 'The request must provide a state property.'
                }
                break
            
            }
            if ( employer.state.length != 2 ) {
                status = 'error'
                error = {
                    message: 'The state property must be the USPS two-character abbreviation.'
                }
                break
                
            }
            if ( ! employer.hasOwnProperty( 'postalCode' ) ) {
                status = 'error'
                error = {
                    message: 'The request must provide a postal code.'
                }
                break
            } 
            if ( employer.postalCode.length < 5 || employer.postalCode.length > 10 ) {
                status = 'error'
                error = {
                    message: 'The postal code must be between 5 and 9 characters.'
                }
                break
            }
        }
        if ( status === 'error' ) {
            data = error
        } else {
            status = 'success'
        }
    } catch ( e ) {
        error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }

    const response = {
        status: status,
        data: data
    }
    return response
}
