import {
	cardEntranceAnimation,
	cardExitAnimation,
} from '../../../helpers/_animations';
import { addInputsListeners } from '../../../helpers/_inputs';
import { ClientData } from '../declarations/_ClientData';

export class CreateClientCard {
	client: ClientData;
	constructor(client: ClientData) {
		this.client = client;
	}
	public static showCard() {
		const card = <HTMLElement>document.createElement('div');

		card.innerHTML = `
            <div class='molecule-crud-card-body-item'>
                <div class='atom-title-small'>Nombre</div>
                <input id='input-name' type='text' placeholder='Nombre personal' class='atom-create-card-input'/>
            </div>
            <div class='molecule-crud-card-body-item'>
                <div class='atom-title-small'>Apellido</div>
                <input id='input-surname' type='text' placeholder='Apellido personal' class='atom-create-card-input'/>
            </div>
            <div class='molecule-crud-card-body-item'>
                <div class='atom-title-small'>Email</div>
                <input id='input-email' type='text' placeholder='Email' class='atom-create-card-input'/>
            </div>
            <div class='molecule-crud-card-body-item'>
                <div class='atom-title-small'>Nombre de usuario</div>
                <input id='input-username' type='text' placeholder='Nombre para iniciar sesión' class='atom-create-card-input'/>
            </div>
            <div class='molecule-crud-card-body-item'>
                <div class='atom-title-small'>Contraseña</div>
                <input id='input_password' type='text' placeholder='Contraseña para iniciar sesión' class='atom-create-card-input'/>
            </div>
            <div class='molecule-crud-card-body-item'>
                <input type='button' value='Crear cliente' class='atom-button-primary-outline' />
                <input type='button' value='Cancelar' class='atom-button-primary-empty' />
            </div>
        `;
		card.classList.add('organism-create-card-body');

		const overlay = <HTMLElement>document.querySelector('.organism-overlay');
		cardEntranceAnimation(overlay, card);

		const inputs = document.querySelectorAll('.atom-create-card-input');
		addInputsListeners(inputs);
	}

	public static hideCard() {
		const overlay = <HTMLElement>document.querySelector('.organism-overlay');
		const card = <HTMLElement>(
			document.querySelector('.organism-create-card-body')
		);

		cardExitAnimation(overlay, card);
	}
}
