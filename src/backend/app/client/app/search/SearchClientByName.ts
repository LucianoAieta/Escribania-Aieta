import { ClientData } from '../../dom/interfaces/clientData';
import { ClientDB } from '../../infraestructure/clientdb';

export default class SearchClientByName {
	constructor(public text_inserted: string) {
		this.text_inserted = text_inserted;
	}

	async makeRequest(): Promise<ClientData[]> {
		return await ClientDB.searchByText(this.text_inserted);
	}

	async logic() {
		return await this.makeRequest();
	}
}
