import {
	cardEntranceAnimation,
	cardExitAnimation,
} from '../../../global/animations';
import { addInputsListeners } from '../../../global/inputs';
import ClientData from '../../declarations/ClientData';

export class ClientCard {
	client: ClientData;

	constructor(client: ClientData) {
		this.client = client;
	}

	public static createCard(client: ClientData) {
		const card = document.createElement('div') as HTMLElement;
		card.innerHTML = `
			<div class='organism-header-cardHeader-crudCard'>
				<div class='atom-title-large'>${client.name} ${client.surname}</div>
				<div class='molecule-nav-cardNav-crudCard'>
					<div id='data-section' class='atom-item-navItem-crudCard'>Datos</div>
					<div id='rel-section' class='atom-item-navItem-crudCard'>Escrituras</div>
					<img id='card_menu' class='atom-icon-large' src='../assets/icons/svg/points-menu.svg'/>
				</div>
			</div>
			<div class='organism-body-cardBody-crudCard'>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Nombre</div>
					<input readonly='true' class='atom-inputText-cardInput-crudCard' id='${client.id}' type='text' value='${client.name}'>
				</div>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Apellido</div>
					<input readonly='true' class='atom-inputText-cardInput-crudCard' type='text' value='${client.surname}'>
				</div>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Email</div>
					<input readonly='true' class='atom-inputText-cardInput-crudCard' type='text' value='${client.email}'>
				</div>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Nombre de usuario</div>
					<input readonly='true' class='atom-inputText-cardInput-crudCard' type='text' value='${client.username}'>
				</div>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Creado hace</div>
					<div class='atom-text-medium'>${client.created_at}</div>
				</div>
				<div class='molecule-item-bodyItem-crudCard'>
					<div class='atom-title-small'>Estado</div>
					<input readonly='true' class='atom-inputText-cardInput-crudCard' type='text' value='${client.state}'>
				</div>
			</div>
		`;

		const exit = document.createElement('div') as HTMLElement;
		exit.innerHTML = `
			<img id='exit' class='atom-icon-extra-large' src='../assets/icons/svg/cross-white.svg'/>
		`;

		card.classList.add('organism-card-crudCard');

		const overlay = document.querySelector(
			'.organism-overlay-defaultOverlay'
		) as HTMLElement;

		cardEntranceAnimation(overlay, card, exit);

		const data_nav_button = document.querySelector(
			'.organism-card-crudCard #data-section'
		) as HTMLElement;
		data_nav_button.style.backgroundColor = '#E8E8E8';
	}

	public static deleteCard() {
		const card = document.querySelector(
			'.organism-card-crudCard'
		) as HTMLElement;
		const overlay = document.querySelector(
			'.organism-overlay-defaultOverlay'
		) as HTMLElement;
		const exit = document.querySelector(
			'.organism-overlay-defaultOverlay #exit'
		) as HTMLElement;

		cardExitAnimation(overlay, card, exit);
	}

	public static runOptions() {
		const menu = document.querySelector(
			'.organism-header-cardHeader-crudCard .molecule-menu-optionsMenu-crudCard'
		) as HTMLElement;
		menu === null ? this.showOptions() : this.hideOptions(menu);
	}

	public static showOptions() {
		let header = document.querySelector(
			'.organism-header-cardHeader-crudCard'
		) as HTMLElement;
		let menu = document.createElement('DIV') as HTMLElement;

		menu.innerHTML = `
            <a id='edit' class='atom-item-menuItem-optionsMenu'>Editar datos</a>
            <a id='delete' class='atom-item-menuItem-optionsMenu'>Borrar cliente</a>
        `;
		menu.classList.add('molecule-menu-optionsMenu-crudCard');

		setTimeout(() => (menu.style.transform = 'scaleY(1)'), 10);

		header.appendChild(menu);
	}

	public static hideOptions(options: HTMLElement) {
		options.style.transform = 'scaleY(0)';
		setTimeout(() => options.remove(), 300);
	}

	public static runInputsAndCheckButton() {
		const confirm_button = document.querySelector('#save-edit') as HTMLElement;
		if (confirm_button === null) this.showInputsAndCheckButton();
	}

	public static showInputsAndCheckButton() {
		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'.organism-card-crudCard .atom-inputText-cardInput-crudCard'
		);
		inputs.forEach((input) => {
			input.style.borderColor = '#BDBDBD';
			input.readOnly = false;
		});

		const check_button = document.createElement('div');

		check_button.innerHTML = `
			<img src='../assets/icons/svg/check-white.svg' class='atom-icon-large' />
		`;
		check_button.classList.add('atom-button-navButton-crudCard');
		check_button.title = 'Confirmar edición';
		check_button.id = 'save-edit';
		setTimeout(() => (check_button.style.opacity = '1'), 10);

		const card_nav = document.querySelector(
			'.organism-header-cardHeader-crudCard .molecule-nav-cardNav-crudCard'
		) as HTMLElement;

		const card_nav_button = document.querySelector(
			'.atom-item-navItem-crudCard:first-child'
		) as HTMLElement;

		card_nav.insertBefore(check_button, card_nav_button);

		addInputsListeners(inputs);
	}

	public static hideInputsAndCheckButton() {
		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'.organism-card-crudCard .atom-inputText-cardInput-crudCard'
		);
		inputs.forEach((input) => {
			input.style.borderColor = '#FFFFFF';
			input.readOnly = true;
		});

		const confirm_button = document.querySelector('#save-edit') as HTMLElement;
		confirm_button.style.opacity = '0';
		setTimeout(() => confirm_button.remove(), 400);
	}

	public static updateTitle(name: string, surname: string) {
		const title = document.querySelector(
			'.organism-header-cardHeader-crudCard .atom-title-large'
		) as HTMLElement;
		title.textContent = `${name} ${surname}`;
	}
}
