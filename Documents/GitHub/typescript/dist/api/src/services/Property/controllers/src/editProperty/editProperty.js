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
import { MongoClient } from 'mongodb';
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
import PropertyConfig from '../../../config/PropertyConfig.js';
import Property from '../../../object/Property.js';
import PropertyController from '../../PropertyController.js';
/**
 * @param { object } updateDocument
 * @param {object} mongoClient
 * @returns
 */
export default function editProperty(updateDocument, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'properties';
        const transformMethods = PropertyConfig.methods.transformations;
        const validationMethods = PropertyConfig.methods.validations;
        const property = yield PropertyController.getPropertyById(updateDocument._id, mongoClient);
        const originalValue = property['propertyValue'];
        property.audit.pastValues.push(originalValue);
        property.propertyValue = updateDocument.propertyValue;
        yield PropertyController.transformProperty(property, transformMethods);
        yield PropertyController.validateProperty(property, validationMethods);
        const editedProperty = DatabaseController.update(property._id, property, collection, mongoClient);
        return editedProperty;
    });
}
