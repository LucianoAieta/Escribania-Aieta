import {addClass, removeClass} from '../helpers/_classes';

const modificarB = () => {
    const amount_container = document.querySelector('.card__value-container');
    const escritura = document.querySelector("#textarea");
    const title = document.querySelector("#title");
    const input_price = document.querySelector("#input-price");
    const check = document.querySelector("#check");

    addClass(title);
    addClass(escritura);
    addClass(amount_container);
    addClass(input_price);

    modif.style.visibility = "hidden";
    check.style.visibility = "visible";

    check.addEventListener('click', () => {
        removeClass(title);
        removeClass(escritura);
        removeClass(amount_container);
        removeClass(input_price);

        check.style.visibility = "hidden";
        modif.style.visibility = "visible";
    });
};

export {modificarB};