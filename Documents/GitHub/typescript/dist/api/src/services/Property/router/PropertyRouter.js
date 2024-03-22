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
import PropertyController from '../controllers/PropertyController.js';
import handleError from '../../Error/controllers/handleError/handleError.js';
const PropertyRouter = express.Router();
PropertyRouter.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield PropertyController.getProperties(req.query, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
PropertyRouter.get(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield PropertyController.getPropertyById(req.query, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
PropertyRouter.put(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield PropertyController.editProperty(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
PropertyRouter.post(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield PropertyController.createProperty(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
PropertyRouter.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield PropertyController.deleteProperty(req.body, req.MongoDbSingletonInstance);
        return res.status(200).send(results);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
export default PropertyRouter;
