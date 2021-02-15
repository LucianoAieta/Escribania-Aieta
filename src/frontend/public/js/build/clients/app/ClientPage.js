var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Alert from '../../helpers/_alert.js';
import { Menu } from '../../menu/_menu.js';
import Search from '../../search/_search.js';
import { ClientCard } from '../dom/cards/_ClientCard.js';
import { listClients } from '../dom/_ListClients.js';
import { ClientGet } from '../infraestructure/requests/_ClientGet.js';
import { Client } from './_Client.js';
import CreateClient from './_CreateClient.js';
var menu_button = document.querySelector('#menu');
menu_button.addEventListener('click', function () { return Menu.run(); });
Search.run();
var loadClientsAtPageStart = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, client_list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = listClients;
                return [4 /*yield*/, ClientGet.getClients()];
            case 1:
                _a.apply(void 0, [_b.sent()]);
                client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
                clientsItemsListener(client_list);
                return [2 /*return*/];
        }
    });
}); };
var clientsItemsListener = function (items) { return __awaiter(void 0, void 0, void 0, function () {
    var itemsLength, clients_loaded, _loop_1, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemsLength = items.length;
                return [4 /*yield*/, ClientGet.getClients()];
            case 1:
                clients_loaded = _a.sent();
                _loop_1 = function (i) {
                    items[i].addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
                        var client_data, client;
                        return __generator(this, function (_a) {
                            client_data = clients_loaded.find(function (x) { return x.id === +items[i].id; });
                            client = new Client(client_data);
                            ClientCard.createCard(client.client);
                            clientCardListeners(client);
                            return [2 /*return*/];
                        });
                    }); });
                };
                for (i = 0; i < itemsLength; i++) {
                    _loop_1(i);
                }
                return [2 /*return*/];
        }
    });
}); };
var reloadAndRelistClients = function () { return __awaiter(void 0, void 0, void 0, function () {
    var client_list, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
                client_list.forEach(function (element) { return element.remove(); });
                _a = listClients;
                return [4 /*yield*/, ClientGet.getClients()];
            case 1:
                _a.apply(void 0, [_b.sent()]);
                client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
                clientsItemsListener(client_list);
                return [2 /*return*/];
        }
    });
}); };
var clientCardListeners = function (class_client) {
    var options_icon = document.querySelector('#card_menu');
    options_icon.addEventListener('click', function () {
        class_client.runMenu();
        buttonDeleteListener();
        buttonEditListener();
    });
    var buttonDeleteListener = function () {
        var delete_button = document.querySelector('.organism-crud-card-header .molecule-menu-options #delete');
        delete_button.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_client.deleteClient()];
                    case 1:
                        _a.sent();
                        reloadAndRelistClients();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    var buttonEditListener = function () {
        var edit_button = document.querySelector('.organism-crud-card-header .molecule-menu-options #edit');
        edit_button.addEventListener('click', function () {
            class_client.editClient();
            buttonConfirmEditListener();
        });
    };
    var buttonConfirmEditListener = function () {
        var confirm_button = document.querySelector('#save-edit');
        confirm_button.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, class_client.confirmEditClientAndUpdateData()];
                    case 1:
                        _a.sent();
                        reloadAndRelistClients();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 === 'empty fields')
                            Alert.run('warning-orange', 'Campos vacíos', 'Por favor, complete los campos vacíos.');
                        else if (e_1 !== 'confirm canceled')
                            Alert.run("warning-orange", "Error al actualizar los datos del cliente", 'Ocurrió un error al actualizar los datos del cliente, si esto ocurre de vuelta, recarge la página o contacte al soporte de Aieta Consulting');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    var exit_button = document.querySelector('.organism-overlay #exit');
    exit_button.addEventListener('click', function () { return class_client.closeCard(); });
};
var buttonCreateClientCardListener = function () {
    var create_icon = document.querySelector('.organism-header-main #create');
    create_icon.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            CreateClient.openCard();
            createClientCardListeners();
            return [2 /*return*/];
        });
    }); });
};
var createClientCardListeners = function () {
    var cancel_button = document.querySelector('.organism-create-card-body .atom-button-primary-empty');
    cancel_button.addEventListener('click', function () { return CreateClient.closeCard(); });
    var create_button = document.querySelector('.organism-create-card-body .atom-button-primary-outline');
    create_button.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, new_client_data, new_client, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = document.querySelectorAll('.organism-create-card-body .atom-create-card-input');
                    new_client_data = {
                        name: data[0].value,
                        surname: data[1].value,
                        email: data[2].value,
                        username: data[3].value,
                        password: data[4].value,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    new_client = new CreateClient(new_client_data);
                    return [4 /*yield*/, new_client.create()];
                case 2:
                    _a.sent();
                    reloadAndRelistClients();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    if (e_2 === 'empty fields')
                        Alert.run('warning-orange', 'Campos vacíos.', 'Tienes que completar todos los campos del formulario.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
loadClientsAtPageStart();
buttonCreateClientCardListener();
