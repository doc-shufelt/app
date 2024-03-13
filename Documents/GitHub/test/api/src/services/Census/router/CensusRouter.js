import express from 'express'
import CensusController from '../controllers/CensusController.js'

const CensusRouter = express.Router()

// get routes
CensusRouter.get( `/:id`, async ( req, res ) => {
    const results = await CensusController.getCensusById( req.query )
    return res.status( 200 ).send( results )
})

// put routes
CensusRouter.put( `/:id`, async ( req, res ) => {
    const results = await CensusController.updateCensus( req.body )
    return res.status( 200 ).send( results )
})

// post routes
CensusRouter.post( `/`, async ( req, res ) => {
    const results = await CensusController.createCensus( req.body )
    return res.status( 200 ).send( results )
})

// delete routes
CensusRouter.delete( `/:id`, async ( req, res ) => {
    const results = await CensusController.deleteCensus( req.body )
    return res.status( 200 ).send( results )
})

export default CensusRouter