import { cardEntranceAnimation, cardExitAnimation, } from '../../../helpers/_animations';
import { addInputsListeners } from '../../../helpers/_inputs';
var ClientCard = /** @class */ (function () {
    function ClientCard(client) {
        this.client = client;
    }
    ClientCard.createCard = function (client) {
        var card = document.createElement('div');
        card.innerHTML = "\n\t\t\t<div class='organism-crud-card-header'>\n\t\t\t\t<div class='atom-title-large'>" + client.name + " " + client.surname + "</div>\n\t\t\t\t<div class='molecule-crud-card-nav'>\n\t\t\t\t\t<div id='data-section' class='atom-crud-card-nav-item'>Datos</div>\n\t\t\t\t\t<div id='rel-section' class='atom-crud-card-nav-item'>Escrituras</div>\n\t\t\t\t\t<img id='card_menu' class='atom-icon-large' src='../assets/icons/svg/points-menu.svg'/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='organism-crud-card-body'>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Nombre</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' id='" + client.id + "' type='text' value='" + client.name + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Apellido</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.surname + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Email</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.email + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Nombre de usuario</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.username + "'>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Creado hace</div>\n\t\t\t\t\t<div class='atom-text-medium'>" + client.created_at + "</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='molecule-crud-card-body-item'>\n\t\t\t\t\t<div class='atom-title-small'>Estado</div>\n\t\t\t\t\t<input readonly='true' class='atom-crud-card-input' type='text' value='" + client.state + "'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
        var exit = document.createElement('div');
        exit.innerHTML = "\n\t\t\t<img id='exit' class='atom-icon-extra-large' src='../assets/icons/svg/cross-white.svg'/>\n\t\t";
        card.classList.add('organism-crud-card');
        var overlay = document.querySelector('.organism-overlay');
        cardEntranceAnimation(overlay, card, exit);
        var data_nav_button = document.querySelector('.organism-crud-card #data-section');
        data_nav_button.style.backgroundColor = '#E8E8E8';
    };
    ClientCard.deleteCard = function () {
        var card = document.querySelector('.organism-crud-card');
        var overlay = document.querySelector('.organism-overlay');
        var exit = document.querySelector('.organism-overlay #exit');
        cardExitAnimation(overlay, card, exit);
    };
    ClientCard.runOptions = function () {
        var menu = document.querySelector('.organism-crud-card-header .molecule-menu-options');
        menu === null ? this.showOptions() : this.hideOptions(menu);
    };
    ClientCard.showOptions = function () {
        var header = document.querySelector('.organism-crud-card-header');
        var menu = document.createElement('DIV');
        menu.innerHTML = "\n            <a id='edit' class='atom-options-item'>Editar datos</a>\n            <a id='delete' class='atom-options-item'>Borrar cliente</a>\n        ";
        menu.classList.add('molecule-menu-options');
        setTimeout(function () { return (menu.style.transform = 'scaleY(1)'); }, 10);
        header.appendChild(menu);
    };
    ClientCard.hideOptions = function (options) {
        options.style.transform = 'scaleY(0)';
        setTimeout(function () { return options.remove(); }, 300);
    };
    ClientCard.runInputsAndCheckButton = function () {
        var confirm_button = document.querySelector('#save-edit');
        if (confirm_button === null)
            this.showInputsAndCheckButton();
    };
    ClientCard.showInputsAndCheckButton = function () {
        var inputs = document.querySelectorAll('.organism-crud-card .atom-crud-card-input');
        inputs.forEach(function (input) {
            input.style.borderColor = '#BDBDBD';
            input.readOnly = false;
        });
        var check_button = document.createElement('div');
        check_button.innerHTML = "\n\t\t\t<img src='../assets/icons/svg/check-white.svg' class='atom-icon-large' />\n\t\t";
        check_button.classList.add('atom-crud-card-icon-button');
        check_button.title = 'Confirmar edición';
        check_button.id = 'save-edit';
        setTimeout(function () { return (check_button.style.opacity = '1'); }, 10);
        var card_nav = document.querySelector('.organism-crud-card-header .molecule-crud-card-nav');
        var card_nav_button = document.querySelector('.atom-crud-card-nav-item:first-child');
        card_nav.insertBefore(check_button, card_nav_button);
        addInputsListeners(inputs);
    };
    ClientCard.hideInputsAndCheckButton = function () {
        var inputs = document.querySelectorAll('.organism-crud-card .atom-crud-card-input');
        inputs.forEach(function (input) {
            input.style.borderColor = '#FFFFFF';
            input.readOnly = true;
        });
        var confirm_button = document.querySelector('#save-edit');
        confirm_button.style.opacity = '0';
        setTimeout(function () { return confirm_button.remove(); }, 400);
    };
    ClientCard.updateTitle = function (name, surname) {
        var title = document.querySelector('.organism-crud-card-header .atom-title-large');
        title.textContent = name + " " + surname;
    };
    return ClientCard;
}());
export { ClientCard };
