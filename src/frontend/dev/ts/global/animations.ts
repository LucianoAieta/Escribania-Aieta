export const cardExitAnimation = (
	overlay: HTMLElement,
	card: HTMLElement,
	exit?: HTMLElement
) => {
	card.style.opacity = '0';
	card.style.transform = 'scale(.4)';
	if (exit) exit.style.opacity = '0';
	setTimeout(() => {
		card.remove();
		if (exit) exit.remove();
		overlay.style.visibility = 'hidden';
	}, 200);
};

export const cardEntranceAnimation = (
	overlay: HTMLElement,
	card: HTMLElement,
	exit?: HTMLElement
) => {
	overlay.style.visibility = 'visible';
	overlay.appendChild(card);
	if (exit) overlay.appendChild(exit);
	setTimeout(() => {
		card.style.opacity = '1';
		card.style.transform = 'scale(1)';
	}, 10);
};
