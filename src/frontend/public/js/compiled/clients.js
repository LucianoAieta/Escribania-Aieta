/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _search_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _dom_cards_ClientCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _dom_ListClients_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _infraestructure_requests_ClientGet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _Client_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _CreateClient_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};









var menu_button = document.querySelector('#menu');
menu_button.addEventListener('click', function () {
  return _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__.Menu.run();
});
_search_search_js__WEBPACK_IMPORTED_MODULE_2__.default.run();

var loadClientsAtPageStart = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, client_list;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = _dom_ListClients_js__WEBPACK_IMPORTED_MODULE_4__.listClients;
          return [4
          /*yield*/
          , _infraestructure_requests_ClientGet_js__WEBPACK_IMPORTED_MODULE_5__.ClientGet.getClients()];

        case 1:
          _a.apply(void 0, [_b.sent()]);

          client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
          clientsItemsListener(client_list);
          return [2
          /*return*/
          ];
      }
    });
  });
};

var clientsItemsListener = function (items) {
  return __awaiter(void 0, void 0, void 0, function () {
    var itemsLength, clients_loaded, _loop_1, i;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          itemsLength = items.length;
          return [4
          /*yield*/
          , _infraestructure_requests_ClientGet_js__WEBPACK_IMPORTED_MODULE_5__.ClientGet.getClients()];

        case 1:
          clients_loaded = _a.sent();

          _loop_1 = function (i) {
            items[i].addEventListener('click', function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var client_data, client;
                return __generator(this, function (_a) {
                  client_data = clients_loaded.find(function (x) {
                    return x.id === +items[i].id;
                  });
                  client = new _Client_js__WEBPACK_IMPORTED_MODULE_6__.Client(client_data);
                  _dom_cards_ClientCard_js__WEBPACK_IMPORTED_MODULE_3__.ClientCard.createCard(client.client);
                  clientCardListeners(client);
                  return [2
                  /*return*/
                  ];
                });
              });
            });
          };

          for (i = 0; i < itemsLength; i++) {
            _loop_1(i);
          }

          return [2
          /*return*/
          ];
      }
    });
  });
};

var reloadAndRelistClients = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var client_list, _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
          client_list.forEach(function (element) {
            return element.remove();
          });
          _a = _dom_ListClients_js__WEBPACK_IMPORTED_MODULE_4__.listClients;
          return [4
          /*yield*/
          , _infraestructure_requests_ClientGet_js__WEBPACK_IMPORTED_MODULE_5__.ClientGet.getClients()];

        case 1:
          _a.apply(void 0, [_b.sent()]);

          client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));
          clientsItemsListener(client_list);
          return [2
          /*return*/
          ];
      }
    });
  });
};

var clientCardListeners = function (class_client) {
  var options_icon = document.querySelector('#card_menu');
  options_icon.addEventListener('click', function () {
    class_client.runMenu();
    buttonDeleteListener();
    buttonEditListener();
  });

  var buttonDeleteListener = function () {
    var delete_button = document.querySelector('.organism-crud-card-header .molecule-menu-options #delete');
    delete_button.addEventListener('click', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , class_client.deleteClient()];

            case 1:
              _a.sent();

              reloadAndRelistClients();
              return [2
              /*return*/
              ];
          }
        });
      });
    });
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
    confirm_button.addEventListener('click', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 3]);

              return [4
              /*yield*/
              , class_client.confirmEditClientAndUpdateData()];

            case 1:
              _a.sent();

              reloadAndRelistClients();
              return [3
              /*break*/
              , 3];

            case 2:
              e_1 = _a.sent();
              if (e_1 === 'empty fields') _helpers_alert_js__WEBPACK_IMPORTED_MODULE_0__.default.run('warning-orange', 'Campos vacíos', 'Por favor, complete los campos vacíos.');else if (e_1 !== 'confirm canceled') _helpers_alert_js__WEBPACK_IMPORTED_MODULE_0__.default.run("warning-orange", "Error al actualizar los datos del cliente", 'Ocurrió un error al actualizar los datos del cliente, si esto ocurre de vuelta, recarge la página o contacte al soporte de Aieta Consulting');
              return [3
              /*break*/
              , 3];

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  };

  var exit_button = document.querySelector('.organism-overlay #exit');
  exit_button.addEventListener('click', function () {
    return class_client.closeCard();
  });
};

