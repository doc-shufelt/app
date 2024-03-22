/**
 * Employer Controller
 */
import createEmployer from '../controllers/src/createEmployer/createEmployer.js';
import editEmployer from './src/editEmployer/editEmployer.js';
import deleteEmployer from '../controllers/src/deleteEmployer/deleteEmployer.js';
import getEmployers from '../controllers/src/getEmployers/getEmployers.js';
import getEmployerById from '../controllers/src/getEmployerById/getEmployerById.js';
const EmployerController = {
    createEmployer,
    editEmployer,
    deleteEmployer,
    getEmployers,
    getEmployerById
};
export default EmployerController;
