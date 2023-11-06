/**
 * Reports Controller
 * 
 */
import { insert, update, find } from '../utilities/mongodb/wrapper.js'

var data
var status = 'processing'
var error = {}

/**
 * 
 * @param { object } request 
 * @returns { object } A canonical Response object
 */
export async function createReserveReport( request ) {

}

export async function createSavingsEstimate( request ) {
    
}

export async function validateReports( reports ) {
    try {
        for ( const report of reports ) {
            if ( ! report.hasOwnProperty( 'employerName' ) ) {
                status = 'error'
                error = {
                    message: 'The report must include an employerName property.'
                }
                break
            }
            if ( ! report.hasOwnProperty( 'employerId' ) ) {
                status = 'error'
                error = {
                    message: 'The report must include an employerId property.'
                }
                break
            }
            if ( ! report.hasOwnProperty( 'created' ) ) {
                status = 'error'
                error = {
                    message: 'The report must include a created property.'
                }
                break
            }
            if ( ! report.hasOwnProperty( 'modified' ) ) {
                status = 'error'
                error = {
                    message: 'The report must include a modified property.'
                }
                break
            }
        }
    } catch ( e ) {
        error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
    }
    const response = {
        status: status,
        data: data
    }
    return response
}