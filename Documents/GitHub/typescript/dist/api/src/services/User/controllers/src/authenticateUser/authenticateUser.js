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
import bcrypt from 'bcryptjs';
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
import AuthenticationError from '../../../../Error/classes/src/AuthenticationError.js';
/**
 * @description
 * @param { string } email
 * @param { string } password
 * @returns { Promise<object> }
 */
export default function authenticateUser(emailAddress, password, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = 'users';
        const filter = {
            emailAddress: emailAddress
        };
        const user = yield DatabaseController.findByFilters(filter, collection, {}, mongoClient);
        if (!user) {
            throw new AuthenticationError('The username is not valid.');
        }
        // check whether the password is correct
        const hash = user[0].hashedPassword;
        const authorize = yield bcrypt.compare(password, hash);
        if (!authorize) {
            throw new AuthenticationError('The password is incorrect.');
        }
        // update the last login property on the user record in mongodb
        const updateDocument = {
            lastLogin: new Date().toISOString()
        };
        const updatedUser = yield DatabaseController.update(user[0]._id, updateDocument, collection, mongoClient);
        delete updatedUser.hashedPassword;
        return updatedUser;
    });
}
