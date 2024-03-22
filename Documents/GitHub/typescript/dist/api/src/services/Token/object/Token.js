/**
 *
 * @param {object} token
 * @returns {Promise<object>}
 */
export default function Token(token) {
    var _a, _b, _c, _d, _e, _f, _g;
    const Token = {};
    Object.defineProperties(Token, {
        _id: {
            value: (_a = token._id) !== null && _a !== void 0 ? _a : null,
            write: false,
            configurable: false,
            enumerable: true
        },
        encryptedToken: {
            value: (_b = token.encryptedToken) !== null && _b !== void 0 ? _b : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        initializationVector: {
            value: (_c = token.initializationVector) !== null && _c !== void 0 ? _c : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastUsed: {
            value: (_d = token.lastUsed) !== null && _d !== void 0 ? _d : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastRefreshed: {
            value: (_e = token.lastRefreshed) !== null && _e !== void 0 ? _e : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        created: {
            value: (_f = token.created) !== null && _f !== void 0 ? _f : new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: (_g = token.modified) !== null && _g !== void 0 ? _g : new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    });
    return Token;
}
