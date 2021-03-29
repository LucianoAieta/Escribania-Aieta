const deleteClientList = () => {
	const CLIENT_LIST: HTMLElement[] = Array.from(
		document.querySelectorAll('.molecule-item-listItem-crudList')
	);

	CLIENT_LIST.forEach((element) => element.remove());

	return CLIENT_LIST;
};

export default deleteClientList;
