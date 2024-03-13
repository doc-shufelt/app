import express from 'express'
import AuditController from '../controllers/AuditController.js'

const AuditRouter = express.Router()

AuditRouter.get( `/`, async ( req, res ) => {
    const results = await AuditController.getAudits( req.query )
    return res.status( 200 ).send( results )
})

AuditRouter.put( `/`, async ( req, res ) => {
    const results = await AuditController.editAudit( req.body )
    return res.status( 200 ).send( results )
})

AuditRouter.post( `/`, async ( req, res ) => {
    const results = await AuditController.createAudit( req.body )
    return res.status( 200 ).send( results )
})

export default AuditRouter