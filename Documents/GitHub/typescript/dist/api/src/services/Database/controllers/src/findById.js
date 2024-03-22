var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectId } from 'mongodb';
export default function findById(documentId, collectionName, projection, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = yield mongoClient.db('bluebird').collection(collectionName);
        const filterById = {
            "_id": new ObjectId(documentId)
        };
        const results = yield collection.findOne(filterById, projection);
        return results;
    });
}
