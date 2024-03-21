// import the express middleware
import express from 'express'
// import the logging middleware
import initializeLogger from './api/src/services/Log/controllers/initializeLogger/initializeLogger.js'
// import our routers
import connectToDatabase from './api/src/utilities/database.js'
import EmployeeRouter from './api/src/services/Employee/router/EmployeeRouter.js'
import EmployerRouter from './api/src/services/Employer/router/EmployerRouter.js'
import ImportRouter from './api/src/services/Import/router/ImportRouter.js'
import UserRouter from './api/src/services/User/router/UserRouter.js'
import PropertyRouter from './api/src/services/Property/router/PropertyRouter.js'
import CensusRouter from './api/src/services/Census/router/CensusRouter.js'
import ConnectionRouter from './api/src/services/Connection/router/ConnectionRouter.js'
import ParserRouter from './api/src/services/Parser/router/ParserRouter.js'

// import and initialize dotenv
import dotenv from 'dotenv'
dotenv.config({
  path: '.env'
})

// set up a singleton instance of mongodb
const MongoDbSingletonInstance = await connectToDatabase()
const logger = await initializeLogger(MongoDbSingletonInstance)

// define the default port
const PORT = 8080

// initialize an Express app
const app = express()
// mount the mongodb singleton and the logger to the app request
app.request.MongoDbSingletonInstance = MongoDbSingletonInstance
app.request.Logger = logger

// mount some json-related middlewares onto the app
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// mount our routers onto the app
app.use(`/employees`, EmployeeRouter)
app.use(`/employers`, EmployerRouter)
app.use(`/imports`, ImportRouter)
app.use(`/users`, UserRouter)
app.use(`/properties`, PropertyRouter)
app.use(`/censuses`, CensusRouter)
app.use(`/connections`, ConnectionRouter)
app.use(`/parsers`, ParserRouter)

// listen on the default port
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})