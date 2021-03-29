class Menu {
	static create() {
		let header = document.querySelector('.template-header') as HTMLElement;
		let options = document.createElement('DIV') as HTMLElement;
		options.innerHTML = `
            <a href='#' class='atom-item-menuItem-optionsMenu'>Mi cuenta</a>
            <a href='#' class='atom-item-menuItem-optionsMenu'>Agenda</a>
            <a href='#' class='atom-item-menuItem-optionsMenu'>Calendario</a>
            <a href='#' class='atom-item-menuItem-optionsMenu'>Ajustes</a>
            <a href='#' class='atom-item-menuItem-optionsMenu'>Cerrar sesión</a>
        `;
		options.classList.add('molecule-menu-optionsMenu-mainHeader');
		setTimeout(() => (options.style.transform = 'scaleY(1)'), 100);
		header.appendChild(options);
	}

	static remove(options: HTMLElement) {
		options.style.transform = 'scaleY(0)';
		setTimeout(() => options.remove(), 300);
	}

	static run() {
		const options_button = <HTMLElement>(
			document.querySelector('.molecule-menu-optionsMenu-mainHeader')
		);
		options_button === null ? Menu.create() : Menu.remove(options_button);
	}
}

export { Menu };
