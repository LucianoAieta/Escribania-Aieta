export default class Alert {
	public static run(icon: string, title: string, content: string) {
		const alert = document.querySelector(
			'.organism-alert-defaultAlert'
		) as HTMLElement;
		if (alert === null) this.showAlert(icon, title, content);
	}

	private static showAlert(icon: string, title: string, content: string) {
		const alert: HTMLElement = document.createElement('div');
		alert.innerHTML = `
            <img id='card_menu' class='atom-icon-extra-large' src='../assets/icons/svg/${icon}.svg'/>
            <div class='molecule-body-alertBody-defaultAlert'>
                <div class='molecule-header-alertHeader-defaultAlert'>
                    <p class='atom-title-medium'>${title}</p>
                    <img id='close-alert' src='../assets/icons/svg/cross-black.svg' class='atom-icon-large'/>
                </div>
                <p class='molecule-body-alertContent-defaultAlert atom-text-small'>${content}</p>
            </div>
        `;

		alert.classList.add('organism-alert-defaultAlert');

		const body = document.querySelector('body') as HTMLElement;
		body.appendChild(alert);

		setTimeout(() => (alert.style.transform = 'translateX(-5%)'), 100);

		const close = document.querySelector(
			'.molecule-body-alertBody-defaultAlert #close-alert'
		) as HTMLElement;
		close.addEventListener('click', () => this.hideAlert());
		this.detectAlert();
	}

	private static detectAlert() {
		setTimeout(() => {
			const alert2 = document.querySelector(
				'.organism-alert-defaultAlert'
			) as HTMLElement;
			alert2 !== null ? this.hideAlert() : alert2;
		}, 7500);
	}

	private static hideAlert() {
		const alert = document.querySelector(
			'.organism-alert-defaultAlert'
		) as HTMLElement;
		alert.style.transform = 'translateX(100%)';

		setTimeout(() => alert.remove(), 400);
	}
}
