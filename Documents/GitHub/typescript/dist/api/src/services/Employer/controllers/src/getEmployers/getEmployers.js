import DatabaseController from '../../../../Database/controllers/DatabaseController.js';
/**
 * @description
 * @param { object } filters
 * @returns { Promise<array> }
 */
export default function getEmployers(filters, mongoClient) {
    const collection = 'employers';
    const results = DatabaseController.findByFilters(filters, collection, {}, mongoClient);
    return results;
}
