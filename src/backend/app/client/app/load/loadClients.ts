import * as timeago from 'timeago.js';
import { ClientDB } from '../../infraestructure/clientdb';
import es from '../../../../helpers/timeago';
timeago.register('es', es);

export const loadClients = async (from: number, to: number) => {
	const clients = await ClientDB.selectClients(from, to);
	for (let i: number = 0; i < clients.length; i++) {
		clients[i].created_at = timeago.format(clients[i].created_at, 'es');
	}
	return clients;
};
