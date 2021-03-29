import ClientDataToCreate from '../../app/declarations/ClientDataToCreate';
import ClientData from '../../declarations/ClientData';

export class ClientPost {
	public static async deleteClient(id: number) {
		return await (
			await fetch('http://localhost:7000/deleteclient', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id }),
			})
		).json();
	}
	public static async createClient(client: ClientDataToCreate): Promise<void> {
		await (
			await fetch('http://localhost:7000/createclient', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(client),
			})
		).json();
	}
}
