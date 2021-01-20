import {Menu} from '../modules/_index'

let menu = document.querySelector('.template-header .atom-icon-extra-large')
let options = () => document.querySelector('.molecule-menu-options');+

menu.addEventListener('click', () => {
    if (options() == undefined) Menu.create();
    else Menu.remove(options());
});