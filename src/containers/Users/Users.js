import { useEffect, useState } from 'react';
import { UserList } from 'components/user';
import classes from './Users.module.css';

const getUrl = (usersAmount) => {
	return `https://randomuser.me/api/?results=${usersAmount}`;
};

const Users = () => {
	const [ usersData, setUsersData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState();

	useEffect(() => {
		setLoading(true);
		const url = getUrl(10);
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error occured - status ${response.status}`);
				} else {
					return response.json();
				}
			})
			.then((data) => {
				setUsersData(data.results);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	return (
		<div className={classes.Users}>
			<h1>All users:</h1>
			{loading && <p>Loading users...</p>}
			{error && <p>{error}</p>}
			{!loading && !error && <UserList data={usersData} />}
		</div>
	);
};

export default Users;
