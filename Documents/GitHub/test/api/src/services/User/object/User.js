/**
 * @description
 * @param { object } user 
 * @returns { Promise<object> }
 */
export default function User( user ) {
    const User = {}
    Object.defineProperties( User, {
        firstName: {
            value: user.firstName,
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastName: {
            value: user.lastName,
            writable: true,
            configurable: false,
            enumerable: true
        }, 
        emailAddress: {
            value: user.emailAddress,
            writable: true,
            configurable: false,
            enumerable: true
        },
        hashedPassword: {
            value: user.hashedPassword,
            writable: true,
            configurable: true,
            enumerable: true
        },
        employerId: {
            value: null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        role: {
            value: 'owner',
            writable: true,
            configurable: false,
            enumerable: true
        },
        lastLogin: {
            value: null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        loginHistory: {
            value: null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        created: {
            value: new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    })
    return User
}