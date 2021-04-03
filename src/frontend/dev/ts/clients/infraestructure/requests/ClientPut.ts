import ClientData from '../../declarations/ClientData';

export class ClientPut {
	public static async updateClientData(client_data: ClientData) {
		return await (
			await fetch('https://escribania-aieta.herokuapp.com/update/client', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(client_data),
			})
		).json();
	}
}
