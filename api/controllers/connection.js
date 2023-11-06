/**
 * Connections Controller
 */

import { sendHttpRequest } from "../utilities/http/http.js"
import { insert } from '../utilities/mongodb/wrapper.js'
import { crypto } from 'crypto'


export async function generateFinchToken( request ) {

const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

//Encrypting text
function encryptToken(text) {
   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
   let encrypted = cipher.update(text)
   encrypted = Buffer.concat([encrypted, cipher.final()])
   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
}

// Decrypting text
function decrypt(text) {
   let iv = Buffer.from(text.iv, 'hex');
   let encryptedText = Buffer.from(text.encryptedData, 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}
    /*
        request = {
            code: code,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET
        }
    */
    const params = {
        method: 'POST',
        resource: 'auth/token',
        body: request
    }

    const results = sendHttpRequest( params )
    const token = results.access_token
    const encryptedToken = bcrypt.hashSync( token, 4)
    // encrypt token
    // save token to mongo
    return encryptedToken

}

export async function saveConnection( connection ) {
    /*
    connection = {
        employerId,
        encryptedHash
    }
    */
}

//Encrypting text
async function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }
 
 // Decrypting text
 function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
 }