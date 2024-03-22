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
 *
 * @param { object } directory
 * @param { string } token
 * @returns
 */
export default function importIndividual(token, directory) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const employeeList = []; // an array to hold the collection of cleaned employee records
        const directoryIds = []; // need to format the employeeList to conform to the request body requirements
        for (const employee of directory) {
            directoryIds.push({
                individual_id: employee.id
            });
        }
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.individual.endpoint;
        const options = {
            method: ImportConfig.endpoints.individual.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                requests: directoryIds
            }, {
                include: 'ssn'
            }),
        };
        const results = yield fetch(endpoint, options);
        const individuals = yield results.json();
        for (let individual of individuals.responses) {
            let employee = {
                id: individual.body.id,
                emailAddress: (_a = individual.body.emails[0].data) !== null && _a !== void 0 ? _a : null,
                phoneNumber: (_b = individual.body.phone_numbers[0].data) !== null && _b !== void 0 ? _b : null,
                addressOne: individual.body.residence.line1,
                addressTwo: individual.body.residence.line2,
                city: individual.body.residence.city,
                state: individual.body.residence.state,
                postalCode: individual.body.residence.postal_code,
                gender: individual.body.gender,
                ethnicity: individual.body.ethnicity,
                dateOfBirth: individual.body.dob,
                ssn: individual.body.ssn
            };
            employeeList.push(employee);
        }
        return employeeList; // array of objects
    });
}
