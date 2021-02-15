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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClient = void 0;
const bcrypt_1 = require("../../../../helpers/bcrypt");
const clientdb_1 = require("../../infraestructure/clientdb");
const CreateClient = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.state = 'Activo';
        client.password = yield bcrypt_1.Bcrypt.encryptPassword(client.password);
        yield clientdb_1.ClientDB.insertInto(client);
        return client;
    }
    catch (e) {
        console.log(e);
    }
});
exports.CreateClient = CreateClient;
