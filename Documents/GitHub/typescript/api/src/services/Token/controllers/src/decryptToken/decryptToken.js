import crypto from 'crypto'
/**
 * @description the function responsible for handling authentication token decryption 
 * @param {object} connection the mongodb record containing the encrypted token, initialization vector and auth tag
 * @returns {Promise<string>} the string representation of the bare finch token
 */
export default async function decryptToken(connection) {
  const algorithm = process.env.ENCRYPTION_ALGORITHM
  const key = process.env.ENCRYPTION_PRIVATE_KEY
  var decipher = crypto.createDecipheriv(algorithm, key, connection.initializationVector)
  decipher.setAuthTag(Buffer.from(connection.authenticationTag, 'hex'));
  var decryptedToken = decipher.update(connection.encryptedToken, 'hex', 'utf-8')
  decryptedToken += decipher.final('utf-8')
  return decryptedToken
}