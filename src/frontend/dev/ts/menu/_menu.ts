class Menu {
	static create() {
		let header = <HTMLElement>document.querySelector('.template-header');
		let options = <HTMLElement>document.createElement('DIV');
		options.innerHTML = `
            <a href='#' class='atom-options-item'>Mi cuenta</a>
            <a href='#' class='atom-options-item'>Agenda</a>
            <a href='#' class='atom-options-item'>Calendario</a>
            <a href='#' class='atom-options-item'>Ajustes</a>
            <a href='#' class='atom-options-item'>Cerrar sesión</a>
        `;
		options.classList.add('molecule-menu-options');
		setTimeout(() => (options.style.transform = 'scaleY(1)'), 100);
		header.appendChild(options);
	}

	static remove(options: HTMLElement) {
		options.style.transform = 'scaleY(0)';
		setTimeout(() => options.remove(), 300);
	}

	static run() {
		const options_button = <HTMLElement>(
			document.querySelector('.molecule-menu-options')
		);
		options_button === null ? Menu.create() : Menu.remove(options_button);
	}
}

export { Menu };
