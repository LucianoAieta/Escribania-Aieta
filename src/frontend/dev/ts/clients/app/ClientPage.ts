import { Menu } from '../../global/menu/menu';
import Searcher from '../../global/searcher/Searcher';
import '../../../sass/styles.sass';
import ClientPageLoaders from './loaders/ClientPageLoaders';
import CreateClientListeners from './listeners/CreateClientListeners';

const menu_button = document.querySelector('#menu') as HTMLElement;
menu_button.addEventListener('click', () => Menu.run());

const searcher = new Searcher('clients');

searcher.run();

(async () => {
	await ClientPageLoaders.atPageStart();
	CreateClientListeners.buttonShowCard();
})();
