/**
 * Finch Router
 */
import express from 'express'
import ImportController from '../../Import/controllers/ImportController.js'
import FinchController from '../controllers/FinchController.js'
import Import from '../../Import/object/Import.js'

const FinchRouter = express.Router()

// get routes
FinchRouter.post( `/`, async ( req, res ) => {
    const results = await ImportController.executeImport( req.body )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/company`, async ( req, res ) => {
    const results = await ImportController.importCompany( req.body.token )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/directory`, async ( req, res ) => {
    const results = await ImportController.importDirectory( req.body )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/individual`, async ( req, res ) => {
    const results = await ImportController.importIndividual( req.body )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/employment`, async ( req, res ) => {
    const results = await ImportController.importEmployment( req.body )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/payment`, async ( req, res ) => {
    const results = await ImportController.importPayment( req.body.token )
    return res.status( 200 ).send( results )
})

FinchRouter.post( `/statement`, async ( req, res ) => {
    const results = await ImportController.importStatement( req.body.paymentId, req.body.token )
    return res.status( 200 ).send( results )
})

export default FinchRouter