import express from 'express'
import PropertyController from '../controllers/PropertyController.js'
import handleError from '../../Error/controllers/handleError/handleError.js'

const PropertyRouter = express.Router()

PropertyRouter.get(`/`, async (req, res) => {
  try {
    const results = await PropertyController.getProperties(req.query, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

PropertyRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await PropertyController.getPropertyById(req.query, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

PropertyRouter.put(`/`, async (req, res) => {
  try {
    const results = await PropertyController.editProperty(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

PropertyRouter.post(`/`, async (req, res) => {
  try {
    const results = await PropertyController.createProperty(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

PropertyRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await PropertyController.deleteProperty(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default PropertyRouter