import {addClass, removeClass} from '../helpers/_classes.js'

const animacionEntrada = () => {
    setTimeout(() => {
        let card = document.getElementById("card");
        addClass(card)
    }, 100);
    setTimeout( () => {
        let value_write = document.getElementById("value-write");
        value_write.classList.add("act");
    }, 400);
    clearTimeout()
}

const animacionSalida = () => {
    let a = document.querySelector('.overcard');
    let b = document.querySelector('.card__value-container');
    b.classList.remove("act");
    removeClass(overlay);
    removeClass(card);
    setTimeout(() => a.remove(), 300);
}

export {animacionEntrada, animacionSalida};