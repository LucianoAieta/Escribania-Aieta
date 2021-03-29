import Edit from '../../../general-declarations/app/Edit';
import { ClientData } from '../../declarations/ClientData';

declare interface EditClientLogic extends Edit {
	clientDataToUpdate: ClientData;
}
