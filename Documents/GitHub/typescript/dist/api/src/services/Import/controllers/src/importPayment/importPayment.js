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
import { sub, format } from 'date-fns';
/**
 *
 * @description This function calls Finch's employer/payment endpoint to retrieve the most recent payment run.
 * @param { string } token The connection's secure token
 * @returns { Promise<string> } A string containing the most recent payment run id
 */
export default function importPayment(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = ImportConfig.baseUrl + ImportConfig.endpoints.payment.endpoint;
        // initialize the start and end dates for the query parameters
        const endDate = format(new Date(), 'yyyy-MM-dd');
        const startDate = format(sub(endDate, {
            days: 60
        }), 'yyyy-MM-dd');
        const uri = endpoint + `?start_date=${startDate}&end_date=${endDate}`;
        const options = {
            method: ImportConfig.endpoints.payment.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': ImportConfig.apiVersion,
                'Authorization': `Bearer ${token}`
            }
        };
        const results = yield fetch(uri, options);
        const payment = yield results.json();
        console.log(payment);
        return {
            id: payment[0].id,
            startDate: payment[0].pay_period.start_date,
            endDate: payment[0].pay_period.end_date
        };
    });
}
