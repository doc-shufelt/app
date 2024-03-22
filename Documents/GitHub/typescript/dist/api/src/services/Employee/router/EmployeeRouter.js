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
import EmployeeController from '../controllers/EmployeeController.js';
const EmployeeRouter = express.Router();
// DEBUG routes
EmployeeRouter.get(`/`, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.getEmployees(req.query, req.MongoDbSingletonInstance, req.Logger);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// get routes
EmployeeRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.getEmployeeById(req.params.id, req.MongoDbSingletonInstance, req.Logger);
        return res.status(200).send(results);
    }
    catch (error) {
        const err = {
            name: error.name,
            message: error.message,
            stack: error.stack
        };
        req.Logger.error(err.message, {
            name: error.name
        });
        return res.status(400).send(err);
    }
}));
// put routes
EmployeeRouter.put(`/delegate`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.delegateEmployeeAccess(req.body._id, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployeeRouter.put(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.Logger);
        const results = yield EmployeeController.editEmployee(req.body, req.MongoDbSingletonInstance, req.Logger);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// post routes
EmployeeRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.createEmployee(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// delete routes
EmployeeRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.deleteEmployee(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default EmployeeRouter;
