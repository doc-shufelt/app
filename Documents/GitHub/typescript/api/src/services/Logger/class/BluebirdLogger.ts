import * as winston from 'winston'
import 'winston-mongodb'
import DatabaseConnection from "../../Database/DatabaseConnection";
import {MongoClient} from 'mongodb'

export default class BluebirdLogger {
  constructor(
    readonly connection: DatabaseConnection,
    readonly mongoClient: MongoClient
    ) {
    const logger = winston.createLogger({
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
  }
}