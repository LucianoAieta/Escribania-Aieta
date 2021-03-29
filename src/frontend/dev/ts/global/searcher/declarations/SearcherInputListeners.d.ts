import SearcherInput from '../dom/SearcherInput';

export default SearcherInputListenersLogic;

declare interface SearcherInputListenersLogic {
	PAGE_TYPE: string;
	close(SEARCH_INPUT_CLASS: SearcherInput): void;
	search(): void;
	open(SEARCH_INPUT_CLASS: SearcherInput): void;
	logic(): void;
}
