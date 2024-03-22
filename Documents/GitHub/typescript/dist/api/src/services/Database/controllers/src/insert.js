var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param {object} document
 * @param {string} collectionName
 * @param {object} options
 * @param {object} mongoClient
 * @returns {Promise<string>}
 */
export default function insert(document, table, options, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = yield mongoClient.db('bluebird').collection(collectionName);
        const results = yield collection.insertOne(document, options);
        return results.insertedId.toString();
    });
}
