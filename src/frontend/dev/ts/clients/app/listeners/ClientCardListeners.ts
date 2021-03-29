import ClientData from '../../declarations/ClientData';
import { ClientCard } from '../../dom/cards/ClientCard';
import ClientCardListenersLogic from '../declarations/listeners/ClientCardListeners';
import DeleteClient from '../DeleteClient';
import { EditClient } from '../EditClient';
import ClientPageLoaders from '../loaders/ClientPageLoaders';

export default class ClientCardListeners implements ClientCardListenersLogic {
	constructor(public client_data: ClientData) {
		this.client_data = client_data;
	}

	menu() {
		const options_icon = document.querySelector('#card_menu') as HTMLElement;

		options_icon.addEventListener('click', () => {
			ClientCard.runOptions();
			this.delete();
			this.edit();
		});
	}

	delete() {
		const delete_button = document.querySelector(
			'.organism-header-cardHeader-crudCard .molecule-menu-optionsMenu-crudCard #delete'
		) as HTMLElement;

		delete_button.addEventListener('click', async () => {
			const deleted_client_class = new DeleteClient(this.client_data);
			await deleted_client_class.logic();
			await ClientPageLoaders.reloadAndRelist();
		});
	}

	edit() {
		const edit_button = document.querySelector(
			'.organism-header-cardHeader-crudCard .molecule-menu-optionsMenu-crudCard #edit'
		) as HTMLElement;

		edit_button.addEventListener('click', () => {
			const save_edit_button = document.querySelector(
				'#save-edit'
			) as HTMLElement;

			if (!save_edit_button) {
				EditClient.set();
				this.confirmEdit();
			}
		});
	}

	confirmEdit() {
		const confirm_button = document.querySelector('#save-edit') as HTMLElement;

		confirm_button.addEventListener('click', async () => {
			const [name, surname, email, username, state] = Array.from(
				document.querySelectorAll('.atom-inputText-cardInput-crudCard')
			);

			const client_data_toupdate: ClientDataToUpdate = {
				name: name.value,
				surname: surname.value,
				username: username.value,
				email: email.value,
				state: state.value,
			};

			const edited_client_class = new EditClient(
				client_data_toupdate,
				this.client_data
			);

			await edited_client_class.logic();
			await ClientPageLoaders.reloadAndRelist();
		});
	}

	exit() {
		const exit_button = document.querySelector(
			'.organism-overlay-defaultOverlay #exit'
		) as HTMLElement;

		exit_button.addEventListener('click', () => ClientCard.deleteCard());
	}

	logic() {
		this.exit();
		this.menu();
	}
}
