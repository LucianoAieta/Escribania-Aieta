import {Menu} from '../modules/_menu'

let menu = document.querySelector('.template-header .atom-icon-extra-large')
let options = () => document.querySelector('.molecule-menu-options');
console.log(options())
menu.addEventListener('click', () => {
    if (options() === null) Menu.create();
    else Menu.remove(options());
});
