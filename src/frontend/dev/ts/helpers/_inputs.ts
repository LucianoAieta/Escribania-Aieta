export const addInputsListeners = (inputs: NodeListOf<HTMLInputElement>) => {
	const inputsLenght = inputs.length;
	for (let i = 0; i < inputsLenght; i++) {
		inputs[i].addEventListener('keypress', (key) => {
			if (key.code === 'Enter') {
				inputs[i + 1] != null ? inputs[i + 1].focus() : inputs[0].focus();
			}
		});
	}
};
