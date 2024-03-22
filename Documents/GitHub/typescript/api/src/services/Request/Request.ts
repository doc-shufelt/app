import { Logger } from "winston"
import { MongoClient } from "mongodb"
import { uuidv7 } from "uuidv7"
import DatabaseConnection from "../Database/DatabaseConnection"
import BluebirdLogger from "../Logger/class/BluebirdLogger"

export default class Request {

  readonly requestId: string
  readonly endpoint: string
  readonly body: object
  readonly params: object
  readonly query: object
  readonly mongoDbClient: MongoClient
  readonly logger: Logger
  readonly requestorIpAddress: string
  readonly timestamp: string

  constructor(
    endpoint: string, 
    body: object, 
    params: object, 
    query: object, 
    requestorIpAddress: string
    ) {
      this.requestId = uuidv7()
      this.endpoint = endpoint
      this.body = body
      this.params = params
      this.query = query
      this.requestorIpAddress = requestorIpAddress
      this.timestamp = new Date().toISOString()
      this.mongoDbClient = new DatabaseConnection()
      this.logger = new BluebirdLogger(this.mongoDbClient)
  }
}