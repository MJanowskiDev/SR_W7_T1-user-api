export const checkIfValueIsOk = (value) => {
	const res = !value || value.toString().trim() === '' ? '------' : value;
	return res;
};

export const getUrl = (usersAmount) => {
	return `https://randomuser.me/api/?results=${usersAmount}`;
};
