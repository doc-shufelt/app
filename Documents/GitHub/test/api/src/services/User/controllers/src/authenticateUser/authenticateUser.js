/* imports */
import bcrypt from 'bcryptjs'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'

/**
 * @description
 * @param { string } email 
 * @param { string } password 
 * @returns { Promise<object> }
 */
export default async function authenticateUser( emailAddress, password ) {
    try {
        // check the database for a user with this email
        const filter = { emailAddress: emailAddress }
        const user = await DatabaseController.findByFilters( filter, 'users' )
        if ( user instanceof Error ) {
            throw new Error( 'The username is not valid.')
        }
        // check whether the password is correct
        const hash = user[0].hashedPassword  
        const authorize = await bcrypt.compare( password, hash )
        if ( ! authorize ) {
            throw new Error( 'The password is incorrect.')
        }
        // update the last login property on the user record in mongodb
        const updateDocument = { lastLogin: new Date().toISOString() }
        const updatedUser = await DatabaseController.update( user[0]._id, updateDocument, 'users' )
        // remove the hashed password from the return body
        delete updatedUser.hashedPassword 
        // return the User
        return updatedUser
    } catch ( error ) {
        return error
    }
}