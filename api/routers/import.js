/**
 *  Imports Router
 */
import express from 'express'

import { executeFinchImport, 
        importEmployeeProfilesFromFinch, 
        importEmployeeDirectoryFromFinch,
        importEmployeeDetailsFromFinch } from '../../import/finch/source/controller.js'

const router = express.Router()

var data
var status = 'processing'
var recordCount = 0
var httpResponeCode

router.post(`/`, async (req, res) => {

    try {
        // TO-DO: Build this out as needed
        const request = {
            employerId: req.body.request.employerId
        }
        // Launch the Imports Controller
        const results = await executeFinchImport( request )

        if ( results.status === 'error' ) {
            status = 'error'
            httpResponeCode = 400
        } else {
            status = 'success'
            recordCount = results.recordCount
            httpResponeCode = 200
        }
        data = results.data
        
    } catch ( e ) {

        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponeCode = 400
    }

    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    
    return res.status( httpResponeCode ).send( response )
})

router.post( '/test/directory', async ( req, res ) => {
    try {
        const request = {
            employerId: req.body.request.employerId
        }
        const results = await importEmployeeDirectoryFromFinch( request )
        data = results.data
        recordCount = results.recordCount
        status = 'success'
        httpResponeCode = 200
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponeCode = 400
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return res.status( httpResponeCode ).send( response )
})

router.post( '/test/details', async ( req, res ) => {
    try {
        const directory = req.body
        const results = await importEmployeeDetailsFromFinch( directory )
        data = results.data
        recordCount = results.recordCount
        status = 'success'
        httpResponeCode = 200
    } catch ( e ) {
        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }
        data = error
        status = 'error'
        httpResponeCode = 400
    }
    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }
    return res.status( httpResponeCode ).send( response )
})

router.post( '/test/profiles', async ( req, res ) => {
    try {

        const directory = req.body
        const results = await importEmployeeProfilesFromFinch( directory )

        data = results.data
        recordCount = results.recordCount
        status = 'success'
        httpResponeCode = 200

    } catch ( e ) {

        const error = {
            name: e.name,
            message: e.message,
            stack: e.stack
        }

        data = error
        status = 'error'
        httpResponeCode = 400

    }

    const response = {
        status: status,
        recordCount: recordCount,
        data: data
    }

    return res.status( httpResponeCode ).send( response )

})

export default router