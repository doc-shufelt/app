/* imports */
import Employer from '../../../object/Employer.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param {object} newDocument 
 * @param {object} mongoClient the singleton instance of mongodb
 * @returns { object }
 */
export default async function createEmployer(document, mongoClient) {
  const collectionName = 'employers'
  const employer = Employer(document)
  const results = await DatabaseController.insert(employer, collectionName, {}, mongoClient)
  return results
}