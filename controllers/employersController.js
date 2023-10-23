/**
 * @name employersController
 * @description This module handles 
 * 
 */

export async function validateEmployers( request ) {
    var data
    var status = 'processing'
    var error
    try {
        if ( ! Array.isArray( request )) {
            return {
                status: 'error',
                message: 'This method expects to be passed an array of employer objects.'
            }
        } else {
            if ( request.length < 1 ) {
                return {
                    status: 'error',
                    message: 'This method requires an array with at least one element.'
                }
            }
        }
        if ( status != 'error' ) {
            console.log('Begin checking records...')
            request.forEach( ( employer ) => {
                if ( ! employer.hasOwnProperty('name') ) {
                    console.log('name property does not exist')
                    status = 'error'
                    message = 'The request must provide a name property.'
                    return
                }  
                console.log('name property exists')
                if ( employer.name.length < 3 || employer.name.length > 35 ) {
                    status = 'error'
                    message = 'The company name property must be between 3 and 35 characters.'
                    return
                }
                console.log('name property passed length validation')
                if ( ! employer.hasOwnProperty('ein') ) {
                    console.log('ein property does not exist')
                    status = 'error'
                    message = 'The request must provide an EIN.'
                    return
                }
                console.log('ein property exists')
                if ( employer.ein.length != 9 ) {
                    console.log('ein property failed length validation')
                    status = 'error'
                    message = 'The EIN must consist of 9 digits.'
                    return
                }
                console.log('ein property passed length validation')
                if ( ! employer.hasOwnProperty('addressOne') ) {
                    console.log('address one property does not exist.')
                    status = 'error'
                    message = 'The request must provide a street address.'
                    return
                } 
                console.log('address one property exists')
                if ( employer.addressOne.length  < 5 || employer.addressOne.length > 50 ) {
                    console.log('address one property failed length validation')
                    status = 'error'
                    message = 'Street address must be between 5 and 50 characters.'
                    return
                }
                console.log('address one property passed length validation')
                if ( ! employer.hasOwnProperty('city') ) {
                    console.log('name property does not exist')
                    status = 'error'
                    message = 'The request must provide a city property.'
                    return
                 
                }
                console.log('city property exists')
                if ( ! employer.hasOwnProperty('state') ) {
                    console.log('state property does not exist')
                    status = 'error'
                    message = 'The request must provide a state property.'
                    return
                
                }
                console.log('state property exists')
                if ( employer.state.length != 2 ) {
                    console.log('state property failed length validation')
                    status = 'error'
                    message = 'The state property must be the USPS two-character abbreviation.'
                    return
                    
                }
                console.log('state property passed length validation.')
                if ( ! employer.hasOwnProperty('postalCode') ) {
                    console.log('postal code property does not exist')
                    status = 'error'
                    message = 'The request must provide a postal code.'
                    return
                } 
                console.log('postal code property exists')
                if ( employer.postalCode.length < 5 || employer.postalCode.length > 10 ) {
                    console.log('postal code property failed length validation')
                    status = 'error'
                    message = 'The postal code must be between 5 and 9 characters.'
                    return
                }
            })
            if ( status === 'error' ) {
                data = message
            }
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
    if ( status != 'error' ) {
        status = 'success'
    }
    const response = {
        status: status,
        data: data
    }
    return response
}
