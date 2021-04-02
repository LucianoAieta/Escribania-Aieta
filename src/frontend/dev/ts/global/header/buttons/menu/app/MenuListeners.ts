import MenuDOM from '../dom/MenuDOM';

export default class MenuListeners {
	constructor(public PAGE_TYPE: string) {
		this.PAGE_TYPE = PAGE_TYPE;
	}

	run() {
		const MENU_BUTTON = document.querySelector('#menu') as HTMLElement;

		MENU_BUTTON.addEventListener('click', () => {
			const MENU_CARD: HTMLElement = document.querySelector(
				'.molecule-menu-optionsMenu-mainHeader'
			);
			MENU_CARD === null ? MenuDOM.create() : MenuDOM.remove(MENU_CARD);
		});
	}
}
