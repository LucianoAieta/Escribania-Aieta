import Alert from '../../helpers/_alert';
import { confirmCard } from '../../helpers/_confirm-card';
import { verifyIfIsEmpty } from '../../helpers/_validators';
import { Menu } from '../../menu/_menu';
import { ClientCard } from '../dom/cards/_ClientCard';
import { ClientData } from '../dom/declarations/_ClientData';
import { ClientPost } from '../infraestructure/requests/_ClientPost';
import { ClientPut } from '../infraestructure/requests/_ClientPut';
import { ClientApp } from './declarations/_Client';

export class Client implements ClientApp {
	constructor(public client: ClientData) {
		this.client = client;
	}

	runMenu() {
		ClientCard.runOptions();
	}

	async deleteClient() {
		await confirmCard(
			`¿Estás seguro de que quieres borrar el cliente ${this.client.name} ${this.client.surname}?`,
			['Borrar', 'Cancelar']
		);
		await ClientPost.deleteClient(this.client.id);
		ClientCard.deleteCard();
	}

	editClient() {
		ClientCard.runInputsAndCheckButton();

		const options = document.querySelector(
			'.organism-crud-card-header .molecule-menu-options'
		) as HTMLElement;

		Menu.remove(options);
	}

	async confirmEditClientAndUpdateData() {
		const actual_client = this.client;

		const [name, surname, email, username, state] = Array.from(
			document.querySelectorAll('.atom-crud-card-input')
		);

		const client_data_toupdate: ClientData = {
			id: actual_client.id,
			name: name.value,
			surname: surname.value,
			username: username.value,
			password: actual_client.password,
			email: email.value,
			created_at: actual_client.created_at,
			state: state.value,
		};

		try {
			await verifyIfIsEmpty(client_data_toupdate);

			await confirmCard('¿Está seguro de que los datos son correctos?', [
				'Confirmar',
				'Volver a editar',
			]);

			await ClientPut.updateClientData(client_data_toupdate);

			ClientCard.hideInputsAndCheckButton();
		} catch (e) {
			throw e;
		}

		ClientCard.updateTitle(name.value, surname.value);
	}

	closeCard() {
		ClientCard.deleteCard();
	}
}
