
export default function Token( token ) {
    const Token = {}
    Object.defineProperties( Token, {
        _id: {
            value: token._id ?? null,
            write: false,
            configurable: false,
            enumerable: true
        },
        encryptedToken: {
            value: token.encryptedToken ?? null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        initializationVector: {
            value: token.initializationVector ?? null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastUsed: {
            value: token.lastUsed ?? null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastRefreshed: {
            value: token.lastRefreshed ?? null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        created: {
            value: token.created ?? new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: token.modified ?? new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    })
    return Token
}