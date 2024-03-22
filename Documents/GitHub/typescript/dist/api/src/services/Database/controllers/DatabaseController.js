/* imports */
import findByFilters from './src/findByFilters.js';
import findById from './src/findById.js';
import insert from './src/insert.js';
import update from './src/update.js';
import insertBulk from './src/insertBulk.js';
import connectToDatabase from './src/connect.js';
const DatabaseController = {
    findByFilters,
    findById,
    insert,
    insertBulk,
    update,
    connectToDatabase
};
export default DatabaseController;
