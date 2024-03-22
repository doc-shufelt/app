var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import ConnectionController from '../controllers/ConnectionController.js';
const ConnectionRouter = express.Router();
// post route
ConnectionRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ConnectionController.createConnection(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack));
    }
}));
// post route
ConnectionRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ConnectionController.getConnectionByEmployerId(req.params, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack));
    }
}));
// delete route
ConnectionRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ConnectionController.deactivateConnection(req.params, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(401).send(new GenericBluebirdError(error.name, error.message, error.stack));
    }
}));
export default ConnectionRouter;