var buttonCreateClientCardListener = function () {
  var create_icon = document.querySelector('.organism-header-main #create');
  create_icon.addEventListener('click', function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        _CreateClient_js__WEBPACK_IMPORTED_MODULE_7__.default.openCard();
        createClientCardListeners();
        return [2
        /*return*/
        ];
      });
    });
  });
};

var createClientCardListeners = function () {
  var cancel_button = document.querySelector('.organism-create-card-body .atom-button-primary-empty');
  cancel_button.addEventListener('click', function () {
    return _CreateClient_js__WEBPACK_IMPORTED_MODULE_7__.default.closeCard();
  });
  var create_button = document.querySelector('.organism-create-card-body .atom-button-primary-outline');
  create_button.addEventListener('click', function () {
    return __awaiter(void 0, void 0, void 0, function () {
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
              password: data[4].value
            };
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            new_client = new _CreateClient_js__WEBPACK_IMPORTED_MODULE_7__.default(new_client_data);
            return [4
            /*yield*/
            , new_client.create()];

          case 2:
            _a.sent();

            reloadAndRelistClients();
            return [3
            /*break*/
            , 4];

          case 3:
            e_2 = _a.sent();
            if (e_2 === 'empty fields') _helpers_alert_js__WEBPACK_IMPORTED_MODULE_0__.default.run('warning-orange', 'Campos vacíos.', 'Tienes que completar todos los campos del formulario.');
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
};

loadClientsAtPageStart();
buttonCreateClientCardListener();

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Alert =
/** @class */
function () {
  function Alert() {}

  Alert.run = function (icon, title, content) {
    var alert = document.querySelector('.organism-alert');
    alert === null ? this.showAlert(icon, title, content) : alert;
  };

  Alert.showAlert = function (icon, title, content) {
    var _this = this;

    var alert = document.createElement('div');
    alert.innerHTML = "\n            <img id='card_menu' class='atom-icon-extra-large' src='../assets/icons/svg/" + icon + ".svg'/>\n            <div class='molecule-alert'>\n                <div class='molecule-alert-header'>\n                    <p class='atom-title-medium'>" + title + "</p>\n                    <img id='close-alert' src='../assets/icons/svg/cross-black.svg' class='atom-icon-large'/>\n                </div>\n                <p class='molecule-alert-body atom-text-small'>" + content + "</p>\n            </div>\n        ";
    alert.classList.add('organism-alert');
    var body = document.querySelector('body');
    body.appendChild(alert);
    setTimeout(function () {
      return alert.style.transform = 'translateX(-5%)';
    }, 100);
    var close = document.querySelector('.molecule-alert #close-alert');
    close.addEventListener('click', function () {
      return _this.hideAlert();
    });
    setTimeout(function () {
      var alert2 = document.querySelector('.organism-alert');
      alert2 !== null ? _this.hideAlert() : alert2;
    }, 2500);
  };

  Alert.hideAlert = function () {
    var alert = document.querySelector('.organism-alert');
    alert.style.transform = 'translateX(100%)';
    setTimeout(function () {
      return alert.remove();
    }, 400);
  };

  return Alert;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => /* binding */ Menu
/* harmony export */ });
var Menu =
/** @class */
function () {
  function Menu() {}

  Menu.create = function () {
    var header = document.querySelector('.template-header');
    var options = document.createElement('DIV');
    options.innerHTML = "\n            <a href='#' class='atom-options-item'>Mi cuenta</a>\n            <a href='#' class='atom-options-item'>Agenda</a>\n            <a href='#' class='atom-options-item'>Calendario</a>\n            <a href='#' class='atom-options-item'>Ajustes</a>\n            <a href='#' class='atom-options-item'>Cerrar sesi\u00F3n</a>\n        ";
    options.classList.add('molecule-menu-options');
    setTimeout(function () {
      return options.style.transform = 'scaleY(1)';
    }, 100);
    header.appendChild(options);
  };

  Menu.remove = function (options) {
    options.style.transform = 'scaleY(0)';
    setTimeout(function () {
      return options.remove();
    }, 300);
  };

  Menu.run = function () {
    var options_button = document.querySelector('.molecule-menu-options');
    options_button === null ? Menu.create() : Menu.remove(options_button);
  };

  return Menu;
}();



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Search =
/** @class */
function () {
  function Search(search, input, minimize) {
    this.search = search;
    this.input = input;
    this.minimize = minimize;
  }

  Search.prototype.showInput = function () {
    var header = document.querySelector('.organism-header-main .atom-title-large');

    var show = function (item) {
      if (window.screen.availWidth <= 768) header.style.display = 'none';
      item.style.display = 'inline';
      setTimeout(function () {
        return item.style.opacity = '1';
      }, 100);
    };

    show(this.minimize);
    show(this.input);
  };

  Search.prototype.hideInput = function () {
    var header = document.querySelector('.organism-header-main .atom-title-large');

    var hide = function (item) {
      if (window.screen.availWidth <= 768) header.style.display = 'block';
      item.style.opacity = 0;
      setTimeout(function () {
        return item.style.display = 'none';
      }, 300);
    };

    hide(this.minimize);
    hide(this.input);
  };

  Search.run = function () {
    var search_button = document.querySelector('#search');
    var search_input = document.querySelector('#search-input');
    var minimize_button = document.querySelector('#minimize');
    var search = new Search(search_button, search_input, minimize_button);
    search_button.addEventListener('click', function () {
      return search.showInput();
    });
    minimize_button.addEventListener('click', function () {
      return search.hideInput();
    });
  };

  return Search;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientCard": () => /* binding */ ClientCard
/* harmony export */ });
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _helpers_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var ClientCard =
/** @class */
function () {
  function ClientCard(client) {
    this.client = client;
  }

  ClientCard.createCard = function (client) {
    var card = document.createElement('div');
    card.innerHTML = "\n\t\t\t<div class='organism-crud-card-header'>\n\t\t\t\t<div class='atom-title-large'>" + client.name + " " + client.surname + "</div>\n\t\t\t\t<div class='molecule-crud-card-nav'>\n\t\t\t\t\t<div id='data-section' class='atom-crud-card-nav-item'>Datos</div>\n\t\t\t\t\t<div id='rel-section' class='atom-crud-card-nav-item'>Escrituras</div>\n\t\t\t\t\t<img id='card_menu' class='atom-icon-large' src='../assets/icons/svg/points-menu.svg'/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='organism-crud-card-body'>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Nombre</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' id='" + client.id + "' type='text' value='" + client.name + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Apellido</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.surname + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Email</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.email + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Nombre de usuario</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.username + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Creado hace</div>\n\t\t\t\t\t<div class='atom-text-medium'>" + client.created_at + "</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Estado</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.state + "'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    var exit = document.createElement('div');
    exit.innerHTML = "\n\t\t\t<img id='exit' class='atom-icon-extra-large' src='../assets/icons/svg/cross-white.svg'/>\n\t\t";
    card.classList.add('organism-crud-card');
    var overlay = document.querySelector('.organism-overlay');
    (0,_helpers_animations__WEBPACK_IMPORTED_MODULE_0__.cardEntranceAnimation)(overlay, card, exit);
    var data_nav_button = document.querySelector('.organism-crud-card #data-section');
    data_nav_button.style.backgroundColor = '#E8E8E8';
  };

  ClientCard.deleteCard = function () {
    var card = document.querySelector('.organism-crud-card');
    var overlay = document.querySelector('.organism-overlay');
    var exit = document.querySelector('.organism-overlay #exit');
    (0,_helpers_animations__WEBPACK_IMPORTED_MODULE_0__.cardExitAnimation)(overlay, card, exit);
  };

  ClientCard.runOptions = function () {
    var menu = document.querySelector('.organism-crud-card-header .molecule-menu-options');
    menu === null ? this.showOptions() : this.hideOptions(menu);
  };

  ClientCard.showOptions = function () {
    var header = document.querySelector('.organism-crud-card-header');
    var menu = document.createElement('DIV');
    menu.innerHTML = "\n            <a id='edit' class='atom-options-item'>Editar datos</a>\n            <a id='delete' class='atom-options-item'>Borrar cliente</a>\n        ";
    menu.classList.add('molecule-menu-options');
    setTimeout(function () {
      return menu.style.transform = 'scaleY(1)';
    }, 10);
    header.appendChild(menu);
  };

  ClientCard.hideOptions = function (options) {
    options.style.transform = 'scaleY(0)';
    setTimeout(function () {
      return options.remove();
    }, 300);
  };

  ClientCard.runInputsAndCheckButton = function () {
    var confirm_button = document.querySelector('#save-edit');
    confirm_button === null ? this.showInputsAndCheckButton() : confirm_button;
  };

  ClientCard.showInputsAndCheckButton = function () {
    var inputs = document.querySelectorAll('.organism-crud-card .atom-crud-card-input');
    inputs.forEach(function (input) {
      input.style.borderColor = '#BDBDBD';
      input.readOnly = false;
    });
    var check_button = document.createElement('div');
    check_button.innerHTML = "\n\t\t\t<img src='../assets/icons/svg/check-white.svg' class='atom-icon-large' />\n\t\t";
    check_button.classList.add('atom-crud-card-icon-button');
    check_button.title = 'Confirmar edición';
    check_button.id = 'save-edit';
    setTimeout(function () {
      return check_button.style.opacity = '1';
    }, 10);
    var card_nav = document.querySelector('.organism-crud-card-header .molecule-crud-card-nav');
    var card_nav_button = document.querySelector('.atom-crud-card-nav-item:first-child');
    card_nav.insertBefore(check_button, card_nav_button);
    (0,_helpers_inputs__WEBPACK_IMPORTED_MODULE_1__.addInputsListeners)(inputs);
  };

  ClientCard.hideInputsAndCheckButton = function () {
    var inputs = document.querySelectorAll('.organism-crud-card .atom-crud-card-input');
    inputs.forEach(function (input) {
      input.style.borderColor = '#FFFFFF';
      input.readOnly = true;
    });
    var confirm_button = document.querySelector('#save-edit');
    confirm_button.style.opacity = '0';
    setTimeout(function () {
      return confirm_button.remove();
    }, 400);
  };

  ClientCard.updateTitle = function (name, surname) {
    var title = document.querySelector('.organism-crud-card-header .atom-title-large');
    title.textContent = name + " " + surname;
  };

  return ClientCard;
}();



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardExitAnimation": () => /* binding */ cardExitAnimation,
/* harmony export */   "cardEntranceAnimation": () => /* binding */ cardEntranceAnimation
/* harmony export */ });
var cardExitAnimation = function (overlay, card, exit) {
  card.style.opacity = '0';
  card.style.transform = 'scale(.4)';
  if (exit) exit.style.opacity = '0';
  setTimeout(function () {
    card.remove();
    if (exit) exit.remove();
    overlay.style.visibility = 'hidden';
  }, 200);
};
var cardEntranceAnimation = function (overlay, card, exit) {
  overlay.style.visibility = 'visible';
  overlay.appendChild(card);
  if (exit) overlay.appendChild(exit);
  setTimeout(function () {
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
  }, 10);
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInputsListeners": () => /* binding */ addInputsListeners
/* harmony export */ });
var addInputsListeners = function (inputs) {
  var inputsLenght = inputs.length;

  var _loop_1 = function (i) {
    inputs[i].addEventListener('keypress', function (key) {
      if (key.code === 'Enter') {
        inputs[i + 1] != null ? inputs[i + 1].focus() : inputs[0].focus();
      }
    });
  };

  for (var i = 0; i < inputsLenght; i++) {
    _loop_1(i);
  }
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listClients": () => /* binding */ listClients
/* harmony export */ });
var listClients = function (clients) {
  var array_reversed = clients.reverse();
  var clientsLength = clients.length;

  for (var i = 0; i < clientsLength; i++) {
    var client = array_reversed[i];
    var item = document.createElement('DIV');
    item.innerHTML = "\n            <p class='atom-title-medium'>" + client.name + " " + client.surname + "</p>\n        ";
    item.id = "" + client.id;
    item.classList.add('molecule-crud-item');
    var list = document.querySelector('.organism-crud-list');
    list.appendChild(item);
  }

  return clients;
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientGet": () => /* binding */ ClientGet
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ClientGet =
/** @class */
function () {
  function ClientGet() {}

  ClientGet.getClients = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch('http://localhost:7000/clientes')];

          case 1:
            return [4
            /*yield*/
            , _a.sent().json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  return ClientGet;
}();



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => /* binding */ Client
/* harmony export */ });
/* harmony import */ var _helpers_confirm_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _helpers_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _infraestructure_requests_ClientPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _infraestructure_requests_ClientPut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};








