var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FinchConfig from '../../config/FinchConfig.js';
/**
 * @description A controller responsible for converting a finch authorization code to a token using /auth/token
 * @param {string} authorizationCode The finch authorization code returned from Finch Connect to our redirect url
 * @returns {Promise<object>} The finch long term api token object
 */
export default function generateFinchToken(authorizationCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = FinchConfig.baseUrl + FinchConfig.endpoints.token.endpoint;
        const options = {
            method: FinchConfig.endpoints.token.method,
            headers: {
                'Content-Type': 'application/json',
                'Finch-Api-Version': FinchConfig.apiVersion
            },
            body: JSON.stringify({
                client_id: process.env.FINCH_CLIENT_ID,
                client_secret: process.env.FINCH_CLIENT_SECRET,
                code: authorizationCode,
                redirect_uri: FinchConfig.redirectUri.development,
                sandbox: true
            })
        };
        const results = yield fetch(endpoint, options);
        return results.json();
    });
}
