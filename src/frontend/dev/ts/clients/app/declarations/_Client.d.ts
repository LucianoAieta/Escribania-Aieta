import { ClientData } from '../../dom/declarations/_ClientData';

export declare interface ClientApp {
	client: ClientData;
	runMenu(): void;
	deleteClient(): Promise<void>;
	editClient(): void;
	confirmEditClientAndUpdateData(): Promise<void>;
}
