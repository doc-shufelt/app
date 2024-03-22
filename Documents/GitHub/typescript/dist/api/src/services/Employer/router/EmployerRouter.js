var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* imports */
import express from 'express';
import EmployerController from '../controllers/EmployerController.js';
import EmployeeController from '../../Employee/controllers/EmployeeController.js';
import handleError from '../../Error/controllers/handleError/handleError.js';
const EmployerRouter = express.Router();
// get routes
EmployerRouter.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployerController.getEmployers(req.query, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployerRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployerController.getEmployerById(req.params.id, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployerRouter.get('/:id/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployeeController.getEmployees({
            employerId: req.params.id,
        }, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployerRouter.put(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployerController.updateEmployer(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployerRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployerController.createEmployer(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
EmployerRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield EmployerController.deleteEmployer(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default EmployerRouter;
