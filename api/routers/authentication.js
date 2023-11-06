/**
 * @description Express router for handling authorization requests
 */
import express from 'express'
import { createToken, validateToken, authenticateLogin} from '../controllers/authentication.js'

const router = express.Router()

var data                    // response property holding the employer data returned, if applicable
var status = 'processing'   // response property holding the process status  
var recordCount = 0         // response property holding the number or records affected 
var httpResponseCode        // property holding the Http status code

router.post(`/code`, async (req, res) => {
    try {
        const request = req.body
        const results = await retrieveToken( request )
        data = results.data
            recordCount = results.recordCount
            status = 'success'
            httpResponseCode = 200
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponseCode = 400
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return res.status( httpResponseCode ).send( response )
})

router.post(`/token`, async (req, res) => {

    try {
        if ( req.body === undefined || req.body === null || Object.keys( req.body ).length === 0 ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a json-encoded body.'
            })
        }
        if ( ! req.body.hasOwnProperty( 'code' ) ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must contain a code property.'
            })
        }
        const request = req.body
        const results = await createToken( request )
        if ( results.status === 'error' ) {
            status = 'error'
            httpResponseCode = 400
        } else {
            status = 'success'
            data = results.data
            recordCount = results.recordCount
            httpResponseCode = 200
        }

    } catch ( e ) {

        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error,
        status = 'error',
        httpResponseCode = 400
    }

    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )

})

router.post(`/login`, async (req, res) => {
    try {

        if ( req.body === undefined || req.body === null || Object.keys( req.body ).length === 0 ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a json-encoded body.'
            })
        }
        if ( ! req.body.hasOwnProperty( 'username' ) ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must include a valid username property.'
            })
        }
        if ( ! req.body.hasOwnProperty( 'password') ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must include a password property.'
            })
        }

        const request = req.body
        const results = await authenticateLogin( request )

        if ( results.status === 'error' ) {
            data = results.data
            status = 'error'
            httpResponseCode = 400
        } else {           
            recordCount = results.recordCount
            status = 'success'
            httpResponseCode = 200
        }

    } catch ( e ) {

        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponseCode = 400
    }

    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )

})

export default router