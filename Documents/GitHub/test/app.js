// import the express middleware
import express from 'express'
// import our routers
import AuditRouter from './api/src/services/Audit/router/AuditRouter.js'
import EmployeeRouter from './api/src/services/Employee/router/EmployeeRouter.js'
import EmployerRouter from './api/src/services/Employer/router/EmployerRouter.js'
import ImportRouter from './api/src/services/Import/router/ImportRouter.js'
import UserRouter from './api/src/services/User/router/UserRouter.js'
import PropertyRouter from './api/src/services/Property/router/PropertyRouter.js'
import CensusRouter from './api/src/services/Census/router/CensusRouter.js'
import ConnectionRouter from './api/src/services/Connection/router/ConnectionRouter.js'
import FinchRouter from './api/src/services/Finch/router/FinchRouter.js'

// import and initialize dotenv
import dotenv from 'dotenv'
dotenv.config( { path: '.env' } )

// define the default port
const PORT = 8080

// initialize an Express app
const app = express()

// mount some json-related middlewares onto the app
app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )

// mount our routers onto the app
app.use( `/audits`, AuditRouter )
app.use( `/employees`, EmployeeRouter )
app.use( `/employers`, EmployerRouter )
app.use( `/imports`, ImportRouter )
app.use( `/users`, UserRouter )
app.use( `/properties`, PropertyRouter )
app.use( `/censuses`, CensusRouter )
app.use( `/connections`, ConnectionRouter )
app.use( `/finch`, FinchRouter )

// listen on the default port
app.listen( PORT, () => {
    console.log( 'Listening on port ' + PORT )
})