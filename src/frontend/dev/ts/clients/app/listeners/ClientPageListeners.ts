import ClientData from '../../declarations/ClientData';
import { ClientCard } from '../../dom/cards/ClientCard';
import { ClientGet } from '../../infraestructure/requests/ClientGet';
import ClientCardListeners from './ClientCardListeners';

export default class ClientPageListeners {
	public static async items(ITEMS: HTMLElement[]) {
		const ITEMS_LENGTH = ITEMS.length;
		const CLIENTS_LOADED = await ClientGet.getClients();

		for (let i = 0; i < ITEMS_LENGTH; i++) {
			ITEMS[i].addEventListener('click', async () => {
				const CLIENT_DATA = CLIENTS_LOADED.find(
					(CLIENT_ARRAY: ClientData) => CLIENT_ARRAY.id === +ITEMS[i].id
				) as ClientData;

				ClientCard.createCard(CLIENT_DATA);

				const CARD_LISTENERS = new ClientCardListeners(CLIENT_DATA);
				CARD_LISTENERS.logic();
			});
		}
	}
}
