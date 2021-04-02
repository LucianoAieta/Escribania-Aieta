import CreateButtonListener from './buttons/create/CreateButtonListener';
import MenuListeners from './buttons/menu/app/MenuListeners';
import ReloadButtonListener from './buttons/reload/ReloadButtonListener';

export default class HeaderListeners {
	constructor(public PAGE_TYPE: string) {
		this.PAGE_TYPE = PAGE_TYPE;
	}

	public run() {
		if (this.PAGE_TYPE === 'index') {
			const menuListeners = new MenuListeners(this.PAGE_TYPE);
			menuListeners.run();
		} else if (this.PAGE_TYPE === 'clients') {
			const menuListeners = new MenuListeners(this.PAGE_TYPE);
			menuListeners.run();

			ReloadButtonListener(this.PAGE_TYPE);

			CreateButtonListener(this.PAGE_TYPE);
		}
	}
}
