import express from 'express'
import UserController from '../controllers/UserController.js'

const UserRouter = express.Router()

// get routes
UserRouter.get( `/`, async ( req, res ) => {
    const results = await UserController.getUsers( req.query )
    return res.status( 200 ).send( results )
})

UserRouter.get( `/:id`, async ( req, res ) => {
    const results = await UserController.getUserById( req.params )
    return res.status( 200 ).send( results )
})

// put routes
UserRouter.put( `/`, async ( req, res ) => {
    const results = await UserController.editUser( req.body )
    return res.status( 200 ).send( results )
})

// post routes
UserRouter.post( `/`, async ( req, res ) => {
    const results = await UserController.createUser( req.body )
    return res.status( 200 ).send( results )
})

UserRouter.post( `/login`, async ( req, res ) => {
    const results = await UserController.authenticateUser( req.body.emailAddress, req.body.password )
    return res.status( 200 ).send( results )
})

export default UserRouter