import {addClass, removeClass} from '../helpers/_classes';

const modificarA = () => {
    const amount_container = document.querySelector('.card__value-container');
    const escritura = document.getElementById("textarea");
    const title = document.getElementById("title");
    const input_price = document.getElementById("input-price");
    const check = document.getElementById("check");

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

export {modificarA};