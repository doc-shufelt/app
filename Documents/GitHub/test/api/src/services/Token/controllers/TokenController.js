/* imports */
import deactivateToken from './src/deactivateToken/deactivateToken.js'
import encryptToken from './src/encryptToken/encryptToken.js'
import decryptToken from './src/decryptToken/decryptToken.js'
import refreshToken from './src/refreshToken/refreshToken.js'

const TokenController = {
  deactivateToken,
  encryptToken,
  decryptToken,
  refreshToken
}

export default TokenController