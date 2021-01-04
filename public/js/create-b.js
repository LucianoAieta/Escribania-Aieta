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
/***/ (function(module, exports) {

let inputs = document.querySelectorAll('input[class]');
let title = inputs[0];
let number = inputs[1];
let submit = inputs[2];
let textarea = document.querySelector("textarea");

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const body = document.querySelector(".body");
    const overlay = document.querySelector(".overlay--petitions");
    const carga = document.querySelector(".charge");
    let escritura = `{"title" : ${title.value},"amount" : ${number.value},"content" : ${textarea.value}}`;

    let verificarEscritura = () => {
        try {
            if (title.value.length == 0 || number.value.length == 0 || textarea.value.length == 0 ) throw("completar");
        } finally {};
    };

    const completeCampos = () => {
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

    const generarCarga = () => {
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        carga.style.opacity = 1;
    };

    const quitarCarga = () => {
        carga.style.opacity = 0;
    };

    const peticionExitosa = () => {
        const tarjeta = document.createElement("DIV");

        tarjeta.innerHTML = `
            <i class="card__icon--petition-success far fa-check-circle"></i>
            <p class="card__title--petition-success">¡Escritura creada correctamente!</p>
        `;
        overlay.appendChild(tarjeta);
        tarjeta.classList.add("card--petition-success")
        tarjeta.style.opacity = 1;
        

        setTimeout(() => {
            tarjeta.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
        }, 2000);
    };
    
    const peticionErronea = () => {
        const tarjeta = document.createElement("DIV");
        tarjeta.innerHTML = `
            <i class="card__icon--petition-failed far fa-times-circle"></i>
            <p class="card__title--petition-failed">Ha ocurrido un error al crear la escritura, inténtalo de nuevo.</p>
        `;
        overlay.appendChild(tarjeta);
        tarjeta.classList.add("card--petition-failed")
        tarjeta.style.opacity = 1;

        setTimeout(() => {
            tarjeta.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
        }, 2000);
    };

    const limpiarInputs = () => {
        for(input in inputs) {
            inputs[input].value = null;
        }
        textarea.value = null;
        submit.value = "Crear";
    };

    let enviarEscritura = (obj) => {
        fetch("https://reqres.in/api/users", {
            method : "POST",
            body : obj,
            header : {"Content-type" : "application/json"}
        })
            .then(() => document.addEventListener("loadend", quitarCarga()))
            .then(() => document.removeEventListener("loadend", quitarCarga()))
            .then(() => peticionExitosa())
            .then(() => limpiarInputs())
            .catch(() => peticionErronea());
    };

    // FUNCION MAESTRA
    (() => {
        try {
            const verificar = verificarEscritura();
            const enviar = enviarEscritura(escritura);
            const carga = generarCarga();
        } 
        catch (e) {
            if(e == "completar") completeCampos();
            else peticionErronea();
        };
    })();
});

/***/ })
/******/ ]);