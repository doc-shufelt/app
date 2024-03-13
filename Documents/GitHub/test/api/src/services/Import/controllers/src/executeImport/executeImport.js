/* imports */
import Import from '../../../object/Import.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import EmployerController from '../../../../Employer/controllers/EmployerController.js'
import UtilitiesHandler from '../../../utilities/UtilitiesHandler.js'
import ImportController from '../../../../Import/controllers/ImportController.js'
import FinchController from '../../../../Finch/controllers/FinchController.js'

/** 
 * @description
 * @param { string } authorizationCode The finch authorization code to trade for a token
 * @param { string } userId The unique identifier of the user who initiated the import
 * @returns 
 */
export default async function executeImport( request ) {
    try {
        // initialize an import object to track our progress
        const importTracker = await Import( request )
        const tracker = await DatabaseController.insert( importTracker, 'imports' )

        // trade the authorization code from finch for a long-term token
        // const token = await FinchController.generateFinchToken( request.authorizationCode )
        // if ( token instanceof Error ) {
        //    throw new Error( token )
        // }

        // call the finch /company endpoint  
        const company = await ImportController.importCompany( request.access_token )
        if ( company instanceof Error ) {
            throw new Error(company.message)  // FIX
        }

        // set up and store the employer connection details
        const connection = await ImportController.saveConnection( company, request.access_token )
        if ( connection instanceof Error ) {
            throw new Error( connection )
        }

        // call the finch /directory endpoint
        const directory = await ImportController.importDirectory( request.access_token )
        if ( directory instanceof Error ) {
            throw new Error(directory)
        }
        // call the finch /individual endpoint
        const individual = await ImportController.importIndividual( request.access_token, directory )
        if ( individual instanceof Error ) {
            throw new Error(individual)
        }

        // call the finch /employment endpoint
        const employment = await ImportController.importEmployment( request.access_token, directory )
        if ( employment instanceof Error ) {
            throw new Error(employment)
        }

        // call the finch /payment endpoint
        const payment = await ImportController.importPayment( request.access_token )
        if ( payment instanceof Error ) {
            throw new Error(payment)
        }

        // infer the pay cycle from the pay period dates update the company record
        const inferredPayCycle = await UtilitiesHandler.inferPayCycle( payment.startDate, payment.endDate )
        EmployerController.editEmployer( { _id: company.id, payCycle: inferredPayCycle } )

        // call the finch /pay-statements endpoint
        const statement = await ImportController.importStatement( payment.id, request.access_token )
        if ( statement instanceof Error ) {
            console.log(statement)
            throw new Error(statement)
        }
        
        const employees = await ImportController.mergeEmployeeData( directory, individual, employment, statement )
    
        return importTracker
    } catch ( error ) {
        throw new Error( error )
    } 
}