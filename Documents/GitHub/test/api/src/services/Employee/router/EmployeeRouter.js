import express from 'express'
import EmployeeController from '../controllers/EmployeeController.js'

const EmployeeRouter = express.Router()

// DEBUG routes
EmployeeRouter.get( `/`, async ( req, res ) => {
    const results = await EmployeeController.getEmployees( req.query )
    return res.status( 200 ).send( results )
})

// get routes
EmployeeRouter.get( `/:id`, async ( req, res ) => {
    console.log(req.params)
    const results = EmployeeController.getEmployeeById( req.params.id )
    return res.status( 200 ).send( results )
})

// put routes
EmployeeRouter.put( `/delegate`, async ( req, res ) => {
    const results = await EmployeeController.delegateEmployeeAccess( req.body._id )
    return res.status( 200 ).send( results )
})

EmployeeRouter.put( `/:id`, async ( req, res ) => {
    const results = await EmployeeController.editEmployee( req.body )
    return res.status( 200 ).send( results )
})

// post routes
EmployeeRouter.post( `/`, async ( req, res ) => {
    const results = await EmployeeController.createEmployee( req.body )
    return res.status( 200 ).send( results )
})

// delete routes
EmployeeRouter.delete( `/:id`, async ( req, res ) => {
    const results = await EmployeeController.deleteEmployee( req.body )
    return res.status( 200 ).send( results )
})

export default EmployeeRouter