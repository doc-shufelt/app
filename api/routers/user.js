/**
 *   Users Router
 */
import express from 'express'
import { addRecords, editRecords, findRecords } from '../controllers/primary.js'
import emitter from '../controllers/logger.js'

const router = express.Router()

var data
var status = 'processing'
var recordCount = 0
var httpResponseCode

const collection = 'users'

router.get(`/`, async (req, res) => {
    emitter.emit( 'insert' , req)
    try {
        const request = req.query
        const results = await findRecords( request, collection )
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
    var response = {
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
        const results = await addRecords( request, collection )
        if ( results.status === process.env.api_status_error ) {
            httpResponseCode = 400
        } else {
            httpResponseCode = 200
        }
        status = results.status
        data = results.data
        recordCount = results.recordCount
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = process.env.api_status_error
        httpResponseCode = 400
    }
    const response = {
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
        const results = await editRecords( request, collection )
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
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    res.status( httpResponseCode ).send( response )
})

export default router