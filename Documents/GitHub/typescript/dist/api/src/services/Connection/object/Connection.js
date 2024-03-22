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
 * @description
 * @param { object } connection
 * @returns { Promise<object> }
 */
export default function Connection(employerId, connection) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const Connection = {};
        Object.defineProperties(Connection, {
            employerId: {
                value: employerId,
                writable: false,
                configurable: false,
                enumerable: true
            },
            encryptedToken: {
                value: connection.encryptedToken,
                writable: false,
                configurable: false,
                enumerable: true
            },
            initializationVector: {
                value: connection.initializationVector,
                writable: false,
                configurable: false,
                enumerable: true
            },
            authenticationTag: {
                value: connection.authenticationTag,
                writable: false,
                configurable: false,
                enumerable: true
            },
            lastUsed: {
                value: (_a = connection.lastUsed) !== null && _a !== void 0 ? _a : new Date().toISOString(),
                writable: false,
                configurable: false,
                enumerable: true
            },
            created: {
                value: (_b = connection.created) !== null && _b !== void 0 ? _b : new Date().toISOString(),
                writable: false,
                configurable: false,
                enumerable: true
            },
            modified: {
                value: (_c = connection.modified) !== null && _c !== void 0 ? _c : new Date().toISOString(),
                writable: true,
                configurable: false,
                enumerable: true
            }
        });
        return Connection;
    });
}
