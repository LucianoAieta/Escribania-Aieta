import SearcherInputListeners from './app/SearcherInputListeners';
import SearcherLogic from './declarations/Searcher';

export default class Searcher implements SearcherLogic {
	constructor(public page_type: string) {
		this.page_type = page_type;
	}

	run() {
		const listeners = new SearcherInputListeners(this.page_type);

		listeners.logic();
	}
}
