import { CreateClientCard } from '../../dom/cards/CreateClientCard';
import CreateClient from '../CreateClient';
import ClientDataToCreate from '../declarations/ClientDataToCreate';
import ClientPageLoaders from '../loaders/ClientPageLoaders';

export default class CreateClientListeners {
	static async buttonShowCard() {
		const create_icon = document.querySelector(
			'.organism-header-mainHeader #create'
		) as HTMLElement;

		create_icon.addEventListener('click', async () => {
			CreateClientCard.showCard();
			this.card();
		});
	}

	static async card() {
		const cancel_button = document.querySelector(
			'.organism-body-cardBody-createCard .atom-button-primary-empty'
		) as HTMLElement;

		cancel_button.addEventListener('click', () => CreateClientCard.hideCard());

		const create_button = document.querySelector(
			'.organism-body-cardBody-createCard .atom-button-primary-outline'
		) as HTMLElement;

		create_button.addEventListener('click', async () => {
			const data: NodeListOf<HTMLInputElement> = document.querySelectorAll(
				'.organism-body-cardBody-createCard .atom-inputText-cardInput-createCard'
			);

			const new_client_data: ClientDataToCreate = {
				name: data[0].value,
				surname: data[1].value,
				email: data[2].value,
				username: data[3].value,
				password: data[4].value,
			};

			const new_client = new CreateClient(new_client_data);
			await new_client.logic();
			await ClientPageLoaders.reloadAndRelist();
		});
	}
}
