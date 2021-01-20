/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_create_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _modules_modify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






const lista = document.querySelector('.list');
let datos;
let entry;
/*
class Tarjeta {
    constructor (objeto) {
        this.objeto.
    }
}*/
// Carga de escrituras

(async () => {
  let peticion = await axios('prueba.json');
  datos = await peticion.data.escrituras;

  for (let i = 0; i < 5; i++) {
    let titulo = datos[i].title;
    let monto = datos[i].amount;
    const escritura = document.createElement('DIV');
    escritura.innerHTML = `
            <p class='list__title'>${titulo}</p>
            <p class='list__amount'>$${monto}</p>
        `;
    escritura.classList.add('list__item');
    lista.appendChild(escritura);
  }

  ;
  entry = document.getElementsByClassName('list__item');
  analizarEscrituras();
})();

const analizarEscrituras = () => {
  for (let i = 0; i < entry.length; i++) {
    const element = entry[i];
    element.addEventListener('click', async clicked => {
      let objectWriting = {
        title: datos[i].title,
        content: datos[i].content,
        amount: datos[i].amount
      }; // Crear tarjeta

      await (0,_helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__.createPromise)((0,_modules_create_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCardB)(objectWriting)); // Añadir listener en el boton de salida

      exit.addEventListener('click', () => (0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_3__.animacionSalida)()); // Animacion de entrada

      await (0,_helpers_create_promise_js__WEBPACK_IMPORTED_MODULE_2__.createPromise)((0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_3__.animacionEntrada)()); // Añadir listener en el boton de modificar (ejecuta toda la secuencia)

      let modif = document.querySelector('#modif');
      modif.addEventListener('click', () => (0,_modules_modify_js__WEBPACK_IMPORTED_MODULE_4__.modificarB)()); // Mostrar el mensaje de si se quiere borrar o no, segun lo presionado se ejecutan funciones

      (0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_5__.deleteB)(element);
    });
  }
};

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => /* binding */ addClass,
/* harmony export */   "removeClass": () => /* binding */ removeClass
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardB": () => /* binding */ CardB,
/* harmony export */   "createDeleteCard": () => /* binding */ createDeleteCard,
/* harmony export */   "createCardIncomplete": () => /* binding */ createCardIncomplete
/* harmony export */ });
/* harmony import */ var _helpers_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


class CardB {
  constructor() {}

  static createCard(obj) {
    const overlay = document.querySelector('.overlay');
    const data = document.createElement('DIV');
    data.innerHTML = `
            <div class='card' id='card'>
                <div class='card__header'>
                    <form class='card__header-input'>
                        <input type='text' class='header__input' readOnly='true' id='title' value='${obj.title}'>
                    </form>
                    <div class='card__icon card__icon--edit' id='modif'><i class='fas fa-edit'></i></div>
                    <div class='card__icon card__icon--edit' id='check'><i class='fas fa-check'></i></div>
                    <div class='card__icon' id='delete'><i class='fas fa-trash'></i></div>
                </div>
                <div class='card__body'>
                    <form>
                        <textarea class='card__textarea' readOnly='true' id='textarea'>${obj.content}</textarea>
                    </form>
                </div>
            </div>
            <div class='card__value-container' id='value-write'>
                <i class='fas fa-dollar-sign'></i>
                <form>
                    <input type='number' value='${obj.amount}' class='card__value' id='input-price' readOnly='true'>
                </form>
            </div>
            <div class='card__exit' id='exit'><i class='fas fa-times-circle'></i></div>
            <div id='overlay--delete' class='overlay--delete'</div>
        `;
    data.classList.add('overcard');
    overlay.appendChild(data);
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(overlay);
    const check = document.querySelector('#check');
    check.style.visibility = 'hidden';
  }

}

;

