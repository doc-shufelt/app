/**
 * Import Controller
 * @description Orchestrates the data import process from the underlying payroll system 
 */
import { sendHttpRequest } from "../utilities/http/http.js";
import { addRecords } from '../controllers/controller.js'

/* Response object fields */
var data
var status = 'processing'
var recordCount = 0

/**
 * Function: executeFinchImportProcess()
 * @description This function serves as the primary flow controller for the initial data import process from Finch
 * @param { object } request An object containing a companyId property { companyId: 'orjf-ffid-eodd-eedc'}
 * @returns { object } A canonical response object containing an array of inserted employee records
 */
export async function executeFinchImport( request ) {
    var completeEmployeeProfiles = []
    var employeeProfiles
    var payStatements
    try {
        employeeProfiles = await importEmployeeProfilesFromFinch( request )
        payStatements = await importPayStatementsFromFinch() 
        for ( const profile of employeeProfiles.data ) {
            var statement = payStatements.data.find( ( record ) => {
                return record.id === profile.finchId
            } )
            delete statement.id
            profile.statement = statement
            completeEmployeeProfiles.push( profile )
        }
        var inserted = await addRecords({ requests: completeEmployeeProfiles } , 'employees' )
        if  ( inserted.status === 'error' ) {
            status = 'error'
        } else {
            status = 'success'
        }
        data = inserted.data
        recordCount = inserted.recordCount
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
async function importEmployeeProfilesFromFinch( request ) {
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
        for ( const profile of profiles.data ) {
            employee = directory.data.find( ( element ) => { 
                return element.finchId === profile.finchId
            } )
            profile.employerId = employee.employerId
            profile.department = employee.department
            profile.active = employee.active
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
                    employerId: request.employerId,
                    firstName: employee.first_name,
                    middleName: employee.middle_name,
                    lastName: employee.last_name,
                    active: employee.is_active,
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
        data = profileList
        status = 'success'
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.message
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
export async function importPayStatementsFromFinch() {
    try {
        var paymentRunId = await importRecentPaymentRun()
        var statements = await importEmployeePayStatementsFromFinch( paymentRunId.data )
        data = statements.data
        recordCount = statements.recordCount
        status = 'success'
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
        for ( const statement of statements ) {
            let cleanStatement = {
                id: statement.individual_id,
                employmentType: statement.type,
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
        }
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

async function importFinchForwardFields() {
    try {
        const params = {
            method: 'get',
            resource: 'employer/payment',
            query: {
                start_date: '2022-01-01',
                end_date: '2022-01-31'
            }
        }
        /* let results = await sendHttpRequest( params )   

        data = results.data
        status = 'success'
        recordCount = data.length */
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
        status: 'success',
        recordCount: 0,
        data: {

        }
    }
    return response
}

async function createEmployeeTaxProfile( request ) {
    // Finch uses the 2-letter ISO 3166 country code 
    return {
        "id": 4241,
        "taxCountryCode": "USA",
        "federalFilingStatus": "SINGLE",
        "stateFilingStatus": "SINGLE",
        "taxState": 'NC',
        "annualW2Income": request.employee.annualIncome,
        "acceptedDisclaimer": true,
        "isSetupComplete": true,
        "useW2Withholding": false,
        "federalW2Withholding": request.employee.federalW2Withholding,
        "stateW2Withholding": request.employee.stateW2Withholding,
        "numExemptions": 2
    }
}

