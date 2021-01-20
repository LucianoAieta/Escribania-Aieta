/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_create_b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


let [title, number, submit] = document.querySelectorAll('input[class]');
let textarea = document.querySelector('textarea');

submit.addEventListener('click', async () => {
    const overlay = document.querySelector('.overlay--requests');

    // Verificación de formulario vacío
    let incomplete;
    try {
        await _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Verify.verifyInputs(title, number, textarea);
    } catch (e) {
        const body = document.querySelector('body');
        _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Error.incomplete(body);
        incomplete = true;
    };

    let ask;
    if (incomplete) ask = null;
    else ask = _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Confirm.ask(overlay);
    const [yes, no, card] = ask;

    let escritura = `{'title' : ${title.value},'amount' : ${number.value},'content' : ${textarea.value}}`;
    
    // Petición post
    const post = async () => {
        const load = document.querySelector('.load');
        try {
            _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Loading.generateLoading(overlay, load);

            await _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Request.requestPost(escritura);

            document.addEventListener('loadend', () => _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Loading.removeLoading(load));
            _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Success.requestSuccess(overlay);
            _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Clean.cleanInputs([title, number, submit], textarea, submit);
        }
        catch (e) {
            _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Error.requestError(overlay);
        };
    };

    yes.addEventListener('click', () => {_modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Confirm.endAsk([overlay, card], 'yes'); post();});
    no.addEventListener('click', () => _modules_create_b__WEBPACK_IMPORTED_MODULE_0__.Confirm.endAsk([overlay, card], 'no'));
});

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clean": () => /* binding */ Clean,
/* harmony export */   "Confirm": () => /* binding */ Confirm,
/* harmony export */   "Error": () => /* binding */ Error,
/* harmony export */   "Loading": () => /* binding */ Loading,
/* harmony export */   "Request": () => /* binding */ Request,
/* harmony export */   "Success": () => /* binding */ Success,
/* harmony export */   "Verify": () => /* binding */ Verify
/* harmony export */ });
class Clean {
    static cleanInputs (inputs, textarea, submit) {
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = null;
        };
        textarea.value = null;
        submit.value = 'Crear';
    };
};

class Confirm {
    static ask (overlay) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <p class='card__title--ask'>¿Está usted seguro de crear la siguiente escritura?</p>
            <div class='card__button-container--ask'>
                <button class='card__button--ask'>Sí</button>
                <button class='card__button--ask'>No</button>
            </div>
        `;
        overlay.appendChild(card)
        card.classList.add('card--ask');
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;

        let yes = document.querySelector('.card__button--ask:first-child');
        let no = document.querySelector('.card__button--ask:last-child');
        return [yes, no, card];
    };
    static endAsk ([overlay, card], type) {
        card.style.opacity = 0;
        card.style.visibility = 'hidden';
        card.remove();
        if (type === 'no') {overlay.style.visibility = 'hidden'; overlay.style.opacity = 0;};
    };
};

class Error {
    static incomplete (body) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <p class='card__title--request-incomplete'>Complete los campos requeridos</p>
            <i class='card__icon--request-incomplete fas fa-exclamation'></i>
        `;
        body.appendChild(card);
        card.classList.add('card--request-incomplete');
        card.classList.add('active');
        setTimeout(() => card.remove(), 5000);
    };

    static requestError (overlay) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <i class='card__icon--request-failed far fa-times-circle'></i>
            <p class='card__title--request-failed'>Ha ocurrido un error al crear la escritura, inténtalo de nuevo.</p>
        `;
        overlay.appendChild(card);
        card.classList.add('card--request-failed');
        card.style.opacity = 1;

        setTimeout(() => {
            card.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
        }, 2000);
    };
};

class Loading {
    static generateLoading (overlay, load) {
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
        load.style.opacity = 1;
    };
    
    static removeLoading (load) {
        load.style.opacity = 0;
    };
};

class Request {
    static requestPost (escritura) {
        return fetch('https://reqres.in/api/users', {
        method : 'POST',
        body : escritura,
        header : {'Content-type' : 'application/json'}
        });
    };
};

class Success {
    static requestSuccess (overlay) {
        const card = document.createElement('DIV');
    
        card.innerHTML = `
            <i class='card__icon--request-success far fa-check-circle'></i>
            <p class='card__title--request-success'>¡Escritura creada correctamente!</p>
        `;
        overlay.appendChild(card);
        card.classList.add('card--request-success');
        card.style.opacity = 1;
        
        setTimeout(() => {
            card.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
        }, 2000);
    };
};

class Verify {
    static verifyInputs (title, number, textarea) {
        return new Promise((res, rej) => {
            if (title.value.length == 0 || number.value.length == 0 || textarea.value.length == 0 ) rej('incomplete');
            else res();
        });
    };
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