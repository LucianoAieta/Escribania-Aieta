import { cardEntranceAnimation, cardExitAnimation } from './_animations';
export var confirmCard = function (title, options) {
    return new Promise(function (res, rej) {
        var card = document.createElement('div');
        card.innerHTML = "\n            <div class='atom-title-large'>" + title + "</div>\n            <div class='card-buttons'>\n                <button class='atom-button-green-outline'>" + options[0] + "</button>\n                <button class='atom-button-red-empty'>" + options[1] + "</button>\n            </div>\n        ";
        card.classList.add('molecule-confirm-card');
        var overlay = document.createElement('div');
        overlay.classList.add('organism-overlay');
        var body = document.querySelector('body');
        body.appendChild(overlay);
        cardEntranceAnimation(overlay, card);
        var yes_button = document.querySelector('.card-buttons .atom-button-green-outline');
        yes_button.addEventListener('click', function () {
            cardExitAnimation(overlay, card);
            res();
        });
        var no_button = document.querySelector('.card-buttons .atom-button-red-empty');
        no_button.addEventListener('click', function () {
            cardExitAnimation(overlay, card);
            rej('confirm canceled');
        });
    });
};
