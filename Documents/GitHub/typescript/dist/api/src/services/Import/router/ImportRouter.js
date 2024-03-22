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
import ImportController from '../controllers/ImportController.js';
import handleError from '../../Error/controllers/handleError/handleError.js';
const ImportRouter = express.Router();
ImportRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ImportController.getDataImportById(req.params, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
ImportRouter.put(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ImportController.updateDataImport(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
ImportRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ImportController.executeImport(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// delete routes
ImportRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ImportController.deleteImport(req.body);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default ImportRouter;
