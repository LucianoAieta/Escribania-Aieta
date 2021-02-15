import { confirmCard } from '../../helpers/_confirm-card.js';
import { verifyIfIsEmpty } from '../../helpers/_validators.js';
import { CreateClientCard } from '../dom/cards/_CreateClientCard.js';
import { ClientPost } from '../infraestructure/requests/_ClientPost.js';
import {
	ClientDataToCreate,
	CreateClientApp,
} from './declarations/_CreateClient';

export default class CreateClient implements CreateClientApp {
	constructor(public client: ClientDataToCreate) {
		this.client = client;
	}

	public static openCard() {
		CreateClientCard.showCard();
	}

	public static closeCard() {
		CreateClientCard.hideCard();
	}

	async create(): Promise<void> {
		try {
			await verifyIfIsEmpty(this.client);

			await confirmCard(
				`¿Estás seguro de crear el cliente ${this.client.name} ${this.client.surname}?`,
				['Crear', 'Cancelar']
			);

			CreateClientCard.hideCard();

			await ClientPost.createClient(this.client);
		} catch (e) {
			throw e;
		}
	}
}
