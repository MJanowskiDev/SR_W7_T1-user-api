import { getUrl } from 'utils/user-utils';

export const fetchUsers = (usersCount) => {
	const url = getUrl(usersCount);
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(`Error occured - status ${response.status}`);
		} else {
			return response.json();
		}
	});
};
