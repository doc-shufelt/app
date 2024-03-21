/* imports */
import createConnection from './src/createConnection/createConnection.js'
import deactivateConnection from './src/deactivateConnection/deactivateConnection..js'
import getConnectionByEmployerId from './src/getConnectionByEmployerId/getConnectionByEmployerId.js'

const ConnectionController = {
  createConnection,
  deactivateConnection,
  getConnectionByEmployerId
}

export default ConnectionController