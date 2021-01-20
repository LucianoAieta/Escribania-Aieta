import {addClass, removeClass} from '../helpers/_classes.js';
import {createCardB} from '../modules/_create-cards.js';
import {createPromise} from '../helpers/_create-promise.js';
import {animacionEntrada, animacionSalida} from '../modules/_animations.js'
import { modificarB } from '../modules/_modify.js';
import { deleteB } from '../modules/_delete.js';

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

    for(let i = 0; i < 5; i++) {
        let titulo = datos[i].title;
        let monto = datos[i].amount;

        const escritura = document.createElement('DIV');
        escritura.innerHTML = `
            <p class='list__title'>${titulo}</p>
            <p class='list__amount'>$${monto}</p>
        `;
        
        escritura.classList.add('list__item');
        lista.appendChild(escritura);
    };
    entry = document.getElementsByClassName('list__item');
    analizarEscrituras();
})();

const analizarEscrituras = () => {
    for (let i = 0; i < entry.length; i++) {
        const element = entry[i];
        element.addEventListener('click', async (clicked) => {

            let objectWriting = {
                title : datos[i].title,
                content : datos[i].content,
                amount : datos[i].amount
            };

            // Crear tarjeta
            await createPromise(createCardB(objectWriting));
            // Añadir listener en el boton de salida
            exit.addEventListener('click', () => animacionSalida());
            // Animacion de entrada
            await createPromise(animacionEntrada());
            // Añadir listener en el boton de modificar (ejecuta toda la secuencia)
            let modif = document.querySelector('#modif');
            modif.addEventListener('click', () => modificarB());
            // Mostrar el mensaje de si se quiere borrar o no, segun lo presionado se ejecutan funciones
            deleteB(element);
    });
}};