import Alert from '../../global/alert';
import { confirmCard } from '../../global/confirm-card';
import MenuDOM from '../../global/header/buttons/menu/dom/MenuDOM';
import { verifyIfIsEmpty } from '../../global/validators';
import ClientData from '../declarations/ClientData';
import { ClientCard } from '../dom/cards/ClientCard';
import { ClientPut } from '../infraestructure/requests/ClientPut';
import { EditClientLogic } from './declarations/EditClient';

export class EditClient implements EditClientLogic {
	constructor(
		public new_data: ClientDataToUpdate,
		public actual_data: ClientData
	) {
		this.new_data = new_data;
		this.actual_data = actual_data;
	}

	get clientDataToUpdate() {
		return {
			id: this.actual_data.id,
			name: this.new_data.name,
			surname: this.new_data.surname,
			username: this.new_data.username,
			password: this.actual_data.password,
			email: this.new_data.email,
			state: this.new_data.state,
		};
	}

	static set() {
		ClientCard.runInputsAndCheckButton();

		const options = document.querySelector(
			'.organism-header-cardHeader-crudCard .molecule-menu-optionsMenu-crudCard'
		) as HTMLElement;

		MenuDOM.remove(options);
	}

	async confirm() {
		await confirmCard(
			`¿Estás seguro de que quieres editar el cliente ${this.actual_data.name} ${this.actual_data.surname}?`,
			['Sí editar', 'Cancelar']
		);
	}

	async verify() {
		await verifyIfIsEmpty(this.clientDataToUpdate);
	}

	async update() {
		await ClientPut.updateClientData(this.clientDataToUpdate);
		return true;
	}

	finish() {
		ClientCard.hideInputsAndCheckButton();
		ClientCard.updateTitle(this.new_data.name, this.new_data.surname);
	}

	async logic() {
		try {
			await this.confirm();
			await this.verify();
			await this.update();
			this.finish();
		} catch (e) {
			if (e === 'empty fields')
				Alert.run(
					'warning-orange',
					'Campos vacíos',
					'Por favor, complete los campos vacíos.'
				);
			else if (e !== 'confirm canceled')
				Alert.run(
					'warning-orange',
					'Error al actualizar los datos del cliente',
					'Ocurrió un error al actualizar los datos del cliente, si esto ocurre de vuelta, recarge la página o contacte al soporte de Aieta Consulting'
				);
		}
	}
}
