/**
 * Reports Controller
 * 
 */
import { insert, update, find } from '../utilities/mongodb/wrapper.js'
/**
 * 
 * @param { obejct } reports 
 * @returns { object }
 */
export async function addReports( request ) {
    const report = {
        id: '4903903904955fjd033',
        companyName: 'Test Company',
        companyId: 'eiwo-oeor-89rd-3jrk',
        created: '2023-10-21 12:29:00',
        modified: '2023-10-21 12:29:00',
        lineItems: [
            {
                firstName: 'Doc',
                middleName: null,
                lastName: 'Shufelt',
                salary: 50000,
                plan: 'S',
                supinsMonthly: 142.76,
                supinsPrePayroll: 32.94,
                employerAnnualSavings: 314.40,
                eligible: true,
                notes: null
            },
            {
                firstName: 'Bob',
                middleName: null,
                lastName: 'Johnson',
                salary: 42000,
                plan: 'S',
                supinsMonthly: 142.76,
                supinsPrePayroll: 32.94,
                employerAnnualSavings: 314.40,
                eligible: true,
                notes: null
            }
        ]
    }
    const response = {
        status: 'success',
        recordCount: 2,
        data: report
    }
    return response
}

/**
 * 
 * @param { obejct } reports 
 * @returns { object }
 */
export async function findReports( request ) {
    var data
    var status = 'processing'
    var recordCount = 0
    try {
        
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
    }
    data = [ { name: 'Test Corporation' } ]

    const response = {
        status: 'success',
        recordCount: 1,
        data: data
    }
    return response
}

/**
 * 
 * @param { obejct } reports 
 * @returns { object }
 */
export async function editReports( request ) {

}

export async function createReserveReport( request ) {
    let mapping = new Map([
        ['single', [173.40, 40.02]],
        ['married', []]
    ])
}