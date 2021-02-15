import { ClientData } from '../../dom/interfaces/clientData';
import { ClientDB } from '../../infraestructure/clientdb';

export const updateClientData = async (client_data: ClientData) => {
	return await ClientDB.updateClientById(client_data);
};
