import pool from '../../../db/connectDB';
import { ClientData } from '../dom/interfaces/clientData';

export class ClientDB {
	public static async insertInto(data: ClientData): Promise<unknown> {
		const {
			username,
			password,
			name,
			surname,
			email,
			state,
		}: ClientData = data;
		const client: ClientData = {
			username,
			password,
			name,
			surname,
			email,
			state,
		};
		return await pool.query('INSERT INTO clients SET?', [client]);
	}

	public static async selectClients(
		from: number,
		to: number
	): Promise<ClientData[]> {
		const clients = await pool.query('SELECT * FROM clients LIMIT ?, ?', [
			from,
			to,
		]);
		return clients;
	}

	public static async deleteClientById(id: number) {
		return await pool.query('DELETE FROM clients WHERE id = ?', [id]);
	}

	public static async updateClientById(client_data: ClientData) {
		const id = client_data.id;
		return await pool.query('UPDATE clients SET ? WHERE id = ?', [
			client_data,
			id,
		]);
	}

	public static async searchByText(text: string) {
		return await pool.query(
			'SELECT * FROM clients WHERE MATCH (name, surname) AGAINST (?)',
			[text]
		);
	}
}
