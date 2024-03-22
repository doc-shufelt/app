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
import { ObjectId } from 'mongodb';
/**
 *
 * @param { string } documentId
 * @param { string } collection
 * @param { object } options
 * @returns { Promise<array> }
 */
export default function update(objectId, updateDocument, collectionName, options, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = yield mongoClient.db('bluebird').collection(collectionName);
        const filter = {
            "_id": new ObjectId(objectId)
        }; // build the mongodb-specific filter format from the _id passed in the updateDocument 
        delete updateDocument._id; // remove the id to avoid mongo's immutable property error
        const results = yield collection.findOneAndUpdate(filter, {
            $set: updateDocument
        }, options);
        return results;
    });
}
