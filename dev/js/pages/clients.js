import {Menu} from '../modules/_menu';
import {Search} from '../modules/_search';

/* Menú de navegación */
let menu = document.querySelector('#menu');
let options = () => document.querySelector('.molecule-menu-options');

menu.addEventListener('click', () => {
    if (options() === null) Menu.create();
    else Menu.remove(options());
});

/* Buscador */
let search_button = document.querySelector('#search');
let search_input = document.querySelector('#search-input');
let minimize = document.querySelector('#minimize');

let search = new Search(search_button, search_input, minimize)

search_button.addEventListener('click', () => search.showInput());
minimize.addEventListener('click', () => search.hideInput());