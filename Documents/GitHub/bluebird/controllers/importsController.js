/**
 * Import Controller
 * @description Orchestrates the data import process from the underlying payroll system 
 */
import { sendHttpRequest } from "../utilities/http/http.js";
import { addRecords } from '../controllers/controller.js'

var data
var status = 'processing'
var recordCount = 0

/**
 * Function: executeInitialImportProcess()
 * @description This function serves as the primary flow controller for the initial data import process
 * @param { object } request An employer object of the company for which to import data
 * @returns boolean
 */
export async function executeFinchImport( request ) {
    var completeEmployeeProfiles = []
    var employeeProfiles
    var payStatements
    try {
        employeeProfiles = await buildEmployeeProfiles( request )
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }
    try {
        payStatements = await importPayStatementsFromFinch()  
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }
    try {
        for ( const profile of employeeProfiles.data ) {
            let statement = payStatements.data.find( ( record ) => {
                return record.id === profile.finchId
            } )
            profile.statement = statement
            completeEmployeeProfiles.push( profile )
        }
        data = completeEmployeeProfiles
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
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

/**
 * 
 * @returns 
 */
async function buildEmployeeProfiles( request ) {
    var profilesList = []
    var employee
    var directory
    try {
        directory = await importEmployeeDirectoryFromFinch( request )
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }
    try {
        var profiles = await importEmployeeDetailsFromFinch( directory.data )
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }
    try {  
        for ( const profile of profiles.profiles ) {
            employee = directory.data.find( ( element ) => { 
                return element.finchId === profile.finchId
            } )
            profile.department = employee.department
            profilesList.push( profile ) 
        }
        data = profilesList
        status = 'success'
        recordCount = profilesList.length
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
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

/**
 * @description This function calls the /employer/directory endpoint leveraging the sendHttpRequest helper
 * @returns object 
 */
async function importEmployeeDirectoryFromFinch( request ) {
    var status = 'processing'
    var active = []
    var cleaned
    var recordCount = 0
    try {
        const params = {
            method: 'get',
            resource: 'employer/directory',
            companyId: request.employerId
        }
        var results = await sendHttpRequest( params )
        var directory = results.data
        for ( const employee of directory ) {
            if ( employee.is_active === true ) {
                cleaned = {
                    finchId: employee.id,
                    firstName: employee.first_name,
                    middleName: employee.middle_name,
                    lastName: employee.last_name,
                    department: employee.department.name
                }
                active.push( cleaned )
            }
        }
        data = active
        status = process.env.api_status_success
        recordCount = active.length
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
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

/**
 * 
 * @param { object } directory 
 * @returns { object }
 */
async function importEmployeeDetailsFromFinch( directory ) {
    var employees = {}
    var profileList = []
    var finchCompatableList = []  // need to format the list to conform to the request body requirements
    try {
        for ( const employee of directory ) {  
            finchCompatableList.push( { individual_id: employee.finchId } )
        }
        const params = {
            method: 'post',
            resource: 'employer/individual',
            body: { requests: finchCompatableList }
        }
        const results = await sendHttpRequest( params )
        for ( const property of results.data ) {
            let profile = {
                    finchId: property.body.id,
                    firstName: property.body.first_name,
                    middleName: property.body.middle_name,
                    lastName: property.body.last_name,
                    emailAddress: property.body.emails[0].data,
                    phoneNumber: property.body.phone_numbers[0].data,
                    gender: property.body.gender,
                    dateOfBirth: property.body.dob,
                    addressOne: property.body.residence.line1,
                    addressTwo: property.body.residence.line2,
                    city: property.body.residence.city,
                    state: property.body.residence.state,
                    country: property.body.residence.country,
                    postalCode: property.body.residence.postal_code
                }
            profileList.push( profile )
        }
        employees.profiles = profileList
        return employees
    } catch ( error ) {
        return error
    }
}

/**
 * 
 * @returns 
 */
export async function importPayStatementsFromFinch() {
    var mostRecentPaymentRun = await importRecentPaymentRun()
    let payStatements = await importEmployeePayStatementsFromFinch( mostRecentPaymentRun.data )
    return payStatements
}

/**
*
 * @description This function retrieves the most recent payment run from the payroll system and returns the ids of the employees
 *              that were paid.
 * @returns { object } A canonical Response object
 */
async function importRecentPaymentRun() {
    try {
        const params = {
            method: 'get',
            resource: 'employer/payment',
            query: {
                start_date: '2022-01-01',
                end_date: '2022-01-31'
            }
        }
        let results = await sendHttpRequest( params )   
        data = results.data
        status = 'success'
        recordCount = data.length
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
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

export async function importEmployeePayStatementsFromFinch( request ) {
    try {
        var federalTaxes = 0
        var stateTaxes = 0
        var ficaTaxes = 0
        var pretaxDeductions = 0
        var params = {
            method: 'post',
            resource: 'employer/pay-statement',
            body: { requests: [{ payment_id: request }] }
        }
        let results = await sendHttpRequest( params )
        let statements = results.data
        let statementsList = []
        await statements.forEach((statement) => {
            let cleanStatement = {
                id: statement.individual_id,
                type: statement.type,
                grossPay: statement.gross_pay.amount,
                currency: statement.gross_pay.currency
            }
            statement.taxes.forEach((tax) => {
                if (tax.type === 'federal') {
                    federalTaxes += Number(tax.amount)
                }
                if (tax.type === 'state') {
                    stateTaxes  += Number(tax.amount)
                }
                if (tax.type === 'fica') {
                    ficaTaxes += Number(tax.amount)
                }
            })
            cleanStatement.federalTaxes = federalTaxes
            cleanStatement.stateTaxes = stateTaxes
            cleanStatement.ficaTaxes = ficaTaxes

            statement.employee_deductions.forEach((deduction) => {
                if (deduction.pre_tax === true) {
                    pretaxDeductions += deduction.amount
                }
            })
            cleanStatement.pretaxDeductions = pretaxDeductions
            statementsList.push(cleanStatement)
        })
        data = statementsList
        status = 'success'
        recordCount = data.length
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
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

