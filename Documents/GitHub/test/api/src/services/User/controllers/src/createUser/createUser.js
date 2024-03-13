import User from '../../../object/User.js'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import UtilitiesHandler from '../../../../Import/utilities/UtilitiesHandler.js'
import bcrypt from 'bcryptjs'

export default async function registerUser( userInputs ) {
    try {
        const collection = 'users'
        // check to see if the email already exists
        const check = await DatabaseController.findByFilters( { emailAddress: userInputs.emailAddress }, collection )
        // return an error if the email exists
        if ( check.length > 0 ) {
            throw new Error( 'A user with that email already exists.')
        }
        // use bcrypt to hash the password
        var salt = bcrypt.genSaltSync( 10 )
        var hashedPassword = bcrypt.hashSync( userInputs.password, salt )
        userInputs.hashedPassword = hashedPassword
        // set the user properties
        const user = User( userInputs )
        // insert the user record and get the _id back
        const insertedUserId = await DatabaseController.insert( user, collection )
        // retrieve the full object just created
        const insertedUser = await DatabaseController.findById( { _id: insertedUserId.toString() }, collection )
        // delete the hashedPassword from the object before returning it
        delete insertedUser.hashedPassword
        // return the full user
        return insertedUser // find returns an array of objects; here we know there will only be one element
    } catch ( error ) {
        return error
    }
}