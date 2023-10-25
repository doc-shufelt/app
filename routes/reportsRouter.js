/**
 *   Reports Router
 */
import express from 'express'
import { addReports, editReports, findReports } from '../controllers/reportsController.js'

const router = express.Router()

var response                // object containing the function response
var data                    // response property holding the employer data returned, if applicable
var status = 'processing'   // response property holding the process status  
var recordCount = 0         // response property holding the number or records affected 
var httpResponseCode        // property holding the Http status code
const collection = 'reports'

router.get(`/`, async (req, res) => {
    try {
        const request = {
            criteria: req.query
        }
        const results = await findReports( request, collection )
            data = results.data
            recordCount = results.recordCount
            status = 'success'
            httpResponseCode = 200
    } catch ( e ) {
        let error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponseCode = 400
    }
    response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )
})

router.post(`/`, async (req, res) => {
    try {
        if ( req.body === undefined || req.body === null || Object.keys( req.body ).length === 0 ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a json-encoded body.'
            })
        }
        if ( ! req.body.hasOwnProperty( 'requests' )) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a requests property.'
            })
        }
        if ( ! Array.isArray( req.body.requests ) ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The requests property must be an array.'
            })
        }
        const request = req.body
        const results = await addReports( request, collection )
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
        data = error
        status = 'error'
        httpResponseCode = 400
    }
    response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )
})

router.put('/', async (req, res) => {
    try {
        if ( req.body === undefined || req.body === null || Object.keys( req.body ).length === 0 ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a json-encoded body.'
            })
        }
        if ( ! req.body.hasOwnProperty( 'requests' )) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The request must have a requests property.'
            })
        }
        if ( ! Array.isArray( req.body.requests ) ) {
            return res.status( 400 ).send( {
                status: 'error',
                message: 'The requests property must be an array.'
            })
        }
        const request = req.body
        const results = await editReports( request, collection )
        if ( results.status === 'error' ) {
            status = 'error'
            httpResponseCode = 400
        } else {
            data = results.data
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
    response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )
})

export default router