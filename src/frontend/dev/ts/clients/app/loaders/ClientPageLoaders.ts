import ClientData from '../../declarations/ClientData';
import deleteClientList from '../../dom/lists/DeleteClientList';
import { listClients } from '../../dom/lists/ListClients';
import { ClientGet } from '../../infraestructure/requests/ClientGet';
import ClientPageListeners from '../listeners/ClientPageListeners';

export default class ClientPageLoaders {
	static async atPageStart() {
		await this.listClients();

		const CLIENT_LIST: HTMLElement[] = Array.from(
			document.querySelectorAll('.molecule-item-listItem-crudList')
		);

		ClientPageListeners.items(CLIENT_LIST);
	}

	static async reloadAndRelist(CLIENT_DATA?: ClientData[]) {
		let ClientList = deleteClientList();
		await this.listClients(CLIENT_DATA);

		ClientList = Array.from(
			document.querySelectorAll('.molecule-item-listItem-crudList')
		);

		ClientPageListeners.items(ClientList);
	}

	static async listClients(CLIENT_DATA?: ClientData[]) {
		if (CLIENT_DATA) listClients(CLIENT_DATA);
		else listClients(await ClientGet.getClients());
	}
}
