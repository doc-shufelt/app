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
import UserController from '../controllers/UserController.js';
const UserRouter = express.Router();
UserRouter.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield UserController.getUsers(req.query, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
UserRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield UserController.getUserById(req.params, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
UserRouter.put(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield UserController.editUser(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
UserRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield UserController.createUser(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
UserRouter.post(`/login`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield UserController.authenticateUser(req.body.emailAddress, req.body.password, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        console.log(error);
        return res.status(error.statusCode).send(error);
    }
}));
export default UserRouter;
