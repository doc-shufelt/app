import { uuidv7 } from "uuidv7";
import DatabaseController from "../Database/controllers/DatabaseController";
import LoggerController from "../Logger/controllers/LoggerController";
export default class Request {
    constructor(endpoint, body, params, query, requestorIpAddress) {
        this.requestId = uuidv7();
        this.endpoint = endpoint;
        this.body = body;
        this.params = params;
        this.query = query;
        this.requestorIpAddress = requestorIpAddress;
        this.timestamp = new Date().toISOString();
        this.mongoDbClient = DatabaseController.connectToDatabase();
        this.logger = LoggerController.initializeLogger(this.mongoDbClient);
    }
}
