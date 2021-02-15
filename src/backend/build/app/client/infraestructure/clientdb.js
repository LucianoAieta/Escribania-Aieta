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
exports.ClientDB = void 0;
const connectDB_1 = __importDefault(require("../../../db/connectDB"));
class ClientDB {
    static insertInto(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, name, surname, email, state, } = data;
            const client = {
                username,
                password,
                name,
                surname,
                email,
                state,
            };
            return yield connectDB_1.default.query('INSERT INTO clients SET?', [client]);
        });
    }
    static selectClients(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield connectDB_1.default.query('SELECT * FROM clients LIMIT ?, ?', [
                from,
                to,
            ]);
            return clients;
        });
    }
    static deleteClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connectDB_1.default.query('DELETE FROM clients WHERE id = ?', [id]);
        });
    }
    static updateClientById(client_data) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = client_data.id;
            return yield connectDB_1.default.query('UPDATE clients SET ? WHERE id = ?', [
                client_data,
                id,
            ]);
        });
    }
}
exports.ClientDB = ClientDB;
