import {addClass, removeClass} from '../helpers/_classes';
import {createDeleteCard} from '../modules/_create-cards'

const deleteB = async (element) => {
    let overcard = document.querySelector('.overcard');
    let amount_container = document.querySelector('.card__value-container');
    let overlay = document.querySelector('#overlay')

    let delete_overlay = document.querySelector('#overlay--delete');
    let delete_icon = document.querySelector('#delete');
    let delete_card = createDeleteCard();

    delete_icon.addEventListener('click', () => {

        delete_overlay.appendChild(delete_card);
        addClass(delete_overlay);
        
        let delete_container = document.querySelector('#delete-container');
        setTimeout(() => addClass(delete_container), 100);
        
        let delete_no = document.querySelector('#delete-no');
        let delete_yes = document.querySelector('#delete-yes');

        // NO BORRAR
        delete_no.addEventListener('click', () => {
            removeClass(delete_container);
            setTimeout(() => {
                    delete_card.remove();
                    removeClass(delete_overlay);
                },100);
        });

        // SI BORRAR 

        delete_yes.addEventListener('click', () => {
            removeClass(delete_container);
            setTimeout(() => delete_card.remove(),200);
            setTimeout(() => removeClass(delete_overlay), 220);
            setTimeout(() => {
                removeClass(card);
                amount_container.classList.remove('act');
            }, 500);
            setTimeout(() => removeClass(overlay), 750);
            setTimeout(() => overcard.remove(), 800);
            setTimeout(() => element.classList.add('delete'), 1200);
            setTimeout(() => element.remove(), 2000);
        });
    });
};

export {deleteB};