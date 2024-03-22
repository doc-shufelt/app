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
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
export default function getEmployeeById(employeeId, mongoClient, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'employees';
        logger.info('executing', {
            message: 'executing getEmployeesById',
            id: id
        });
        const results = yield DatabaseController.findById(id, collection, {}, mongoClient);
        return results;
    });
}
