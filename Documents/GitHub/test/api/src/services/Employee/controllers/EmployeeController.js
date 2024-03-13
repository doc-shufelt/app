/**
 * Employee Controller
 */
import createEmployee from '../controllers/src/createEmployee/createEmployee.js'
import editEmployee from '../controllers/src/editEmployee/editEmployee.js'
import deleteEmployee from '../controllers/src/deleteEmployee/deleteEmployee.js'
import getEmployees from '../controllers/src/getEmployees/getEmployees.js'
import getEmployeeById from '../controllers/src/getEmployeeById/getEmployeeById.js'
import delegateEmployeeAccess from '../controllers/src/delegateEmployeeAccess/delegateEmployeeAccess.js'

const EmployeeController = {
    createEmployee,
    editEmployee,
    deleteEmployee,
    getEmployees,
    getEmployeeById,
    delegateEmployeeAccess
}

export default EmployeeController