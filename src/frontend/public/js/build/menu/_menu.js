var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.create = function () {
        var header = document.querySelector('.template-header');
        var options = document.createElement('DIV');
        options.innerHTML = "\n            <a href='#' class='atom-options-item'>Mi cuenta</a>\n            <a href='#' class='atom-options-item'>Agenda</a>\n            <a href='#' class='atom-options-item'>Calendario</a>\n            <a href='#' class='atom-options-item'>Ajustes</a>\n            <a href='#' class='atom-options-item'>Cerrar sesi\u00F3n</a>\n        ";
        options.classList.add('molecule-menu-options');
        setTimeout(function () { return (options.style.transform = 'scaleY(1)'); }, 100);
        header.appendChild(options);
    };
    Menu.remove = function (options) {
        options.style.transform = 'scaleY(0)';
        setTimeout(function () { return options.remove(); }, 300);
    };
    Menu.run = function () {
        var options_button = (document.querySelector('.molecule-menu-options'));
        options_button === null ? Menu.create() : Menu.remove(options_button);
    };
    return Menu;
}());
export { Menu };
