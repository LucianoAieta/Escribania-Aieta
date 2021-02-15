import { Bcrypt } from '../../../../helpers/bcrypt';
import { ClientDB } from '../../infraestructure/clientdb';
import { ClientData } from '../../dom/interfaces/clientData';

export const CreateClient = async (client: ClientData): Promise<ClientData> => {
	try {
		client.state = 'Activo';
		client.password = await Bcrypt.encryptPassword(client.password);
		await ClientDB.insertInto(client);
		return client;
	} catch (e) {
		console.log(e);
	}
};
