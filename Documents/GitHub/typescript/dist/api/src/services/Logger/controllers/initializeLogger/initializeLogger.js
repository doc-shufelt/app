var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as winston from 'winston';
import 'winston-mongodb';
export default function initializeLogger(mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const infoLogger = winston.createLogger({
            level: 'info',
            defaultMeta: {
                service: 'something'
            },
            format: winston.format.combine(winston.format.errors({
                stack: true
            }), winston.format.timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            }), winston.format.json()),
            transports: [new winston.transports.MongoDB({
                    db: mongoClient,
                    dbName: 'bluebird',
                    collection: 'logs',
                    label: 'bluebird',
                })]
        });
        return infoLogger;
    });
}
