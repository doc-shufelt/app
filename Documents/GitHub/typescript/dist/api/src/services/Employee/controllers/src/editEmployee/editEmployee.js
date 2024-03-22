var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
import EmployeeConfig from '../../../config/EmployeeConfig.js';
export default function editEmployee(employeeId, updateDocument, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = EmployeeConfig.collection;
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after'
        };
        const results = yield DatabaseController.update(employeeId, updateDocument, collection, options, mongoClient);
        return results;
    });
}
