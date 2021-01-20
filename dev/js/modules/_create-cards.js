import {addClass} from '../helpers/_classes';

class CardB {
    constructor () {};

    static createCard (obj) {
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
        addClass(overlay);
        const check = document.querySelector('#check');
        check.style.visibility = 'hidden';
    };
};


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
}


const clase = new CardB();

export {CardB, createDeleteCard, createCardIncomplete};