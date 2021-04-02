export default class ReloadButtonAnimations {
	constructor(public BUTTON: HTMLElement) {
		this.BUTTON = BUTTON;
	}

	start() {
		this.BUTTON.classList.add('active');
	}

	stop() {
		this.BUTTON.classList.remove('active');
	}
}
