import FlagConfig from '../config/FlagConfig.js'
/**
 * @description
 * @param { string } propertyId 
 * @param { string } flagType 
 * @returns { Promise<object> }
 */
export default function Flag(type) {
  const Flag = {}
  Object.defineProperties(Flag, {
    code: {
      value: FlagConfig[type],
      writable: false,
      configurable: false,
      enumerable: true
    },
    description: {
      value: FlagConfig[type].description,
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
  return Flag
}