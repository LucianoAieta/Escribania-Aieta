class User {
    constructor (name, age, ) {
         
    }
}

class Menu {
    static create() {
        let header = document.querySelector('.template-header');
        let options = document.createElement('DIV');
        options.innerHTML = `
            <a href='#' class='atom-options-item'>Mi cuenta</a>
            <a href='#' class='atom-options-item'>Agenda</a>
            <a href='#' class='atom-options-item'>Calendario</a>
            <a href='#' class='atom-options-item'>Ajustes</a>
            <a href='#' class='atom-options-item'>Cerrar sesión</a>
        `;
        options.classList.add('molecule-menu-options');
        setTimeout(() => options.style.transform = 'scaleY(1)', 100);
        header.appendChild(options);
    };
    static remove(options) {
        options.style.transform = 'scaleY(0)'
        setTimeout(() => options.remove(), 300);
    };
};

export {Menu};