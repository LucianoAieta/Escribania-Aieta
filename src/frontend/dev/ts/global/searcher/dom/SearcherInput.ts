export default class SearcherInput {
	search: HTMLElement;
	input: HTMLElement;
	minimize: HTMLElement;

	constructor(
		search: HTMLElement,
		input: HTMLInputElement,
		minimize: HTMLElement
	) {
		this.search = search;
		this.input = input;
		this.minimize = minimize;
	}

	show() {
		const header = document.querySelector(
			'.organism-header-main .atom-title-large'
		) as HTMLElement;

		const show = (item: HTMLElement) => {
			if (window.screen.availWidth <= 768) header.style.display = 'none';
			item.style.display = 'inline';
			setTimeout(() => (item.style.opacity = '1'), 100);
		};

		show(this.minimize);
		show(this.input);
	}

	hide() {
		const header = document.querySelector(
			'.organism-header-main .atom-title-large'
		) as HTMLElement;

		const hide = (item: HTMLElement) => {
			if (window.screen.availWidth <= 768) header.style.display = 'block';
			item.style.opacity = '0';
			setTimeout(() => (item.style.display = 'none'), 300);
		};

		hide(this.minimize);
		hide(this.input);
	}
}
