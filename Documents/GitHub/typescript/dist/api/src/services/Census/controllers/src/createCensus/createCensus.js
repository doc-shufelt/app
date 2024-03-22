var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* imports */
import EmployerController from '../../../../Employer/controllers/EmployerController.js';
import EmployeeController from '../../../../Employee/controllers/EmployeeController.js';
import CensusController from '../../../../Census/controllers/CensusController.js';
import UserController from '../../../../User/controllers/UserController.js';
import Census from '../../../object/Census.js';
export default function createCensus(employerId, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const employer = yield EmployerController.getEmployerById(employerId, mongoClient);
        const employees = yield EmployeeController.getEmployees({
            employerId: employerId
        }, mongoClient);
        const authorizedUser = yield UserController.getUserById(employer.authorizedUserId, mongoClient);
        const agent = {
            firstName: 'Ryan',
            lastName: 'McBride',
            phoneNumber: '(919)322-1234',
            emailAddress: 'ryan@bluebirdbenefits.io'
        };
        const census = yield Census(employer, authorizedUser, agent, employees);
        yield CensusController.createExcelReport(census);
        return census;
    });
}
