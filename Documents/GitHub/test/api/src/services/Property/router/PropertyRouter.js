import express from 'express'
import PropertyController from '../controllers/PropertyController.js'

const PropertyRouter = express.Router()

// get routes
PropertyRouter.get( `/:id`, async ( req, res ) => {
    const results = await PropertyController.getPropertyById( req.query )
    return res.status( 200 ).send( results )
})

// put routes
PropertyRouter.put( `/:id`, async ( req, res ) => {
    const results = await PropertyController.updateProperty( req.body )
    return res.status( 200 ).send( results )
})

// post routes
PropertyRouter.post( `/`, async ( req, res ) => {
    const results = await PropertyController.createProperty( req.body )
    return res.status( 200 ).send( results )
})

// delete routes
PropertyRouter.delete( `/:id`, async ( req, res ) => {
    const results = await PropertyController.deleteProperty( req.body )
    return res.status( 200 ).send( results )
})

export default PropertyRouter