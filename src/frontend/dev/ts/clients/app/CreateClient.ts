import Alert from '../../global/alert';
import { confirmCard } from '../../global/confirm-card';
import { verifyIfIsEmpty } from '../../global/validators';
import { CreateClientCard } from '../dom/cards/CreateClientCard';
import { ClientPost } from '../infraestructure/requests/ClientPost';
import ClientDataToCreate from './declarations/ClientDataToCreate';
import CreateClientLogic from './declarations/CreateClient';

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
