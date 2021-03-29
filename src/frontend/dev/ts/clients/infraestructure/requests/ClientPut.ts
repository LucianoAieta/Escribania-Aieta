import ClientData from '../../declarations/ClientData';

export class ClientPut {
	public static async updateClientData(client_data: ClientData) {
		return await (
			await fetch('http://localhost:7000/update/client', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(client_data),
			})
		).json();
	}
}
