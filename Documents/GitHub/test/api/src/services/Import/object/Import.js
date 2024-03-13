/**
 * @description
 * @param { object } request 
 * @returns { Promise<object> }
 */
export default async function Import ( request ) {
    const Import = {}
    Object.defineProperties( Import, {
        employerId: {
            value: ( request.hasOwnProperty( 'employerId' ) || request.employerId != null ) ? request.employerId: null,
            writable: false,
            configurable: false,
            enumerable: true
        },
        userId: {
            value: ( request.hasOwnProperty( 'userId' ) || request.userId != null ) ? request.userId : null,
            writable: false,
            configurable: false,
            enumerable: true
        },
        authorizationCode: {
            value: ( request.hasOwnProperty( 'authorizationCode' ) || request.authorizationCode != null ) ? request.authorizationCode : null,
            writable: false,
            configurable: false,
            enumerable: false
        },
        status: {
            value: ( request.hasOwnProperty( 'status' ) || request.status != null ) ? request.status : 'new',
            writable: true,
            configurable: false,
            enumerable: true
        },
        activeProcess: {
            value: ( request.hasOwnProperty( 'activeProcess' ) || request.activeProcess != null ) ? request.activeProcess : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        completedProcesses: {
            value: ( request.hasOwnProperty( 'completedProcesses' ) || request.completedProcesses != null ) ? request.completedProcesses : new Array(),
            writable: true,
            configurable: false,
            enumerable: true
        },
        created: {
            value: ( request.hasOwnProperty( 'created' ) || request.created != null ) ? request.created : new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: ( request.hasOwnProperty( 'modified' ) || request.modified != null ) ? request.modified : new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    })
    return Import
}