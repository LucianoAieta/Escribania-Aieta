import ClientData from '../../../declarations/ClientData';

export default ClientCardListenersLogic;

declare interface ClientCardListenersLogic {
	client_data: ClientData;
	logic(): void;
	menu(): void;
	delete(): void;
	edit(): void;
	exit(): void;
	confirmEdit(): void;
}
