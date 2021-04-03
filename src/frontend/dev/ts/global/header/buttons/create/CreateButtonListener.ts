import CreateClient from '../../../../clients/app/CreateClient';

const CreateButtonListener = (PAGE_TYPE: string) => {
	const BUTTON_CREATE = document.querySelector('#create');

	BUTTON_CREATE.addEventListener('click', () => {
		if (PAGE_TYPE === 'clients') CreateClient.card();
	});
};

export default CreateButtonListener;