const createDeleteCard = () => {
  let delete_card = document.createElement('div');
  delete_card.innerHTML = `
        <p class='card__title--delete'>¿Está seguro de querer borrar la escritura seleccionada?</p>
        <div class='card__button-container--delete'>
            <div class='card__button--delete card__button--yes' id='delete-yes'>Si</div>
            <div class='card__button--delete card__button--no' id='delete-no'>No</div>
        </div>
    `;
  delete_card.id = 'delete-container';
  delete_card.classList.add('card--delete');
  return delete_card;
};

const createCardIncomplete = () => {
  const body = document.querySelector('body');
  const mensaje = document.createElement("DIV");
  mensaje.innerHTML = `
        <p class="card__title--petition-incomplete">Complete los campos requeridos</p>
        <i class="card__icon--petition-incomplete fas fa-exclamation"></i>
    `;
  body.appendChild(mensaje);
  mensaje.classList.add("card--petition-incomplete");
  mensaje.classList.add("active");
  setTimeout(() => mensaje.remove(), 5000);
};

const clase = new CardB();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPromise": () => /* binding */ createPromise
/* harmony export */ });
const createPromise = funcion => {
  return new Promise((res, rej) => {
    funcion;
    res();
  });
};



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animacionEntrada": () => /* binding */ animacionEntrada,
/* harmony export */   "animacionSalida": () => /* binding */ animacionSalida
/* harmony export */ });
/* harmony import */ var _helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const animacionEntrada = () => {
  setTimeout(() => {
    let card = document.getElementById("card");
    (0,_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(card);
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
  (0,_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(overlay);
  (0,_helpers_classes_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(card);
  setTimeout(() => a.remove(), 300);
};



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modificarB": () => /* binding */ modificarB
/* harmony export */ });
/* harmony import */ var _helpers_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const modificarB = () => {
  const amount_container = document.querySelector('.card__value-container');
  const escritura = document.querySelector("#textarea");
  const title = document.querySelector("#title");
  const input_price = document.querySelector("#input-price");
  const check = document.querySelector("#check");
  (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(title);
  (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(escritura);
  (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(amount_container);
  (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(input_price);
  modif.style.visibility = "hidden";
  check.style.visibility = "visible";
  check.addEventListener('click', () => {
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(title);
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(escritura);
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(amount_container);
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(input_price);
    check.style.visibility = "hidden";
    modif.style.visibility = "visible";
  });
};



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteB": () => /* binding */ deleteB
/* harmony export */ });
/* harmony import */ var _helpers_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_create_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const deleteB = async element => {
  let overcard = document.querySelector('.overcard');
  let amount_container = document.querySelector('.card__value-container');
  let overlay = document.querySelector('#overlay');
  let delete_overlay = document.querySelector('#overlay--delete');
  let delete_icon = document.querySelector('#delete');
  let delete_card = (0,_modules_create_cards__WEBPACK_IMPORTED_MODULE_1__.createDeleteCard)();
  delete_icon.addEventListener('click', () => {
    delete_overlay.appendChild(delete_card);
    (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(delete_overlay);
    let delete_container = document.querySelector('#delete-container');
    setTimeout(() => (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.addClass)(delete_container), 100);
    let delete_no = document.querySelector('#delete-no');
    let delete_yes = document.querySelector('#delete-yes'); // NO BORRAR

    delete_no.addEventListener('click', () => {
      (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(delete_container);
      setTimeout(() => {
        delete_card.remove();
        (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(delete_overlay);
      }, 100);
    }); // SI BORRAR 

    delete_yes.addEventListener('click', () => {
      (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(delete_container);
      setTimeout(() => delete_card.remove(), 200);
      setTimeout(() => (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(delete_overlay), 220);
      setTimeout(() => {
        (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(card);
        amount_container.classList.remove('act');
      }, 500);
      setTimeout(() => (0,_helpers_classes__WEBPACK_IMPORTED_MODULE_0__.removeClass)(overlay), 750);
      setTimeout(() => overcard.remove(), 800);
      setTimeout(() => element.classList.add('delete'), 1200);
      setTimeout(() => element.remove(), 2000);
    });
  });
};



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