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
import ImportController from '../../ImportController.js';
/**
 *
 * @param {paymentId} paymentId the stable id for the finch payment
 * @param {string} token
 * @returns {Promise<array>}
 */
export default function importStatement(paymentId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.statement.endpoint;
        const request = [{
                payment_id: paymentId
            }];
        const options = {
            method: ImportConfig.endpoints.statement.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                requests: request
            }),
        };
        const results = yield fetch(endpoint, options);
        const finchStatements = yield results.json();
        const statements = yield ImportController.processStatement(finchStatements.responses[0].body.pay_statements);
        return statements;
    });
}