var Client =
/** @class */
function () {
  function Client(client) {
    this.client = client;
    this.client = client;
  }

  Client.prototype.runMenu = function () {
    _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.runOptions();
  };

  Client.prototype.deleteClient = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0,_helpers_confirm_card__WEBPACK_IMPORTED_MODULE_0__.confirmCard)("\u00BFEst\u00E1s seguro de que quieres borrar el cliente " + this.client.name + " " + this.client.surname + "?", ['Borrar', 'Cancelar'])];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , _infraestructure_requests_ClientPost__WEBPACK_IMPORTED_MODULE_4__.ClientPost.deleteClient(this.client.id)];

          case 2:
            _a.sent();

            _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.deleteCard();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Client.prototype.editClient = function () {
    _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.runInputsAndCheckButton();
    var options = document.querySelector('.organism-crud-card-header .molecule-menu-options');
    _menu_menu__WEBPACK_IMPORTED_MODULE_2__.Menu.remove(options);
  };

  Client.prototype.confirmEditClientAndUpdateData = function () {
    return __awaiter(this, void 0, void 0, function () {
      var actual_client, _a, name, surname, email, username, state, client_data_toupdate, e_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            actual_client = this.client;
            _a = Array.from(document.querySelectorAll('.atom-crud-card-input')), name = _a[0], surname = _a[1], email = _a[2], username = _a[3], state = _a[4];
            client_data_toupdate = {
              id: actual_client.id,
              name: name.value,
              surname: surname.value,
              username: username.value,
              password: actual_client.password,
              email: email.value,
              created_at: actual_client.created_at,
              state: state.value
            };
            _b.label = 1;

          case 1:
            _b.trys.push([1, 5,, 6]);

            return [4
            /*yield*/
            , (0,_helpers_validators__WEBPACK_IMPORTED_MODULE_1__.verifyIfIsEmpty)(client_data_toupdate)];

          case 2:
            _b.sent();

            return [4
            /*yield*/
            , (0,_helpers_confirm_card__WEBPACK_IMPORTED_MODULE_0__.confirmCard)('¿Está seguro de que los datos son correctos?', ['Confirmar', 'Volver a editar'])];

          case 3:
            _b.sent();

            return [4
            /*yield*/
            , _infraestructure_requests_ClientPut__WEBPACK_IMPORTED_MODULE_5__.ClientPut.updateClientData(client_data_toupdate)];

          case 4:
            _b.sent();

            _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.hideInputsAndCheckButton();
            return [3
            /*break*/
            , 6];

          case 5:
            e_1 = _b.sent();
            throw e_1;

          case 6:
            _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.updateTitle(name.value, surname.value);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Client.prototype.closeCard = function () {
    _dom_cards_ClientCard__WEBPACK_IMPORTED_MODULE_3__.ClientCard.deleteCard();
  };

  return Client;
}();



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmCard": () => /* binding */ confirmCard
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var confirmCard = function (title, options) {
  return new Promise(function (res, rej) {
    var card = document.createElement('div');
    card.innerHTML = "\n            <div class='atom-title-large'>" + title + "</div>\n            <div class='card-buttons'>\n                <button class='atom-button-green-outline'>" + options[0] + "</button>\n                <button class='atom-button-red-empty'>" + options[1] + "</button>\n            </div>\n        ";
    card.classList.add('molecule-confirm-card');
    var overlay = document.createElement('div');
    overlay.classList.add('organism-overlay');
    var body = document.querySelector('body');
    body.appendChild(overlay);
    (0,_animations__WEBPACK_IMPORTED_MODULE_0__.cardEntranceAnimation)(overlay, card);
    var yes_button = document.querySelector('.card-buttons .atom-button-green-outline');
    yes_button.addEventListener('click', function () {
      (0,_animations__WEBPACK_IMPORTED_MODULE_0__.cardExitAnimation)(overlay, card);
      res();
    });
    var no_button = document.querySelector('.card-buttons .atom-button-red-empty');
    no_button.addEventListener('click', function () {
      (0,_animations__WEBPACK_IMPORTED_MODULE_0__.cardExitAnimation)(overlay, card);
      rej('confirm canceled');
    });
  });
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyIfIsEmpty": () => /* binding */ verifyIfIsEmpty
/* harmony export */ });
var verifyIfIsEmpty = function (data) {
  return new Promise(function (res, rej) {
    var verifyValues = function (data) {
      return data.some(function (item) {
        return item === '';
      });
    };

    verifyValues(Object.values(data)) ? rej('empty fields') : res('correct fields');
  });
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPost": () => /* binding */ ClientPost
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ClientPost =
/** @class */
function () {
  function ClientPost() {}

  ClientPost.deleteClient = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch('http://localhost:7000/deleteclient', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id
              })
            })];

          case 1:
            return [4
            /*yield*/
            , _a.sent().json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  ClientPost.createClient = function (client) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _b = (_a = JSON).parse;
            return [4
            /*yield*/
            , fetch('http://localhost:7000/createclient', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(client)
            })];

          case 1:
            return [4
            /*yield*/
            , _c.sent().json()];

          case 2:
            return [2
            /*return*/
            , _b.apply(_a, [_c.sent()])];
        }
      });
    });
  };

  return ClientPost;
}();



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPut": () => /* binding */ ClientPut
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ClientPut =
/** @class */
function () {
  function ClientPut() {}

  ClientPut.updateClientData = function (client_data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch('http://localhost:7000/update/client', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(client_data)
            })];

          case 1:
            return [4
            /*yield*/
            , _a.sent().json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  return ClientPut;
}();



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_confirm_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _helpers_validators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _dom_cards_CreateClientCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _infraestructure_requests_ClientPost_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};






