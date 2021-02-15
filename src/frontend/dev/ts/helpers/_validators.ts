export const verifyIfIsEmpty = (data: {}) => {
	return new Promise((res, rej) => {
		const verifyValues = (data: string[]) => data.some((item) => item === '');
		verifyValues(Object.values(data))
			? rej('empty fields')
			: res('correct fields');
	});
};
