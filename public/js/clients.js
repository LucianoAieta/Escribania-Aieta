/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



/* Menú de navegación */
let menu = document.querySelector('#menu');
let options = () => document.querySelector('.molecule-menu-options');

menu.addEventListener('click', () => {
    if (options() === null) _modules_menu__WEBPACK_IMPORTED_MODULE_0__.Menu.create();
    else _modules_menu__WEBPACK_IMPORTED_MODULE_0__.Menu.remove(options());
});

/* Buscador */
let search_button = document.querySelector('#search');
let search_input = document.querySelector('#search-input');
let minimize = document.querySelector('#minimize');

let search = new _modules_search__WEBPACK_IMPORTED_MODULE_1__.Search(search_button, search_input, minimize)

search_button.addEventListener('click', () => search.showInput());
minimize.addEventListener('click', () => search.hideInput());

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => /* binding */ Menu
/* harmony export */ });
class Menu {
    static create() {
        let header = document.querySelector('.template-header');
        let options = document.createElement('DIV');
        options.innerHTML = `
            <a href='#' class='atom-options-item'>Mi cuenta</a>
            <a href='#' class='atom-options-item'>Agenda</a>
            <a href='#' class='atom-options-item'>Calendario</a>
            <a href='#' class='atom-options-item'>Ajustes</a>
            <a href='#' class='atom-options-item'>Cerrar sesión</a>
        `;
        options.classList.add('molecule-menu-options');
        setTimeout(() => options.style.transform = 'scaleY(1)', 100);
        header.appendChild(options);
    };
    static remove(options) {
        options.style.transform = 'scaleY(0)'
        setTimeout(() => options.remove(), 300);
    };
};



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => /* binding */ Search
/* harmony export */ });
class Search {
    constructor (search, input, minimize) {
        this.search = search;
        this.input = input;
        this.minimize = minimize;
    };
    showInput() {
        let header = document.querySelector('.organism-header-main .atom-title-large');
        const show = item => {
            if (window.screen.availWidth <= 768) header.style.display = 'none';
            item.style.display = 'inline';
            setTimeout(() => item.style.opacity = 1, 100);
        };
        show(this.minimize);
        show(this.input);
    };
    hideInput() {
        let header = document.querySelector('.organism-header-main .atom-title-large');
        const hide = item => {
            if (window.screen.availWidth <= 768) header.style.display = 'block';
            item.style.opacity = 0;
            setTimeout(() => item.style.display = 'none', 300);
        }
        hide(this.minimize);
        hide(this.input);
    }
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