var CreateClient =
/** @class */
function () {
  function CreateClient(client) {
    this.client = client;
    this.client = client;
  }

  CreateClient.openCard = function () {
    _dom_cards_CreateClientCard_js__WEBPACK_IMPORTED_MODULE_2__.CreateClientCard.showCard();
  };

  CreateClient.closeCard = function () {
    _dom_cards_CreateClientCard_js__WEBPACK_IMPORTED_MODULE_2__.CreateClientCard.hideCard();
  };

  CreateClient.prototype.create = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 4,, 5]);

            return [4
            /*yield*/
            , (0,_helpers_validators_js__WEBPACK_IMPORTED_MODULE_1__.verifyIfIsEmpty)(this.client)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , (0,_helpers_confirm_card_js__WEBPACK_IMPORTED_MODULE_0__.confirmCard)("\u00BFEst\u00E1s seguro de crear el cliente " + this.client.name + " " + this.client.surname + "?", ['Crear', 'Cancelar'])];

          case 2:
            _a.sent();

            _dom_cards_CreateClientCard_js__WEBPACK_IMPORTED_MODULE_2__.CreateClientCard.hideCard();
            return [4
            /*yield*/
            , _infraestructure_requests_ClientPost_js__WEBPACK_IMPORTED_MODULE_3__.ClientPost.createClient(this.client)];

          case 3:
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 4:
            e_1 = _a.sent();
            throw e_1;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return CreateClient;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateClient);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateClientCard": () => /* binding */ CreateClientCard
