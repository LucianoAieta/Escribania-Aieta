import { Menu } from '../global/menu/menu';

const menu_button: HTMLElement = document.querySelector('#menu');
menu_button.addEventListener('click', () => Menu.run());
