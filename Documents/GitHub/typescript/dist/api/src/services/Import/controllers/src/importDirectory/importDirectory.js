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
import ImportConfig from '../../../config/ImportConfig.js';
/**
 * @description this method executes the import from /directory endpoint
 * @param {string} token the finch long term auth token
 * @returns {Promise<array>} an arry of employee objects from /directory endpoint
 */
export default function importDirectory(token) {
    return __awaiter(this, void 0, void 0, function* () {
        var employeeList = [];
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.directory.endpoint;
        const options = {
            method: ImportConfig.endpoints.directory.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}`
            }
        };
        const results = yield fetch(endpoint, options);
        const directory = yield results.json();
        // select and clean the names of the properties we need from this endpoint
        for (let individual of directory.individuals) {
            let employee = {
                id: individual.id,
                firstName: individual.first_name,
                middleName: individual.middle_name,
                lastName: individual.last_name,
                active: individual.is_active
            };
            employeeList.push(employee);
        }
        return employeeList;
    });
}
