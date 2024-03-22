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
 * @param { object } user
 * @returns { Promise<object> }
 */
export default function User(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const User = {};
        Object.defineProperties(User, {
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
        });
        return User;
    });
}
