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
import Import from '../../../object/Import.js';
import ConnectionController from '../../../../Connection/controllers/ConnectionController.js';
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
import EmployerController from '../../../../Employer/controllers/EmployerController.js';
import UtilitiesHandler from '../../../utilities/UtilitiesHandler.js';
import ImportController from '../../../../Import/controllers/ImportController.js';
import FinchController from '../../../../Finch/controllers/FinchController.js';
import PropertyController from '../../../../Property/controllers/PropertyController.js';
import EmployeeController from '../../../../Employee/controllers/EmployeeController.js';
import UserController from '../../../../User/controllers/UserController.js';
import CensusController from '../../../../Census/controllers/CensusController.js';
/**
 * @description
 * @param { string } authorizationCode The finch authorization code to trade for a token
 * @param { string } userId The unique identifier of the user who initiated the import
 * @returns
 */
export default function executeImport(request, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        // initialize an import object to track our progress
        const importTracker = yield Import(request);
        console.log(importTracker.activeProcess);
        // save the tracker to mongo
        const importTrackerId = yield DatabaseController.insert(importTracker, 'imports', {}, mongoClient);
        // trade the authorization code from finch for a long-term token
        const token = yield FinchController.generateFinchToken(request.authorizationCode);
        // update the importTracker
        importTracker.completedProcesses.push('Generated Finch Token');
        importTracker.activeProcess = 'import Finch /company endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /company endpoint  
        const companyId = yield ImportController.importCompany(token.access_token, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('imported Finch /company endpoint');
        importTracker.activeProcess = 'encrypt and store Finch token';
        importTracker.employerId = companyId;
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // update the user record to populate the employerId
        UserController.editUser({
            _id: request.userId,
            employerId: companyId
        }, mongoClient);
        // set up and store the employer connection details
        yield ConnectionController.createConnection(companyId, token, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('encrypted and stored Finch token');
        importTracker.activeProcess = 'import Finch /directory endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /directory endpoint
        const directory = yield ImportController.importDirectory(token.access_token);
        // update the importTracker
        importTracker.completedProcesses.push('imported Finch /directory endpoint');
        importTracker.activeProcess = 'import Finch /individual endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /individual endpoint
        const individual = yield ImportController.importIndividual(token.access_token, directory);
        // update the importTracker
        importTracker.completedProcesses.push('import Finch /individual endpoint');
        importTracker.activeProcess = 'import Finch /employment endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /employment endpoint
        const employment = yield ImportController.importEmployment(token.access_token, directory);
        // update the importTracker
        importTracker.completedProcesses.push('imported Finch /employment endpoint');
        importTracker.activeProcess = 'import Finch /payment endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /payment endpoint
        const payment = yield ImportController.importPayment(token.access_token);
        // update the importTracker
        importTracker.completedProcesses.push('imported Finch /payment endpoint');
        importTracker.activeProcess = 'import Finch /pay-statement endpoint';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // call the finch /pay-statements endpoint
        const statement = yield ImportController.importStatement(payment.id, token.access_token);
        // update the importTracker
        importTracker.completedProcesses.push('imported Finch /pay-statement endpoint');
        importTracker.activeProcess = 'infer company pay cycle';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // infer the pay cycle from the pay period dates
        const inferredPayCycle = yield UtilitiesHandler.inferPayCycle(payment.startDate, payment.endDate);
        // update the importTracker
        importTracker.completedProcesses.push('inferred employer pay cycle');
        importTracker.activeProcess = 'edit employer record to reflect pay cycle';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // update the employer document to reflect the pay cycle
        EmployerController.editEmployer({
            _id: companyId,
            payCycle: inferredPayCycle,
            authorizedUserId: request.userId,
        }, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('edited employer record to reflect pay cycle');
        importTracker.activeProcess = 'join employee data from Finch sources';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // combine the employee data returned from the various finch endpoints
        const employees = yield ImportController.mergeEmployeeData(directory, individual, employment, statement, companyId);
        // update the importTracker
        importTracker.completedProcesses.push('joined employee data from Finch sources');
        importTracker.activeProcess = 'save employee records to database';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // save the employee objects to mongodb
        const Employees = yield EmployeeController.createEmployeeBulk(employees, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('saved employee records to database');
        importTracker.activeProcess = 'create census property objects';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // transform the employee profiles into property-level object
        const properties = yield PropertyController.makeProperties(Employees, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('created census property objects');
        importTracker.activeProcess = 'save census properties to database';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // save the property objects to mongodb
        yield PropertyController.savePropertyBulk(properties, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('saved census properties to database');
        importTracker.activeProcess = 'create champ census';
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // create the census
        yield CensusController.createCensus(companyId, mongoClient);
        // update the importTracker
        importTracker.completedProcesses.push('created champ census successfully');
        importTracker.activeProcess = 'none';
        importTracker.status = 'complete';
        importTracker.endTime = new Date().toISOString();
        ImportController.editImportTracker(importTrackerId, importTracker, mongoClient);
        console.log(importTracker.activeProcess);
        // return the import tracker
        return importTracker;
    });
}
