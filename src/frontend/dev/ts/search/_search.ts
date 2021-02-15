export default interface Search {
	search: HTMLElement;
	input: HTMLElement;
	minimize: HTMLElement;
}

export default class Search implements Search {
	constructor(search: HTMLElement, input: HTMLElement, minimize: HTMLElement) {
		this.search = search;
		this.input = input;
		this.minimize = minimize;
	}

	showInput() {
		let header = <HTMLElement>(
			document.querySelector('.organism-header-main .atom-title-large')
		);
		const show = (item: HTMLElement) => {
			if (window.screen.availWidth <= 768) header.style.display = 'none';
			item.style.display = 'inline';
			setTimeout(() => (item.style.opacity = '1'), 100);
		};
		show(this.minimize);
		show(this.input);
	}

	hideInput() {
		let header = <HTMLElement>(
			document.querySelector('.organism-header-main .atom-title-large')
		);
		const hide = (item) => {
			if (window.screen.availWidth <= 768) header.style.display = 'block';
			item.style.opacity = 0;
			setTimeout(() => (item.style.display = 'none'), 300);
		};
		hide(this.minimize);
		hide(this.input);
	}

	static run() {
		const search_button = <HTMLElement>document.querySelector('#search');
		const search_input = <HTMLElement>document.querySelector('#search-input');
		const minimize_button = <HTMLElement>document.querySelector('#minimize');
		const search = new Search(search_button, search_input, minimize_button);
		search_button.addEventListener('click', () => search.showInput());
		minimize_button.addEventListener('click', () => search.hideInput());
	}
}
