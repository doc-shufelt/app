/**
 *  @description Handles outgoing Http requests to external systems
 *  @param {*} parameters 
 */

export async function sendHttpRequest( params ) {
    try {
        console.log('PARAMS')
        console.log(params)
        var data
        var status = 'processing'
        var recordCount = 0
        var list = []
        var endpoint = 'https://api.tryfinch.com/'
        var status = 'processing'
        var queryString
        var headers = {
            'Finch-Api-Version': '2020-09-17',
            'Authorization': 'Bearer d668c04b-12ed-4cfe-bcd3-61099a447790',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        const validation = await validateHttpRequest( params )  // TO-DO: FIX THIS
        if ( validation.status === 'error' ) {
            const error = {
                name: 'Http Request Validation Error'
            }
            data = error
            status = 'error'
        }
        endpoint += params.resource
        if ( (status != 'error') && (params.method === 'get') && (params.query != undefined) ) {
            queryString = '?start_date=' + params.query.start_date + '&end_date=' + params.query.end_date
            endpoint += queryString
        }
        var options = {
            method: params.method,
            headers: headers
        }
        if ( (params.hasOwnProperty( 'body' )) && (Object.keys( params.body ).length > 0 )) {
            options.body = JSON.stringify( params.body )
        }

        const results = await fetch( endpoint, options )
        list = await results.json()

        switch( params.resource ) {
            case 'employer/individual':
                data = list.responses
                console.log('individual')
                break
            case 'employer/pay-statement':
                data = list.responses[0].body.pay_statements
                console.log('pay-statement')
                break
            case 'employer/payment': 
                data = list[0].id
                console.log('payment')
                break
            case 'employer/directory':
                data = list.individuals
                console.log('directory')
        }

            status = 'success'
            //recordCount = list.paging.count
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
    //console.log('response from http')
    //console.log(response)
    return response
}

async function validateHttpRequest( request ) {
    var status = 'processing'
    const resources = [
        'employer/directory',
        'employer/individual',
        'employer/pay-statement',
        'employer/payment'
    ]
    try {
        if ( ! request.hasOwnProperty( 'resource' ) ) {
            return {
                status: 'error',
                message: 'The request must specify a resource.'
            }
        }
        if ( ! resources.includes( request.resource ) ) {
            return {
                status: "error",
                message: "no resource was provided in the request"
            }
        }
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        status = 'error'
        data = error
    }

    return {
        status: 'success'
    }
}