import ClientPageLoaders from '../../../../clients/app/loaders/ClientPageLoaders';
import Alert from '../../../alert';
import ReloadButtonAnimations from './dom/ReloadButtonAnimations';

const ReloadButtonListener = async (PAGE_TYPE: string) => {
	const RELOAD_BUTTON: HTMLElement = document.querySelector('#reload');
	//const isLoading = RELOAD_BUTTON.classList === ''

	RELOAD_BUTTON.addEventListener('click', async () => {
		if (PAGE_TYPE === 'clients') {
			const buttonAnimations = new ReloadButtonAnimations(RELOAD_BUTTON);
			if (RELOAD_BUTTON.className.indexOf('active') === -1) {
				try {
					buttonAnimations.start();
					await ClientPageLoaders.reloadAndRelist();
					buttonAnimations.stop();
				} catch (e) {
					buttonAnimations.stop();
					Alert.run(
						'dead-face',
						'Error inesperado',
						`Ha ocurrido un error inesperado, intente recargando la página. Código de error: ${e}`
					);
				}
			}
		}
	});
};

export default ReloadButtonListener;
