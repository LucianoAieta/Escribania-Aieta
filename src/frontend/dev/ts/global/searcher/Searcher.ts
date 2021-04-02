import SearcherInputListeners from './app/SearcherInputListeners';
import SearcherLogic from './declarations/Searcher';

export default class Searcher implements SearcherLogic {
	constructor(public PAGE_TYPE: string) {
		this.PAGE_TYPE = PAGE_TYPE;
	}

	run() {
		const listeners = new SearcherInputListeners(this.PAGE_TYPE);
		listeners.logic();
	}
}
