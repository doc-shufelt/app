/**
 * Employer Router
 */
import express from 'express'
import EmployerController from '../controllers/EmployerController.js'

const EmployerRouter = express.Router()

// get routes
EmployerRouter.get( `/`, async ( req, res ) => {
    const results = await EmployerController.getEmployers( req.query )
    return res.status( 200 ).send( results )
})

// get routes
EmployerRouter.get( `/:id`, async ( req, res ) => {
    const results = await EmployerController.getEmployerById( req.params.id )
    return res.status( 200 ).send( results )
})

// put routes
EmployerRouter.put( `/:id`, async ( req, res ) => {
    const results = await EmployerController.updateEmployer( req.body )
    return res.status( 200 ).send( results )
})

// post routes
EmployerRouter.post( `/`, async ( req, res ) => {
    const results = await EmployerController.createEmployer( req.body )
    return res.status( 200 ).send( results )
})

// delete routes
EmployerRouter.delete( `/:id`, async ( req, res ) => {
    const results = await EmployerController.deleteEmployer( req.body )
    return res.status( 200 ).send( results )
})

export default EmployerRouter