var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../../../object/User.js';
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
import bcrypt from 'bcryptjs';
/**
 *
 * @param {object} credentials
 * @param {object} mongoClient
 * @returns {Promise<object>}
 */
export default function registerUser(credentials, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'users';
        const checkForExistingEmail = yield DatabaseController.findByFilters({
            emailAddress: credentials.emailAddress
        }, collection, mongoClient);
        if (checkForExistingEmail.length > 0) {
            throw new Error('A user with that email already exists.');
        }
        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(credentials.password, salt);
        credentials.hashedPassword = hashedPassword;
        const user = User(credentials);
        const insertedUserId = yield DatabaseController.insert(user, collection, mongoClient);
        const insertedUser = yield DatabaseController.findById({
            _id: insertedUserId.toString()
        }, collection, mongoClient);
        delete insertedUser.hashedPassword;
        return insertedUser;
    });
}
