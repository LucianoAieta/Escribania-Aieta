import ClientData from '../../declarations/ClientData';

export interface ClientGet {
	getClients(): ClientData[];
}

export class ClientGet implements ClientGet {
	public static async getClients(): Promise<ClientData[]> {
		return await (
			await fetch('https://escribania-aieta.herokuapp.com/clientes')
		).json();
	}
}
