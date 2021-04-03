import Alert from '../../global/alert';
import { confirmCard } from '../../global/confirm-card';
import { verifyIfIsEmpty } from '../../global/validators';
import { CreateClientCard } from '../dom/cards/CreateClientCard';
import { ClientPost } from '../infraestructure/requests/ClientPost';
import ClientDataToCreate from './declarations/ClientDataToCreate';
import CreateClientLogic from './declarations/CreateClient';
import ClientPageLoaders from './loaders/ClientPageLoaders';

export default class CreateClient implements CreateClientLogic {
	constructor(public data: ClientDataToCreate) {
		this.data = data;
	}

	async confirm() {
		await confirmCard(
			`¿Estás seguro de crear el cliente ${this.data.name} ${this.data.surname}?`,
			['Crear', 'Cancelar']
		);
	}

	async verify() {
		await verifyIfIsEmpty(this.data);
	}

	async requestCreate() {
		await ClientPost.createClient(this.data);
	}

	finish() {
		CreateClientCard.hideCard();
	}

	static async card() {
		CreateClientCard.showCard();

		const cancel_button = document.querySelector(
			'.organism-body-cardBody-createCard .atom-button-primary-empty'
		) as HTMLElement;
		console.log(cancel_button);

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

	async logic() {
		try {
			await this.confirm();
			await this.verify();
			await this.requestCreate();
			this.finish();
		} catch (e) {
			if (e === 'empty fields') {
				Alert.run(
					'warning-orange',
					'Campos vacíos',
					'Complete los campos vacíos.'
				);
			} else if (e !== 'confirm canceled') {
				Alert.run(
					'dead-face',
					'Error inesperado',
					`Ha ocurrido un error inesperado, por favor, pruebe con recargar la página, en caso de que siga fallando, contáctese con el soporte de Aieta Consulting. Código de error ${e}`
				);
			}
		}
	}
}
