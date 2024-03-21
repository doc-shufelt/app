import express from 'express'
import ImportController from '../controllers/ImportController.js'
import handleError from '../../Error/controllers/handleError/handleError.js'

const ImportRouter = express.Router()

ImportRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await ImportController.getDataImportById(req.params, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

ImportRouter.put(`/:id`, async (req, res) => {
  try {
    const results = await ImportController.updateDataImport(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

ImportRouter.post(`/`, async (req, res) => {
  try {
    const results = await ImportController.executeImport(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

// delete routes
ImportRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await ImportController.deleteImport(req.body)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default ImportRouter