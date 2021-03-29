import PersonData from '../PersonData';
import PersonDataToUpdate from '../PersonDataToUpdate';

declare type Edit = {
	new_data: PersonDataToUpdate;
	actual_data: PersonData;
	verify(): void;
	confirm(): void;
	update(): void;
	finish(): void;
};

export default Edit;