/* harmony export */ });
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _helpers_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var CreateClientCard =
/** @class */
function () {
  function CreateClientCard(client) {
    this.client = client;
  }

  CreateClientCard.showCard = function () {
    var card = document.createElement('div');
    card.innerHTML = "\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Nombre</div>\n                <input id='input-name' type='text' placeholder='Nombre personal' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Apellido</div>\n                <input id='input-surname' type='text' placeholder='Apellido personal' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Email</div>\n                <input id='input-email' type='text' placeholder='Email' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Nombre de usuario</div>\n                <input id='input-username' type='text' placeholder='Nombre para iniciar sesi\u00F3n' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Contrase\u00F1a</div>\n                <input id='input_password' type='text' placeholder='Contrase\u00F1a para iniciar sesi\u00F3n' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <input type='button' value='Crear cliente' class='atom-button-primary-outline' />\n                <input type='button' value='Cancelar' class='atom-button-primary-empty' />\n            </div>\n        ";
    card.classList.add('organism-create-card-body');
    var overlay = document.querySelector('.organism-overlay');
    (0,_helpers_animations__WEBPACK_IMPORTED_MODULE_0__.cardEntranceAnimation)(overlay, card);
    var inputs = document.querySelectorAll('.atom-create-card-input');
    (0,_helpers_inputs__WEBPACK_IMPORTED_MODULE_1__.addInputsListeners)(inputs);
  };

  CreateClientCard.hideCard = function () {
    var overlay = document.querySelector('.organism-overlay');
    var card = document.querySelector('.organism-create-card-body');
    (0,_helpers_animations__WEBPACK_IMPORTED_MODULE_0__.cardExitAnimation)(overlay, card);
  };

  return CreateClientCard;
}();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=clients.js.map