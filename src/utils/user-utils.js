export const checkIfValueIsOk = (value) => {
	const res = !value || value.toString().trim() === '' ? '------' : value;
	return res;
};

export const getUrl = (usersAmount) => {
	return `https://randomuser.me/api/?results=${usersAmount}`;
};

export const humanizeDate = (date) => {
	return new Date(date).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};
