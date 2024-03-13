import express from 'express'
import ImportController from '../controllers/ImportController.js'

const ImportRouter = express.Router()

// get routes
ImportRouter.get( `/:id`, async ( req, res ) => {
    const results = await ImportController.getDataImportById( req.query )
    return res.status( 200 ).send( results )
})

// put routes
ImportRouter.put( `/:id`, async ( req, res ) => {
    const results = await ImportController.updateDataImport( req.body )
    return res.status( 200 ).send( results )
})

// post routes
ImportRouter.post( `/`, async ( req, res ) => {
    const results = await ImportController.executeImport( req.body )
    return res.status( 200 ).send( results )
})

// delete routes
ImportRouter.delete( `/:id`, async ( req, res ) => {
    const results = await ImportController.deleteImport( req.body )
    return res.status( 200 ).send( results )
})

export default ImportRouter