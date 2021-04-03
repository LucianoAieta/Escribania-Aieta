import ClientDataToCreate from '../../app/declarations/ClientDataToCreate';
import ClientData from '../../declarations/ClientData';

export class ClientPost {
	public static async deleteClient(id: number) {
		return await (
			await fetch('https://escribania-aieta.herokuapp.com/deleteclient', {
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
			await fetch('https://escribania-aieta.herokuapp.com/createclient', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(client),
			})
		).json();
	}
}
