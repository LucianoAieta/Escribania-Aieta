import { Menu } from '../menu/_menu';

const menu_button: HTMLElement = document.querySelector('#menu');
menu_button.addEventListener('click', () => Menu.run());
