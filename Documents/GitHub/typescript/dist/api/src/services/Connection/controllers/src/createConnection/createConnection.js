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
import TokenController from '../../../../Token/controllers/TokenController.js';
import Connection from '../../../object/Connection.js';
/**
 * @description
 * @param { object } connection
 * @returns { Promise<object> }
 */
export default function createConnection(employerId, tokenObject, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'connections';
        const encryption = yield TokenController.encryptToken(tokenObject.access_token);
        const connection = yield Connection(employerId, encryption);
        const connectionDocument = yield DatabaseController.insert(connection, collection, {}, mongoClient);
        return connectionDocument;
    });
}
