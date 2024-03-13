import express from 'express'
import ConnectionController from '../controllers/ConnectionController.js'

const ConnectionRouter = express.Router()

// post route
ConnectionRouter.post( `/`, async ( req, res ) => {
    const results = await ConnectionController.createConnection( req.body )
    return res.status( 200 ).send( results )
})

// post route
ConnectionRouter.get( `/:id`, async ( req, res ) => {
    const results = await ConnectionController.getConnectionByEmployerId( req.body )
    return res.status( 200 ).send( results )
})

// delete route
ConnectionRouter.delete( `/:id`, async ( req, res ) => {
    const results = await ConnectionController.deactivateConnection( req.query )
    return res.status( 200 ).send( results )
})

export default ConnectionRouter