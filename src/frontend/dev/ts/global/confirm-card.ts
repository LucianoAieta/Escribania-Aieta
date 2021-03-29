import { cardEntranceAnimation, cardExitAnimation } from './animations';

type confirmFunction = (
	title: string,
	options: string[]
) => Promise<string | void>;

export const confirmCard: confirmFunction = (title, options) => {
	return new Promise((res, rej) => {
		const card = document.createElement('div');
		card.innerHTML = `
            <div class='atom-title-large'>${title}</div>
            <div class='card-buttons'>
                <button class='atom-button-green-outline'>${options[0]}</button>
                <button class='atom-button-red-empty'>${options[1]}</button>
            </div>
        `;
		card.classList.add('molecule-card-confirmCard');

		const overlay = document.createElement('div') as HTMLElement;
		overlay.classList.add('organism-overlay-defaultOverlay');

		const body = document.querySelector('body') as HTMLBodyElement;
		body.appendChild(overlay);

		cardEntranceAnimation(overlay, card);

		const yes_button = document.querySelector(
			'.card-buttons .atom-button-green-outline'
		) as HTMLElement;
		yes_button.addEventListener('click', () => {
			cardExitAnimation(overlay, card);
			res();
		});

		const no_button = document.querySelector(
			'.card-buttons .atom-button-red-empty'
		) as HTMLElement;
		no_button.addEventListener('click', () => {
			cardExitAnimation(overlay, card);
			rej('confirm canceled');
		});
	});
};
