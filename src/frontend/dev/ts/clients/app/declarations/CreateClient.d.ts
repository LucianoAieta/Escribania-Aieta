import ClientDataToCreate from './ClientDataToCreate';

export default CreateClientLogic;

declare interface CreateClientLogic {
	data: ClientDataToCreate;
	confirm(): Promise<void>;
	verify(): Promise<void>;
	requestCreate(): Promise<void>;
	finish(): void;
	logic(): Promise<void>;
}
