import {addClass, removeClass} from '../helpers/_classes.js';
import {createCard_b} from '../modules/_create-cards.js';
import {createPromise} from '../helpers/_create-promise.js';
import {animacionEntrada, animacionSalida} from '../modules/_animations.js'

const lista = document.querySelector(".list");
let peticion;
let datos;
let entry;

// CARGA DE ESCRITURAS
(async () => {
    peticion = await axios("prueba.json");
    datos = await peticion.data.escrituras;

    for(let i = 0; i < 5; i++) {
        let titulo = datos[i].title;
        let monto = datos[i].amount;
        const escritura = document.createElement("DIV");

        escritura.innerHTML = `
            <p class="list__title">${titulo}</p>
            <p class="list__amount">$${monto}</p>
        `;
        escritura.classList.add("list__item");
        lista.appendChild(escritura);
    };
    entry = document.getElementsByClassName("list__item");
    analizarEscrituras();
})();

let analizarEscrituras = () => {
    for (let i = 0; i < entry.length; i++) {
        const element = entry[i];
        element.addEventListener('click', async (clicked) => {

            let objectWriting = {
                title : datos[i].title,
                content : datos[i].content,
                amount : datos[i].amount
            };
            await createPromise(createCard_b(objectWriting));
            exit.addEventListener('click', () => animacionSalida());
            await createPromise(animacionEntrada());

            let amount_container = document.querySelector('.card__value-container')
            // MODIFICAR

            const escritura = document.getElementById("textarea");
            const title = document.getElementById("title");
            const modif = document.getElementById("modif");
            const input_price = document.getElementById("input-price");
            const check = document.getElementById("check");
            check.style.visibility = "hidden";

            modif.addEventListener('click', () => {
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
            });
            
            // BORRAR CLIENTE
            
            let delete_overlay = document.getElementById("overlay--delete");
            let delete_icon = document.getElementById("delete");
            let delete_container;

            delete_icon.addEventListener('click', () => {
                let delete_card = document.createElement("div");
                delete_card.innerHTML = `
                <div class="card--delete" id="delete-container">
                    <p class="card__title--delete">¿Está seguro de querer borrar la escritura seleccionada?</p>
                    <div class="card__button-container--delete">
                        <div class="card__button--delete card__button--yes" id="delete-yes">Si</div>
                        <div class="card__button--delete card__button--no" id="delete-no">No</div>
                    </div>
                </div>
            `;
            
            delete_overlay.appendChild(delete_card);

            delete_container = document.getElementById("delete-container");
            addClass(delete_overlay);

            setTimeout(() => addClass(delete_container), 100);

            // NO BORRAR

            let delete_no = document.getElementById("delete-no");

            delete_no.addEventListener('click', () => {
                removeClass(delete_container);
                setTimeout(() => {
                        delete_card.remove();
                        removeClass(delete_overlay);
                    },100);
            });

            // SI BORRAR 

            let delete_yes = document.getElementById("delete-yes");

            delete_yes.addEventListener('click', () => {

                removeClass(delete_container);
                setTimeout(() => delete_card.remove(),200);
                setTimeout(() => removeClass(delete_overlay), 220);
                setTimeout(() => {
                        removeClass(card);
                        value_write.classList.remove("act");
                    }, 500);
                setTimeout(() => removeClass(overlay), 750);
                setTimeout(() => data.remove(), 800);
                setTimeout(() => element.classList.add("delete"), 1200);
                setTimeout(() => element.remove(), 2000);
            });
        });
    });
}};