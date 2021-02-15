import { cardEntranceAnimation, cardExitAnimation, } from '../../../helpers/_animations';
import { addInputsListeners } from '../../../helpers/_inputs';
var CreateClientCard = /** @class */ (function () {
    function CreateClientCard(client) {
        this.client = client;
    }
    CreateClientCard.showCard = function () {
        var card = document.createElement('div');
        card.innerHTML = "\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Nombre</div>\n                <input id='input-name' type='text' placeholder='Nombre personal' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Apellido</div>\n                <input id='input-surname' type='text' placeholder='Apellido personal' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Email</div>\n                <input id='input-email' type='text' placeholder='Email' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Nombre de usuario</div>\n                <input id='input-username' type='text' placeholder='Nombre para iniciar sesi\u00F3n' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <div class='atom-title-small'>Contrase\u00F1a</div>\n                <input id='input_password' type='text' placeholder='Contrase\u00F1a para iniciar sesi\u00F3n' class='atom-create-card-input'/>\n            </div>\n            <div class='molecule-crud-card-body-item'>\n                <input type='button' value='Crear cliente' class='atom-button-primary-outline' />\n                <input type='button' value='Cancelar' class='atom-button-primary-empty' />\n            </div>\n        ";
        card.classList.add('organism-create-card-body');
        var overlay = document.querySelector('.organism-overlay');
        cardEntranceAnimation(overlay, card);
        var inputs = document.querySelectorAll('.atom-create-card-input');
        addInputsListeners(inputs);
    };
    CreateClientCard.hideCard = function () {
        var overlay = document.querySelector('.organism-overlay');
        var card = (document.querySelector('.organism-create-card-body'));
        cardExitAnimation(overlay, card);
    };
    return CreateClientCard;
}());
export { CreateClientCard };
