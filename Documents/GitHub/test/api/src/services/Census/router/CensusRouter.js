import express from 'express'
import CensusController from '../controllers/CensusController.js'
import handleError from '../../Error/controllers/handleError/handleError.js'

const CensusRouter = express.Router()

// get routes
CensusRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await CensusController.getCensusById(req.query)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

// put routes
CensusRouter.put(`/:id`, async (req, res) => {
  try {
    const results = await CensusController.updateCensus(req.body)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

CensusRouter.post('/excel', async (req, res) => {
  try {
    const results = await CensusController.createExcelReport(req.body)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

CensusRouter.post(`/`, async (req, res) => {
  try {
    const results = await CensusController.createCensus(req.body.employerId)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

// delete routes
CensusRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await CensusController.deleteCensus(req.body.employerId)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default CensusRouter