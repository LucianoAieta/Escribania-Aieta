export default SearchLogic;

declare interface SearchLogic {
	page_type: string;
	text: string;
	key: KeyboardEvent;

	makeRequest(): void;
	listResults(): void;
	logic(): void;
}
