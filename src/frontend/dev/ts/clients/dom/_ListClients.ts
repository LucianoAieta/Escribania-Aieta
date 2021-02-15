import { ClientData } from './declarations/_ClientData';

export const listClients = (clients: ClientData[]): ClientData[] => {
	const array_reversed: ClientData[] = clients.reverse();
	const clientsLength = clients.length;
	for (let i: number = 0; i < clientsLength; i++) {
		const client: ClientData = array_reversed[i];
		const item: HTMLElement = document.createElement('DIV');

		item.innerHTML = `
            <p class='atom-title-medium'>${client.name} ${client.surname}</p>
        `;
		item.id = `${client.id}`;
		item.classList.add('molecule-crud-item');

		const list = document.querySelector('.organism-crud-list') as HTMLElement;
		list.appendChild(item);
	}
	return clients;
};
