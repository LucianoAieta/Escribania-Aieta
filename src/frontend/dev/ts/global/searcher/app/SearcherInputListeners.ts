import SearcherInputListenersLogic from '../declarations/SearcherInputListeners';
import SearcherInput from '../dom/SearcherInput';
import Search from './Search';

export default class SearcherInputListeners
	implements SearcherInputListenersLogic {
	constructor(public PAGE_TYPE: string) {
		this.PAGE_TYPE = PAGE_TYPE;
	}

	close(SEARCH_INPUT_CLASS: SearcherInput) {
		const MINIMIZE_BUTTON = document.querySelector('#minimize') as HTMLElement;
		MINIMIZE_BUTTON.addEventListener('click', () => SEARCH_INPUT_CLASS.hide());
	}

	open(SEARCH_INPUT_CLASS: SearcherInput) {
		const SEARCH_BUTTON = document.querySelector('#search') as HTMLElement;
		SEARCH_BUTTON.addEventListener('click', () => SEARCH_INPUT_CLASS.show());
	}

	search() {
		const SEARCH_INPUT = document.querySelector('#search-input') as HTMLElement;

		SEARCH_INPUT.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				const SEARCH = new Search(e, this.PAGE_TYPE);
				SEARCH.logic();
				e.preventDefault();
			}
		});
	}

	logic() {
		const SEARCH_BUTTON = document.querySelector('#search') as HTMLElement;
		const SEARCH_INPUT = document.querySelector(
			'#search-input'
		) as HTMLInputElement;
		const SEARCH_MINIMIZE_BUTTON = document.querySelector(
			'#minimize'
		) as HTMLElement;
		const SEARCH_INPUT_CLASS = new SearcherInput(
			SEARCH_BUTTON,
			SEARCH_INPUT,
			SEARCH_MINIMIZE_BUTTON
		);

		this.close(SEARCH_INPUT_CLASS);
		this.open(SEARCH_INPUT_CLASS);
		this.search();
	}
}
