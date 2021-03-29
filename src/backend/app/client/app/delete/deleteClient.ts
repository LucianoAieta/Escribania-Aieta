import pool from '../../../../db/connectDB';
import { ClientDB } from '../../infraestructure/clientdb';

export const deleteClient = async (id: number) => {
	return await ClientDB.deleteClientById(id);
};
