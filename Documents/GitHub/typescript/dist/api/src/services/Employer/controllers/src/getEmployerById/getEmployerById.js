/* imports */
import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
/**
 * @description
 * @param {string} employerId
 * @param {object} mongoClient
 * @returns { Promise<object> }
 */
export default function getEmployerById(employerId, mongoClient) {
    const collection = 'employers';
    const results = DatabaseController.findById(employerId, collection, {}, mongoClient);
    return results;
}
