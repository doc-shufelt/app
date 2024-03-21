/* imports */
import express from 'express'
import EmployerController from '../controllers/EmployerController.js'
import EmployeeController from '../../Employee/controllers/EmployeeController.js'
import handleError from '../../Error/controllers/handleError/handleError.js'

const EmployerRouter = express.Router()

// get routes
EmployerRouter.get(`/`, async (req, res) => {
  try {
    const results = await EmployerController.getEmployers(req.query, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployerRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await EmployerController.getEmployerById(req.params.id, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployerRouter.get('/:id/employees', async (req, res) => {
  try {
    const results = await EmployeeController.getEmployees({
      employerId: req.params.id,

    }, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployerRouter.put(`/:id`, async (req, res) => {
  try {
    const results = await EmployerController.updateEmployer(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployerRouter.post(`/`, async (req, res) => {
  try {
    const results = await EmployerController.createEmployer(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployerRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await EmployerController.deleteEmployer(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default EmployerRouter