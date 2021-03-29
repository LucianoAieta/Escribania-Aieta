import {
	cardEntranceAnimation,
	cardExitAnimation,
} from '../../../global/animations';
import { addInputsListeners } from '../../../global/inputs';
import ClientData from '../../declarations/ClientData';

export class CreateClientCard {
	client: ClientData;
	constructor(client: ClientData) {
		this.client = client;
	}
	public static showCard() {
		const card = document.createElement('div') as HTMLElement;

		card.innerHTML = `
            <div class='molecule-item-bodyItem-crudCard'>
                <div class='atom-title-small'>Nombre</div>
                <input id='input-name' type='text' placeholder='Nombre personal' class='atom-inputText-cardInput-createCard'/>
            </div>
            <div class='molecule-item-bodyItem-crudCard'>
                <div class='atom-title-small'>Apellido</div>
                <input id='input-surname' type='text' placeholder='Apellido personal' class='atom-inputText-cardInput-createCard'/>
            </div>
            <div class='molecule-item-bodyItem-crudCard'>
                <div class='atom-title-small'>Email</div>
                <input id='input-email' type='text' placeholder='Email' class='atom-inputText-cardInput-createCard'/>
            </div>
            <div class='molecule-item-bodyItem-crudCard'>
                <div class='atom-title-small'>Nombre de usuario</div>
                <input id='input-username' type='text' placeholder='Nombre para iniciar sesión' class='atom-inputText-cardInput-createCard'/>
            </div>
            <div class='molecule-item-bodyItem-crudCard'>
                <div class='atom-title-small'>Contraseña</div>
                <input id='input_password' type='text' placeholder='Contraseña para iniciar sesión' class='atom-inputText-cardInput-createCard'/>
            </div>
            <div class='molecule-item-bodyItem-crudCard'>
                <input type='button' value='Crear cliente' class='atom-button-primary-outline' />
                <input type='button' value='Cancelar' class='atom-button-primary-empty' />
            </div>
        `;
		card.classList.add('organism-body-cardBody-createCard');

		const overlay = document.querySelector(
			'.organism-overlay-defaultOverlay'
		) as HTMLElement;
		cardEntranceAnimation(overlay, card);

		const inputs = document.querySelectorAll(
			'.atom-inputText-cardInput-createCard'
		) as NodeListOf<HTMLInputElement>;
		addInputsListeners(inputs);
	}

	public static hideCard() {
		const overlay = document.querySelector(
			'.organism-overlay-defaultOverlay'
		) as HTMLElement;
		const card = document.querySelector(
			'.organism-body-cardBody-createCard'
		) as HTMLElement;

		cardExitAnimation(overlay, card);
	}
}
