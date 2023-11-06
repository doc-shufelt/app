/**
 *   App.Js
 */
import dotenv from 'dotenv'
dotenv.config( { path: '/Users/docshufelt/Documents/GitHub/official/.env' } )

import express from 'express'
import usersRouter from './api/routers/user.js'
import providersRouter from './api/routers/provider.js'
import employersRouter from './api/routers/employer.js'
import employeesRouter from './api/routers/employee.js'
import reportsRouter from './api/routers/report.js'
import importsRouter from './api/routers/import.js'
import authenticationsRouter from './api/routers/authentication.js'
// import healthCheck from './utilities/health.js'

const PORT = 8080
const app = express()

app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( '/users', usersRouter )
app.use( '/providers', providersRouter )
app.use( '/employers', employersRouter )
app.use( '/employees', employeesRouter )
app.use( '/providers', providersRouter )
app.use( '/reports', reportsRouter )
app.use( '/imports', importsRouter )
app.use( '/authentications', authenticationsRouter )

app.listen(PORT, () => {
    console.log( 'Listening on port ' + PORT )
})