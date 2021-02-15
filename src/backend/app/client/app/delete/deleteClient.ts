import pool from '../../../../db/connectDB';
import { ClientDB } from '../../infraestructure/clientdb';

export const DeleteClient = async (id: number) => {
	return await ClientDB.deleteClientById(id);
};
