import {
	cardEntranceAnimation,
	cardExitAnimation,
} from '../../../helpers/_animations';
import { addInputsListeners } from '../../../helpers/_inputs';
import { ClientData } from '../declarations/_ClientData';

export class ClientCard {
	client: ClientData;

	constructor(client: ClientData) {
		this.client = client;
	}

	public static createCard(client: ClientData) {
		const card = document.createElement('div') as HTMLElement;
		card.innerHTML = `
			<div class='organism-crud-card-header'>
				<div class='atom-title-large'>${client.name} ${client.surname}</div>
				<div class='molecule-crud-card-nav'>
					<div id='data-section' class='atom-crud-card-nav-item'>Datos</div>
					<div id='rel-section' class='atom-crud-card-nav-item'>Escrituras</div>
					<img id='card_menu' class='atom-icon-large' src='../assets/icons/svg/points-menu.svg'/>
				</div>
			</div>
			<div class='organism-crud-card-body'>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Nombre</div>
					<input readonly='true' class='atom-crud-card-input' id='${client.id}' type='text' value='${client.name}'>
				</div>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Apellido</div>
					<input readonly='true' class='atom-crud-card-input' type='text' value='${client.surname}'>
				</div>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Email</div>
					<input readonly='true' class='atom-crud-card-input' type='text' value='${client.email}'>
				</div>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Nombre de usuario</div>
					<input readonly='true' class='atom-crud-card-input' type='text' value='${client.username}'>
				</div>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Creado hace</div>
					<div class='atom-text-medium'>${client.created_at}</div>
				</div>
				<div class='molecule-crud-card-body-item'>
					<div class='atom-title-small'>Estado</div>
					<input readonly='true' class='atom-crud-card-input' type='text' value='${client.state}'>
				</div>
			</div>
		`;

		const exit = document.createElement('div') as HTMLElement;
		exit.innerHTML = `
			<img id='exit' class='atom-icon-extra-large' src='../assets/icons/svg/cross-white.svg'/>
		`;

		card.classList.add('organism-crud-card');

		const overlay = document.querySelector('.organism-overlay') as HTMLElement;

		cardEntranceAnimation(overlay, card, exit);

		const data_nav_button = document.querySelector(
			'.organism-crud-card #data-section'
		) as HTMLElement;
		data_nav_button.style.backgroundColor = '#E8E8E8';
	}

	public static deleteCard() {
		const card = document.querySelector('.organism-crud-card') as HTMLElement;
		const overlay = document.querySelector('.organism-overlay') as HTMLElement;
		const exit = document.querySelector(
			'.organism-overlay #exit'
		) as HTMLElement;

		cardExitAnimation(overlay, card, exit);
	}

	public static runOptions() {
		const menu = document.querySelector(
			'.organism-crud-card-header .molecule-menu-options'
		) as HTMLElement;
		menu === null ? this.showOptions() : this.hideOptions(menu);
	}

	public static showOptions() {
		let header = document.querySelector(
			'.organism-crud-card-header'
		) as HTMLElement;
		let menu = document.createElement('DIV') as HTMLElement;

		menu.innerHTML = `
            <a id='edit' class='atom-options-item'>Editar datos</a>
            <a id='delete' class='atom-options-item'>Borrar cliente</a>
        `;
		menu.classList.add('molecule-menu-options');

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
			'.organism-crud-card .atom-crud-card-input'
		);
		inputs.forEach((input) => {
			input.style.borderColor = '#BDBDBD';
			input.readOnly = false;
		});

		const check_button = document.createElement('div');

		check_button.innerHTML = `
			<img src='../assets/icons/svg/check-white.svg' class='atom-icon-large' />
		`;
		check_button.classList.add('atom-crud-card-icon-button');
		check_button.title = 'Confirmar edición';
		check_button.id = 'save-edit';
		setTimeout(() => (check_button.style.opacity = '1'), 10);

		const card_nav = document.querySelector(
			'.organism-crud-card-header .molecule-crud-card-nav'
		) as HTMLElement;
		const card_nav_button = document.querySelector(
			'.atom-crud-card-nav-item:first-child'
		) as HTMLElement;
		card_nav.insertBefore(check_button, card_nav_button);

		addInputsListeners(inputs);
	}

	public static hideInputsAndCheckButton() {
		const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'.organism-crud-card .atom-crud-card-input'
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
			'.organism-crud-card-header .atom-title-large'
		) as HTMLElement;
		title.textContent = `${name} ${surname}`;
	}
}
