var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Finch Router
 */
import express from 'express';
import ImportController from '../../Import/controllers/ImportController.js';
import handleError from '../../Error/object/Error.js';
const FinchRouter = express.Router();
// get routes
FinchRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.executeImport(req.body);
    return res.status(200).send(results);
}));
FinchRouter.post(`/company`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importCompany(req.body.token);
    return res.status(200).send(results);
}));
FinchRouter.post(`/directory`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importDirectory(req.body);
    return res.status(200).send(results);
}));
FinchRouter.post(`/individual`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importIndividual(req.body);
    return res.status(200).send(results);
}));
FinchRouter.post(`/employment`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importEmployment(req.body);
    return res.status(200).send(results);
}));
FinchRouter.post(`/payment`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importPayment(req.body.token);
    return res.status(200).send(results);
}));
FinchRouter.post(`/statement`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ImportController.importStatement(req.body.paymentId, req.body.token);
    return res.status(200).send(results);
}));
export default FinchRouter;
