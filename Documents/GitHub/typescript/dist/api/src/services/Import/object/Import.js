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
 * @param { object } request
 * @returns { Promise<object> }
 */
export default function Import(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const Import = {};
        Object.defineProperties(Import, {
            employerId: {
                value: (request.hasOwnProperty('employerId') || request.employerId != null) ? request.employerId : null,
                writable: true,
                configurable: false,
                enumerable: true
            },
            userId: {
                value: (request.hasOwnProperty('userId') || request.userId != null) ? request.userId : null,
                writable: false,
                configurable: false,
                enumerable: true
            },
            authorizationCode: {
                value: (request.hasOwnProperty('authorizationCode') || request.authorizationCode != null) ? request.authorizationCode : null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            status: {
                value: (request.hasOwnProperty('status') || request.status != null) ? request.status : 'processing',
                writable: true,
                configurable: false,
                enumerable: true
            },
            activeProcess: {
                value: (request.hasOwnProperty('activeProcess') || request.activeProcess != null) ? request.activeProcess : 'Generate a Finch Token',
                writable: true,
                configurable: false,
                enumerable: true
            },
            completedProcesses: {
                value: (request.hasOwnProperty('completedProcesses') || request.completedProcesses != null) ? request.completedProcesses : [],
                writable: true,
                configurable: false,
                enumerable: true
            },
            startTime: {
                value: (request.hasOwnProperty('startTime') || request.startTime != null) ? request.startTime : new Date().toISOString(),
                writable: false,
                configurable: false,
                enumerable: true
            },
            endTime: {
                value: (request.hasOwnProperty('endTime') || request.endTime != null) ? request.endTime : new Date().toISOString(),
                writable: true,
                configurable: false,
                enumerable: true
            }
        });
        return Import;
    });
}
