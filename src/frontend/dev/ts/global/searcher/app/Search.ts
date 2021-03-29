import ClientPageLoaders from '../../../clients/app/loaders/ClientPageLoaders';
import ClientData from '../../../clients/declarations/ClientData';
import { listClients } from '../../../clients/dom/lists/ListClients';
import SearcherGet from '../infrastructure/SearcherGet';

export default class Search {
	constructor(public KEY: KeyboardEvent, public PAGE_TYPE: string) {
		this.KEY = KEY;
		this.PAGE_TYPE = PAGE_TYPE;
	}

	get TEXT() {
		const INPUT = document.querySelector('#search-input') as HTMLInputElement;
		return INPUT.value;
	}

	async makeRequest() {
		return await SearcherGet.getByText(this.PAGE_TYPE, this.TEXT);
	}

	async listResults(DATA_ARRAY: ClientData[]) {
		if (this.PAGE_TYPE === 'clients')
			ClientPageLoaders.reloadAndRelist(DATA_ARRAY);
	}

	async logic() {
		await this.listResults(await this.makeRequest());
	}
}
