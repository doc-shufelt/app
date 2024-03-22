import * as winston from 'winston'
import 'winston-mongodb'
import LogConfig from '../../config/LogConfig.js'

export default async function initializeLogger(mongoClient: MongoClient): Promise<Logger> {
  const infoLogger: winston.Logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
      service: 'something'
    },
    format: winston.format.combine(
      winston.format.errors({
        stack: true
      }),
      winston.format.timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
      }),
      winston.format.json()
    ),
    transports: [new winston.transports.MongoDB({
      db: mongoClient,
      dbName: 'bluebird',
      collection: 'logs',
      label: 'bluebird',
    })]
  })
  return infoLogger
}