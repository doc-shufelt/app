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
export default function editEmployer(updateDocument, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collectionName = 'employers';
        const options = {
            upsert: false,
            returnNewDocument: true,
            returnDocument: 'after'
        };
        const results = yield DatabaseController.update(updateDocument._id, updateDocument, collectionName, options, mongoClient);
        return results;
    });
}
