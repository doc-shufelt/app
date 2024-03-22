/* imports */
import authenticateUser from './src/authenticateUser/authenticateUser.js';
import createUser from './src/createUser/createUser.js';
import getUserById from './src/getUserById/getUserById.js';
import editUser from './src/editUser/editUser.js';
import getUsers from './src/getUsers/getUsers.js';
const UserController = {
    authenticateUser,
    createUser,
    getUserById,
    editUser,
    getUsers
};
export default UserController;
