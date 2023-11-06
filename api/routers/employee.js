// Module: Employees Router
import express from 'express'
import { addRecords, editRecords, findRecords } from '../controllers/primary.js'

const router = express.Router()

var data                    // response property holding the data returned, if applicable
var status = 'processing'   // response property holding the process status  
var recordCount = 0         // response property holding the number or records affected 
var httpResponseCode        // property holding the Http status code

const collection = 'employees'

router.get(`/`, async (req, res) => {
    try {
        const request = req.query
        const results = await findRecords( request, collection )
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

router.put(`/`, async (req, res) => {
    var fallout
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
        const collection = collectionName
        let results = await editRecords( request, collection )
        if ( results.status === 'error' ) {
            status = 'error'
            httpResponseCode = 400
        } else {
            data = results.data
            fallout = results.fallout
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
        data: data,
        fallout: fallout
    }
    res.status( httpResponseCode ).send ( response )
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
        const collection = collectionName
        const results = await addRecords( request, collection )

        if ( results.status === 'success' ) {
            status = 'success'
            data = results.data
            recordCount = results.recordCount
            httpResponseCode = 200
        } else {
            status = 'error'
            httpResponseCode = 400
            data = results.data
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

export default router