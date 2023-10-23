/**
 *   Users Router
 */
import express from 'express'
import { addRecords, editRecords, findRecords } from '../controllers/controller.js'
import emitter from '../controllers/loggerController.js'

const router = express.Router()

var data
var status = 'processing'
var recordCount = 0
var httpResponseCode

const collectionName = 'users'

router.get(`/`, async (req, res) => {
    emitter.emit( 'insert' , req)
    try {
        const request = req.query
        const collection = collectionName
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
        const request = req.body
        const collection = collectionName
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
        const request = req.body
        const collection = collectionName
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