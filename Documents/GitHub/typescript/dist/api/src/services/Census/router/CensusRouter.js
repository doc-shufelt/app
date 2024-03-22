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
import CensusController from '../controllers/CensusController.js';
import handleError from '../../Error/controllers/handleError/handleError.js';
const CensusRouter = express.Router();
// get routes
CensusRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CensusController.getCensusById(req.query);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// put routes
CensusRouter.put(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CensusController.updateCensus(req.body);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
CensusRouter.post('/excel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CensusController.createExcelReport(req.body);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
CensusRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CensusController.createCensus(req.body.employerId);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
// delete routes
CensusRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CensusController.deleteCensus(req.body.employerId);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default CensusRouter;
