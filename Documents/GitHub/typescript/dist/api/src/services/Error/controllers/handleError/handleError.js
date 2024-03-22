var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AuthenticationError from '../../classes/src/AuthenticationError.js';
import RouteNotSupportedError from '../../classes/src/RouteNotSupportedError.js';
import RequestValidationError from '../../classes/src/RequestValidationError.js';
/**
 *
 * @param { object } error
 * @param { object } req
 * @param { object } res
 * @param {*} next
 */
export default function handleError(error) {
    return __awaiter(this, void 0, void 0, function* () {
        if (error instanceof RequestValidationError) {
            return new ResourceNotFoundError(error);
        }
        if (error instanceof RouteNotSupportedError) {
            return new ResourceNotFoundError(error);
        }
        if (error instanceof AuthenticationError) {
            return new AuthenticationError(error);
        }
    });
}
