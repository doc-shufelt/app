import express from 'express'
import EmployeeController from '../controllers/EmployeeController.js'

const EmployeeRouter = express.Router()

// DEBUG routes
EmployeeRouter.get(`/`, async (req, res, next) => {
  try {
    const results = await EmployeeController.getEmployees(req.query, req.MongoDbSingletonInstance, req.Logger)
    return res.status(200).send(results)
  } catch (error) {

    return res.status(400).send(error)
  }
})

// get routes
EmployeeRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await EmployeeController.getEmployeeById(req.params.id, req.MongoDbSingletonInstance, req.Logger)
    return res.status(200).send(results)
  } catch (error) {
    const err = {
      name: error.name,
      message: error.message,
      stack: error.stack
    }
    req.Logger.error(err.message, {
      name: error.name
    })
    return res.status(400).send(err)
  }
})

// put routes
EmployeeRouter.put(`/delegate`, async (req, res) => {
  try {
    const results = await EmployeeController.delegateEmployeeAccess(req.body._id, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

EmployeeRouter.put(`/:id`, async (req, res) => {
  try {
    console.log(req.Logger)
    const results = await EmployeeController.editEmployee(req.body, req.MongoDbSingletonInstance, req.Logger)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)

  }
})

// post routes
EmployeeRouter.post(`/`, async (req, res) => {
  try {
    const results = await EmployeeController.createEmployee(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

// delete routes
EmployeeRouter.delete(`/:id`, async (req, res) => {
  try {
    const results = await EmployeeController.deleteEmployee(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default EmployeeRouter