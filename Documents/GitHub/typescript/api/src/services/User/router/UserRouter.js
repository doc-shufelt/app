import express from 'express'
import UserController from '../controllers/UserController.js'

const UserRouter = express.Router()

UserRouter.get(`/`, async (req, res) => {
  try {
    const results = await UserController.getUsers(req.query, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

UserRouter.get(`/:id`, async (req, res) => {
  try {
    const results = await UserController.getUserById(req.params, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

UserRouter.put(`/`, async (req, res) => {
  try {
    const results = await UserController.editUser(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

UserRouter.post(`/`, async (req, res) => {
  try {
    const results = await UserController.createUser(req.body, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

UserRouter.post(`/login`, async (req, res) => {
  try {
    const results = await UserController.authenticateUser(req.body.emailAddress, req.body.password, req.MongoDbSingletonInstance)
    return res.status(200).send(results)
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode).send(error)
  }
})

export default UserRouter