"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createClient_1 = require("../app/create/createClient");
const deleteClient_1 = require("../app/delete/deleteClient");
const loadClients_1 = require("../app/load/loadClients");
const updateClient_1 = require("../app/update/updateClient");
const router = express_1.default.Router();
router.post('/createclient', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield createClient_1.CreateClient(req.body);
    res.json(JSON.stringify({ created: true }));
}));
router.post('/deleteclient', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteClient_1.deleteClient(req.body.id);
    res.json(JSON.stringify({ deleted: true }));
}));
router.get('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield loadClients_1.loadClients(0, 20);
    res.json(clients);
}));
router.put('/update/client', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield updateClient_1.updateClientData(req.body);
    res.json(JSON.stringify({ updated: true }));
}));
module.exports = router;
