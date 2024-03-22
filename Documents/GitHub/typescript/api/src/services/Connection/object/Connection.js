/**
 * @description
 * @param { object } connection 
 * @returns { Promise<object> }
 */
export default async function Connection(employerId, connection) {
  const Connection = {}
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
      value: connection.lastUsed ?? new Date().toISOString(),
      writable: false,
      configurable: false,
      enumerable: true
    },
    created: {
      value: connection.created ?? new Date().toISOString(),
      writable: false,
      configurable: false,
      enumerable: true
    },
    modified: {
      value: connection.modified ?? new Date().toISOString(),
      writable: true,
      configurable: false,
      enumerable: true
    }
  })
  return Connection
}