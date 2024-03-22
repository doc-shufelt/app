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
import ParserController from '../../Parser/controllers/ParserController.js';
const ParserRouter = express.Router();
ParserRouter.post(`/upload`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ParserController.uploadDocument(req.body.parser, req.body.url);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
ParserRouter.post(`/results`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ParserController.parseDocument(req.body.parser, req.body.documentId);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default ParserRouter;
