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
 * @param {string} token
 * @param {array} directory
 * @returns { Promise<array> }
 */
export default function importEmployment(token, directory) {
    return __awaiter(this, void 0, void 0, function* () {
        const employeeList = [];
        const directoryIds = []; // need to format the employeeList to conform to the request body requirements
        for (const employee of directory) {
            directoryIds.push({
                individual_id: employee.id
            });
        }
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.employment.endpoint;
        const options = {
            method: ImportConfig.endpoints.employment.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}` // FIX THIS - ONLY DID IT FOR TESTING
            },
            body: JSON.stringify({
                requests: directoryIds
            })
        };
        const results = yield fetch(endpoint, options);
        const employmentData = yield results.json();
        for (let individual of employmentData.responses) {
            let employee = {
                id: individual.body.id,
                jobTitle: individual.body.title,
                employmentType: individual.body.employment.type,
                employmentSubtype: individual.body.employment.subtype,
                startDate: individual.body.start_date,
                endDate: individual.body.end_date,
                classCode: individual.body.class_code,
                income: individual.body.income.amount,
                unit: individual.body.income.unit,
                currency: individual.body.income.currency
            };
            employeeList.push(employee);
        }
        return employeeList;
    });
}
