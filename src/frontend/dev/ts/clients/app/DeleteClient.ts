import Alert from '../../global/alert';
import { confirmCard } from '../../global/confirm-card';
import ClientData from '../declarations/ClientData';
import { ClientCard } from '../dom/cards/ClientCard';
import { ClientPost } from '../infraestructure/requests/ClientPost';
import DeleteClientLogic from './declarations/DeleteClient';

export default class DeleteClient implements DeleteClientLogic {
	constructor(public data: ClientData) {
		this.data = data;
	}

	async confirm() {
		await confirmCard(
			`¿Estás seguro de que quieres borrar el cliente ${this.data.name} ${this.data.surname}?`,
			['Borrar', 'Cancelar']
		);
	}

	async deleteRequest() {
		await ClientPost.deleteClient(this.data.id);
	}

	finish() {
		ClientCard.deleteCard();
	}

	async logic() {
		try {
			await this.confirm();
			await this.deleteRequest();
			this.finish();
		} catch (e) {
			if (e !== 'confirm canceled') {
				Alert.run(
					'dead-face',
					'Error inesperado',
					`Ha ocurrido un error inesperado, por favor, pruebe recargando la página. En caso de no funcionar, contactar con el soporte de Aieta Consulting. Código de error: ${e}`
				);
			}
		}
	}
}
