/**
 *   Providers Router
 */
import express from 'express'
import { addRecords, editRecords, findRecords } from '../controllers/controller.js'
import emitter from '../controllers/loggerController.js'

const router = express.Router()

var data                    // response property holding the data returned, if applicable
var status = 'processing'   // response property holding the process status  
var recordCount = 0         // response property holding the number or records affected 
var httpResponseCode        // property holding the Http status code

const collectionName = 'providers'

router.get(`/`, async (req, res) => {
    emitter.emit( 
        'router-invoked', 
        { 
            router: 'providers',
            method: 'get',
            timestamp: new Date()
        } 
    )
    try {
        const request = req.query
        const results = await findRecords( request, collectionName )
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
    emitter.emit( 
        'router-returned', 
        { 
            module: 'providers',
            method: 'get',
            status: response.status,
            recordCount: recordCount,  
            timestamp: new Date()
        }
    )
    res.status( httpResponseCode ).send( response )
})

router.post(`/`, async (req, res) => {
    emitter.emit( 'request', req )
    try {
        const request = req.body
        const results = await addRecords( request,  collectionName )
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
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    emitter.emit( 'response', response)
    res.status( httpResponseCode ).send( response )
})

router.put('/', async (req, res) => {
    var fallout
    try {
        const request = req.body
        const results = await editRecords( request, collectionName )
        if ( results.status === 'error' ) {
            status = 'error'
            httpResponseCode = 400
        } else {
            data = results.data
            fallout = results.fallout
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
        data: data,
        fallout: fallout
    }
    res.status( httpResponseCode ).send( response )
})

export default router