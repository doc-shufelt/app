var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient, ServerApiVersion } from 'mongodb';
export default function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = process.env.MONGODB_USER;
        const password = process.env.MONGODB_PASSWORD;
        const cluster = process.env.MONGODB_CLUSTER;
        const uri = `mongodb+srv://${user}:${password}@cluster0.${cluster}.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        return client;
    });
}
