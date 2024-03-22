import express from 'express'
import ConnectionController from '../controllers/ConnectionController.js'

const ConnectionRouter = express.Router()

// post route
ConnectionRouter.post(`/`, async (req, res) => {
  try {
    const results = await ConnectionController.createConnection(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack))
  }

})

// post route
ConnectionRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await ConnectionController.getConnectionByEmployerId(req.params, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack))
  }
})

// delete route
ConnectionRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await ConnectionController.deactivateConnection(req.params, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack))
  }
})

export default ConnectionRouter