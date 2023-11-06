/**
 * Users Controller
 * 
 */
var data
var status = 'processing'
var error = {}

/**
 * @description
 * @param { array } users 
 * @returns { object } 
 */
export async function validateUsers( users ) {

    const roles = [ "user", "owner" ]
    const regexSpecialCharacters = new RegExp(/[!@#$%^&*()\+={}[\]:;"<>.?\/|\\]/)
    const regexEmailValidation = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

    try {
        for ( const user of users ) {
            if ( ! user.hasOwnProperty( 'firstName' ) || user.firstName === undefined || user.firstName === null ) {
                status = 'error'
                error =  {
                    message: 'The request must have a first name property.'
                } 
                break
            }
            if ( user.firstName.length < 2 || user.firstName.length > 20 ) {
                status = 'error'
                error = {
                    message: 'The first name must be between 2 and 20 characters.'
                }
                break
            }
            if ( regexSpecialCharacters.test( user.firstName )) {
                status = 'error'
                error = {
                    message: 'The first name cannot contain special characters.'
                }
                break
            }
            if ( ! user.hasOwnProperty( 'lastName' ) || user.lastName === undefined || user.lastName === null ) {
                status = 'error'
                error = {
                    message: 'The request must contain a last name property.'
                }
                break
            }
            if ( user.lastName.length < 2 || user.lastName.length > 30 ) {
                status = 'error'
                error = {
                    message: 'The last name must be between 2 and 30 characters.'
                }
            }
            if ( regexSpecialCharacters.test( user.lastName )) {
                status = 'error'
                error = {
                    message: 'The last name cannot contain special characters.'
                }
                break
            }
            if ( ! user.hasOwnProperty( 'email' ) || user.email === undefined || user.email === null ) {
                status = 'error'
                error = {
                    message: 'The request must contain an email property.'
                }
                break
            }
            if ( ! regexEmailValidation.test( user.email )) {
                status = 'error'
                error = {
                    message: 'The email address is not valid.'
                }
                break
            }
            if ( ! user.hasOwnProperty( 'role' ) || user.role === undefined || user.role === null ) {
                status = 'error'
                error = {
                    message: 'The request must contain a role property.'
                }
                break
            }
            if ( ! roles.includes( user.role )) {
                status = 'error'
                error = {
                    message: 'The role provided is not a valid input.'
                }
                break
            }
            if ( ! user.hasOwnProperty( 'companyId' ) || user.companyId === undefined || user.companyId === null ) {
                status = 'error'
                error = {
                    message: 'The request must contain a companyId property.'
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
        error = {

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