import FlagConfig from '../config/config.js'
/**
 * @description
 * @param { string } propertyId 
 * @param { string } flagType 
 * @returns { Promise<object> }
 */
export default function Flag( flag ) {
    const Flag = {}
    Object.defineProperties( Flag, {
        code: {
            value: code,
            writable: false,
            configurable: false,
            enumerable: true
        },
        name: {
            value: null,  // TO-DO get from config
            writable: false,
            configurable: false,
            enumerable: false
        },
        description: {
            value: null,  // TO-DO get from config
            writable: false,
            configurable: false,
            enumerable: true
        },
        propertyId: {
            value: flag.propertyId,
            writable: false,
            configurable: false,
            enumerable: true
        },
        overridden: {
            value: false,
            writable: true,
            configurable: false,
            enumerable: true
        },
        created: {
            value: flag.created && new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: flag.modified && new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    })
    return Flag
}