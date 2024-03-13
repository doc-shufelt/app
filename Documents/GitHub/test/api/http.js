import { RequestValidationError } from "../../../api/errors/ErrorClass.js"

/**
 * @description helper method for preparing and sending http requests
 * @param {*} params an object representing inputs for the http request { method, resource, ?body, ?query, ?token }
 * @returns { Promise<array|string> }
 */
export async function sendHttpRequest( params ) {
    try {

        // 1. Build url/uri
        // 2. Mount headers
        // 3. Add token
        // 4. build options
        // 5. validation
        // 6. Add query params
        var baseUrl = process.env.FINCH_BASE_URL
        var queryString = null

        // add the required headers
        var headers = {
            'finch-api-version': '2020-09-17',
            'content-type': 'application/json',
            'accept': 'application/json'
        }

        // if a token is passed in the params then include it with headers
        if ( params.hasOwnProperty( 'token' )) {
            headers.Authorization = 'Bearer ' + params.token
        }

        // validate the incoming request
        const validation = await validateHttpRequest( params )  // TO-DO: FIX THIS
        if ( validation.status === 'error' ) {
            throw new RequestValidationError( validation.message )
        }

        var options = {
            method: params.method,
            headers: headers,
        }

        // start building the endpoint
        var endpoint = baseUrl + params.resource

        // append the query parameters to the endpoint
        if ( (params.method === 'get') && (params.query != undefined) ) {
            queryString = '?start_date=' + params.query.start_date + '&end_date=' + params.query.end_date
            endpoint += queryString
        }
        if ( (params.hasOwnProperty( 'body' )) && (Object.keys( params.body ).length > 0 )) {
            options.body = JSON.stringify( params.body )
        }
        const results = await fetch( endpoint, options )
        if ( results instanceof Error ) {
            throw new RequestValidationError( results.message )
        }
        const list = await results.json()
        var returnData = null

        switch( params.resource ) {         // The Finch API returns a different response format for each endpoint
            case 'employer/individual':
                returnData = list.responses // array
                break
            case 'employer/pay-statement':
                returnData = list.responses[0].body.pay_statements // array
                break
            case 'employer/payment':
                returnData = list[0] // string
                break
            case 'employer/directory':
                returnData = list.individuals // array
                break
            case 'employer/employment':
                returnData = list.responses // array
                break
            case 'employer/company':
                returnData = list // object
                break
            case 'providers':
                returnData = list.data // array
                break
            case 'auth/token':
                returnData = list.access_token  // string
                break
        }
        return returnData

    } catch ( error ) {
        return error
    }
}

/**
 * 
 * @param {*} request 
 * @returns 
 */
async function validateHttpRequest( request ) {
    try {
        const resources = [
            'employer/directory',
            'employer/individual',
            'employer/pay-statement',
            'employer/payment',
            'employer/employment',
            'employer/company',
            'providers',
            'auth/token'
        ]

        if ( ! request.hasOwnProperty( 'resource' ) ) {
            throw new RequestValidationError( 'A resource must be provided.' )
        }
        if ( ! resources.includes( request.resource ) ) {
           throw new RequestValidationError( 'Invalid Resource.' )
        }
        return true
    } catch ( error ) {
        return error
    }

}

/**
 * @description the finch api has a different return object structure for each endpoint so we need to map them
 * @returns { object }
 */
function mapFinchHttpEndpointResponse() {
    return new Map([
        [ 'employer/individual', 'responses' ],
        [ 'employer/pay-statement', 'responses[0].body.pay_statements' ],
        [ 'employer/payment', 0 ],
        [ 'employer/directory', 'individuals' ],
        [ 'employer/employment', 'responses' ],
        [ 'employer/company', null ],
        [ 'auth/token', 'access_token' ]
    ])
}

export class HttpRequest {

    constructor( method, endpoint, body, query ) {
        if ( ! validate( method, endpoint, body, query ) ) {
            return 'failed http request validation'
        }
        this.method = method
        this.endpoint = endpoint
        this.body = body
        this.query = query
    }
    /**
     * 
     * @param { string } method the http method of the incoming request
     * @param { string } endpoint the finch endpoint target of the incoming request
     * @param { object } body 
     * @param { object } query 
     * @returns 
     */
    validate( method, endpoint, body, query ) {
        if ( ! this.validateMethod( method ) ) {
            return false
        }
        if ( ! this.validateEndpoint( endpoint ) ) {
            return false
        }
        if ( ! this.validateBody( body ) ) {
            return false
        }
        if ( ! this.validateQuery( query ) ) {
            return false
        }
    }
    /**
     * 
     * @param { string } method 
     * @returns { boolean }
     */
    validateMethod( method ) {
        if ( method === null ) {
            return false
        }
        const validHttpMethods = process.env.VALID_HTTP_METHODS
        if ( validHttpMethods.includes( method ) ) {
            return true
        }
        return false
    }
    validateEndpoint( endpoint ) {
        // confirm the endpoint is one of finch's
        return true
    }
    validateBody( method, body ) {
        // 
        return true
    }
    validateQuery( method, query ) {

    }

    get( endpoint, data ) {

    }
    post( endpoint, data ) {

    }
    put( endpoint, data ) {

    }
}