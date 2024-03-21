/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import TokenController from '../../../../Token/controllers/TokenController.js'
import Connection from '../../../object/Connection.js'

/**
 * @description
 * @param { object } connection 
 * @returns { Promise<object> }
 */
export default async function createConnection(employerId, tokenObject, mongoClient) {
  const collection = 'connections'
  const encryption = await TokenController.encryptToken(tokenObject.access_token)
  const connection = await Connection(employerId, encryption)
  const connectionDocument = await DatabaseController.insert(connection, collection, {}, mongoClient)
  return connectionDocument
}