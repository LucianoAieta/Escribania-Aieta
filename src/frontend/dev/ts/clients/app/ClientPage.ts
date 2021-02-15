import Alert from '../../helpers/_alert.js';
import { confirmCard } from '../../helpers/_confirm-card.js';
import { Menu } from '../../menu/_menu.js';
import Search from '../../search/_search.js';
import { ClientCard } from '../dom/cards/_ClientCard.js';
import { ClientData } from '../dom/declarations/_ClientData.js';
import { listClients } from '../dom/_ListClients.js';
import { ClientGet } from '../infraestructure/requests/_ClientGet.js';
import { ClientDataToCreate } from './declarations/_CreateClient.js';
import { Client } from './_Client.js';
import CreateClient from './_CreateClient.js';

const menu_button = document.querySelector('#menu') as HTMLElement;

menu_button.addEventListener('click', () => Menu.run());

Search.run();

const loadClientsAtPageStart = async () => {
	listClients(await ClientGet.getClients());

	const client_list: HTMLElement[] = Array.from(
		document.querySelectorAll('.molecule-crud-item')
	);

	clientsItemsListener(client_list);
};

const clientsItemsListener = async (items: HTMLElement[]) => {
	let itemsLength = items.length;
	const clients_loaded = await ClientGet.getClients();

	for (let i = 0; i < itemsLength; i++) {
		items[i].addEventListener('click', async () => {
			const client_data = clients_loaded.find(
				(x: ClientData) => x.id === +items[i].id
			) as ClientData;

			const client = new Client(client_data);

			ClientCard.createCard(client.client);
			clientCardListeners(client);
		});
	}
};

const reloadAndRelistClients = async () => {
	let client_list: HTMLElement[] = Array.from(
		document.querySelectorAll('.molecule-crud-item')
	);

	client_list.forEach((element) => element.remove());

	listClients(await ClientGet.getClients());

	client_list = Array.from(document.querySelectorAll('.molecule-crud-item'));

	clientsItemsListener(client_list);
};

const clientCardListeners = (class_client: Client) => {
	const options_icon = document.querySelector('#card_menu') as HTMLElement;

	options_icon.addEventListener('click', () => {
		class_client.runMenu();
		buttonDeleteListener();
		buttonEditListener();
	});

	const buttonDeleteListener = () => {
		const delete_button = document.querySelector(
			'.organism-crud-card-header .molecule-menu-options #delete'
		) as HTMLElement;

		delete_button.addEventListener('click', async () => {
			await class_client.deleteClient();
			reloadAndRelistClients();
		});
	};

	const buttonEditListener = () => {
		const edit_button = document.querySelector(
			'.organism-crud-card-header .molecule-menu-options #edit'
		) as HTMLElement;

		edit_button.addEventListener('click', () => {
			class_client.editClient();
			buttonConfirmEditListener();
		});
	};

	const buttonConfirmEditListener = () => {
		const confirm_button = document.querySelector('#save-edit') as HTMLElement;

		confirm_button.addEventListener('click', async () => {
			try {
				await class_client.confirmEditClientAndUpdateData();
				reloadAndRelistClients();
			} catch (e) {
				if (e === 'empty fields')
					Alert.run(
						'warning-orange',
						'Campos vacíos',
						'Por favor, complete los campos vacíos.'
					);
				else if (e !== 'confirm canceled')
					Alert.run(
						`warning-orange`,
						`Error al actualizar los datos del cliente`,
						'Ocurrió un error al actualizar los datos del cliente, si esto ocurre de vuelta, recarge la página o contacte al soporte de Aieta Consulting'
					);
			}
		});
	};

	const exit_button = document.querySelector(
		'.organism-overlay #exit'
	) as HTMLElement;

	exit_button.addEventListener('click', () => class_client.closeCard());
};

const buttonCreateClientCardListener = () => {
	const create_icon = document.querySelector(
		'.organism-header-main #create'
	) as HTMLElement;

	create_icon.addEventListener('click', async () => {
		CreateClient.openCard();
		createClientCardListeners();
	});
};

const createClientCardListeners = () => {
	const cancel_button = document.querySelector(
		'.organism-create-card-body .atom-button-primary-empty'
	) as HTMLElement;
	cancel_button.addEventListener('click', () => CreateClient.closeCard());

	const create_button = document.querySelector(
		'.organism-create-card-body .atom-button-primary-outline'
	) as HTMLElement;
	create_button.addEventListener('click', async () => {
		const data: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'.organism-create-card-body .atom-create-card-input'
		);

		const new_client_data: ClientDataToCreate = {
			name: data[0].value,
			surname: data[1].value,
			email: data[2].value,
			username: data[3].value,
			password: data[4].value,
		};

		try {
			const new_client = new CreateClient(new_client_data);
			await new_client.create();
			reloadAndRelistClients();
		} catch (e) {
			if (e === 'empty fields')
				Alert.run(
					'warning-orange',
					'Campos vacíos.',
					'Tienes que completar todos los campos del formulario.'
				);
		}
	});
};

loadClientsAtPageStart();
buttonCreateClientCardListener();
