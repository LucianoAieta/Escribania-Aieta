import { Menu } from '../menu/_menu';
var menu_button = document.querySelector('#menu');
menu_button.addEventListener('click', function () { return Menu.run(); });
