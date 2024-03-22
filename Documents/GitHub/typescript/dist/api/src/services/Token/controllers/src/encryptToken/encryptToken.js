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
import crypto from 'crypto';
/**
 * @description This function encrypts the finch api token prior to saving to mongodb
 * @param {string} rawToken The raw token returned from generateFinchToken
 * @returns {Promise<object>} An object containing the initialization vector and encrypted token
 */
export default function encryptToken(rawToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const algorithm = process.env.ENCRYPTION_ALGORITHM;
        const key = process.env.ENCRYPTION_PRIVATE_KEY;
        const initializationVector = crypto.randomBytes(12).toString('base64');
        const cipher = crypto.createCipheriv(algorithm, key, initializationVector);
        let encryptedToken = cipher.update(rawToken, 'utf-8', 'hex');
        encryptedToken += cipher.final('hex');
        const tag = cipher.getAuthTag().toString('hex');
        const tokenObject = {
            initializationVector: initializationVector,
            encryptedToken: encryptedToken,
            authenticationTag: tag
        };
        return tokenObject;
    });
}
