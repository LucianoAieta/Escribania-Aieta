import PersonData from '../PersonData';

declare interface Delete {
	data: PersonData;
	confirm(): void;
	deleteRequest(): void;
	finish(): void;
	logic(): void;
}

export default Delete;
