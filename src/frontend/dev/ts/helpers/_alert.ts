export default class Alert {
	public static run(icon: string, title: string, content: string) {
		const alert = document.querySelector('.organism-alert') as HTMLElement;
		alert === null ? this.showAlert(icon, title, content) : alert;
	}

	private static showAlert(icon: string, title: string, content: string) {
		const alert: HTMLElement = document.createElement('div');
		alert.innerHTML = `
            <img id='card_menu' class='atom-icon-extra-large' src='../assets/icons/svg/${icon}.svg'/>
            <div class='molecule-alert'>
                <div class='molecule-alert-header'>
                    <p class='atom-title-medium'>${title}</p>
                    <img id='close-alert' src='../assets/icons/svg/cross-black.svg' class='atom-icon-large'/>
                </div>
                <p class='molecule-alert-body atom-text-small'>${content}</p>
            </div>
        `;

		alert.classList.add('organism-alert');

		const body = document.querySelector('body') as HTMLElement;
		body.appendChild(alert);

		setTimeout(() => (alert.style.transform = 'translateX(-5%)'), 100);

		const close = document.querySelector(
			'.molecule-alert #close-alert'
		) as HTMLElement;
		close.addEventListener('click', () => this.hideAlert());

		setTimeout(() => {
			const alert2 = document.querySelector('.organism-alert') as HTMLElement;
			alert2 !== null ? this.hideAlert() : alert2;
		}, 2500);
	}

	private static hideAlert() {
		const alert = document.querySelector('.organism-alert') as HTMLElement;
		alert.style.transform = 'translateX(100%)';

		setTimeout(() => alert.remove(), 400);
	}
}
