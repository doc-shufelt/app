var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import crypto from 'crypto';
/**
 * @description the function responsible for handling authentication token decryption
 * @param {object} connection the mongodb record containing the encrypted token, initialization vector and auth tag
 * @returns {Promise<string>} the string representation of the bare finch token
 */
export default function decryptToken(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const algorithm = process.env.ENCRYPTION_ALGORITHM;
        const key = process.env.ENCRYPTION_PRIVATE_KEY;
        var decipher = crypto.createDecipheriv(algorithm, key, connection.initializationVector);
        decipher.setAuthTag(Buffer.from(connection.authenticationTag, 'hex'));
        var decryptedToken = decipher.update(connection.encryptedToken, 'hex', 'utf-8');
        decryptedToken += decipher.final('utf-8');
        return decryptedToken;
    });
}
