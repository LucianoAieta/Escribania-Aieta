/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_create_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




const lista = document.querySelector(".list");
let peticion;
let datos;
let entry; // CARGA DE ESCRITURAS

(async () => {
  peticion = await axios("prueba.json");
  datos = await peticion.data.escrituras;

  for (let i = 0; i < 5; i++) {
    let titulo = datos[i].title;
    let monto = datos[i].amount;
    const escritura = document.createElement("DIV");
    escritura.innerHTML = "\n            <p class=\"list__title\">".concat(titulo, "</p>\n            <p class=\"list__amount\">$").concat(monto, "</p>\n        ");
    escritura.classList.add("list__item");
    lista.appendChild(escritura);
  }

  ;
  entry = document.getElementsByClassName("list__item");
  analizarEscrituras();
})();

let analizarEscrituras = () => {
  for (let i = 0; i < entry.length; i++) {
    const element = entry[i];
    element.addEventListener('click', async clicked => {
      let objectWriting = {
        title: datos[i].title,
        content: datos[i].content,
        amount: datos[i].amount
      };
      await Object(_helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__["createPromise"])(Object(_modules_create_cards_js__WEBPACK_IMPORTED_MODULE_1__["createCard_b"])(objectWriting));
      exit.addEventListener('click', () => Object(_modules_animations_js__WEBPACK_IMPORTED_MODULE_3__["animacionSalida"])());
      await Object(_helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__["createPromise"])(Object(_modules_animations_js__WEBPACK_IMPORTED_MODULE_3__["animacionEntrada"])());
      let amount_container = document.querySelector('.card__value-container'); // MODIFICAR

      const escritura = document.getElementById("textarea");
      const title = document.getElementById("title");
      const modif = document.getElementById("modif");
      const input_price = document.getElementById("input-price");
      const check = document.getElementById("check");
      check.style.visibility = "hidden";
      modif.addEventListener('click', () => {
        Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(title);
        Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(escritura);
        Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(amount_container);
        Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(input_price);
        modif.style.visibility = "hidden";
        check.style.visibility = "visible";
        check.addEventListener('click', () => {
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(title);
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(escritura);
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(amount_container);
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(input_price);
          check.style.visibility = "hidden";
          modif.style.visibility = "visible";
        });
      }); // BORRAR CLIENTE

      let delete_overlay = document.getElementById("overlay--delete");
      let delete_icon = document.getElementById("delete");
      let delete_container;
      delete_icon.addEventListener('click', () => {
        let delete_card = document.createElement("div");
        delete_card.innerHTML = "\n                <div class=\"card--delete\" id=\"delete-container\">\n                    <p class=\"card__title--delete\">\xBFEst\xE1 seguro de querer borrar la escritura seleccionada?</p>\n                    <div class=\"card__button-container--delete\">\n                        <div class=\"card__button--delete card__button--yes\" id=\"delete-yes\">Si</div>\n                        <div class=\"card__button--delete card__button--no\" id=\"delete-no\">No</div>\n                    </div>\n                </div>\n            ";
        delete_overlay.appendChild(delete_card);
        delete_container = document.getElementById("delete-container");
        Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(delete_overlay);
        setTimeout(() => Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(delete_container), 100); // NO BORRAR

        let delete_no = document.getElementById("delete-no");
        delete_no.addEventListener('click', () => {
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(delete_container);
          setTimeout(() => {
            delete_card.remove();
            Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(delete_overlay);
          }, 100);
        }); // SI BORRAR 

        let delete_yes = document.getElementById("delete-yes");
        delete_yes.addEventListener('click', () => {
          Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(delete_container);
          setTimeout(() => delete_card.remove(), 200);
          setTimeout(() => Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(delete_overlay), 220);
          setTimeout(() => {
            Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(card);
            value_write.classList.remove("act");
          }, 500);
          setTimeout(() => Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(overlay), 750);
          setTimeout(() => data.remove(), 800);
          setTimeout(() => element.classList.add("delete"), 1200);
          setTimeout(() => element.remove(), 2000);
        });
      });
    });
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
// FUNCIONES PARA AGREGAR Y SACAR CLASES
const addClass = e => {
  e.classList.add("active");
  e.readOnly = false;
};

const removeClass = e => {
  e.classList.remove("active");
  e.readOnly = true;
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCard_b", function() { return createCard_b; });
/* harmony import */ var _helpers_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const createCard_b = obj => {
  const data = document.createElement("DIV");
  data.innerHTML = "\n        <div class=\"card\" id=\"card\">\n            <div class=\"card__header\">\n                <form class=\"card__header-input\">\n                    <input type=\"text\" class=\"header__input\" readOnly=\"true\" id=\"title\" value=\"".concat(obj.title, "\">\n                </form>\n                <div class=\"card__icon card__icon--edit\" id=\"modif\"><i class=\"fas fa-edit\"></i></div>\n                <div class=\"card__icon card__icon--edit\" id=\"check\"><i class=\"fas fa-check\"></i></div>\n                <div class=\"card__icon\" id=\"delete\"><i class=\"fas fa-trash\"></i></div>\n            </div>\n            <div class=\"card__body\">\n            <form>\n                <textarea class=\"card__textarea\" readOnly=\"true\" id=\"textarea\">").concat(obj.content, "</textarea>\n            </form>\n            </div>\n        </div>\n        <div class=\"card__value-container\" id=\"value-write\">\n            <i class=\"fas fa-dollar-sign\"></i>\n            <form>\n                <input type=\"number\" value=\"").concat(obj.amount, "\" class=\"card__value\" id=\"input-price\" readOnly=\"true\">\n            </form>\n        </div>\n        <div class=\"card__exit\" id=\"exit\"><i class=\"fas fa-times-circle\"></i></div>\n        <div id=\"overlay--delete\" class=\"overlay--delete\"\n        </div>\n    ");
  data.classList.add('overcard');
  overlay.appendChild(data);
  Object(_helpers_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(overlay);
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPromise", function() { return createPromise; });
const createPromise = funcion => {
  return new Promise((res, rej) => {
    funcion;
    res();
  });
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animacionEntrada", function() { return animacionEntrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animacionSalida", function() { return animacionSalida; });
/* harmony import */ var _helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const animacionEntrada = () => {
  setTimeout(() => {
    let card = document.getElementById("card");
    Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(card);
  }, 100);
  setTimeout(() => {
    let value_write = document.getElementById("value-write");
    value_write.classList.add("act");
  }, 400);
  clearTimeout();
};

const animacionSalida = () => {
  let a = document.querySelector('.overcard');
  let b = document.querySelector('.card__value-container');
  b.classList.remove("act");
  Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(overlay);
  Object(_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(card);
  setTimeout(() => a.remove(), 300);
};



/***/ })
/******/ ]);