/**
 *  Imports Router
 */
import express from 'express'
import { executeFinchImport } from '../controllers/importsController.js'

const router = express.Router()

var data
var status = 'processing'
var recordCount = 0
var httpResponeCode

router.post(`/`, async (req, res) => {
    try {
        const request = {
            employerId: req.body.request.employerId
        }
        const results = await executeFinchImport( request )
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