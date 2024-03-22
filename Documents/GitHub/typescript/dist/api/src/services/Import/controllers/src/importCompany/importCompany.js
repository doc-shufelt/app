var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* import */
import ImportConfig from '../../../config/ImportConfig.js';
import Employer from '../../../../Employer/object/Employer.js';
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
/**
 * @description The controller to orchestrate importing an employer
 * @param {*} token the finch long term auth token
 * @returns { Promise<object> } A canonical
 */
export default function importCompany(token, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'employers';
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.company.endpoint;
        const options = {
            method: ImportConfig.endpoints.company.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}`
            }
        };
        const results = yield fetch(endpoint, options);
        const employer = yield Employer(yield results.json());
        const employerId = yield DatabaseController.insert(employer, collection, {}, mongoClient);
        return employerId;
    });
}
