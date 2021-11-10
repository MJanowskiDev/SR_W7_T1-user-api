import User from './User';
import { Link } from 'react-router-dom';

import classes from './UserList.module.css';
import UserPlaceholder from './UserPlaceholder';

const UserList = ({ data, loading, usersCount }) => {
	if (!loading && (!data || data.length === 0)) {
		return <p>No users to show ;(</p>;
	}
	return (
		<div className={classes.UserList}>
			{loading && [ ...Array(usersCount).keys() ].map((idx) => <UserPlaceholder key={idx} />)}

			{data.map((usr, id) => (
				<Link state={{ user: usr }} key={`user-${id}`} to={`/user/${id}`}>
					<User key={id} user={usr} />
				</Link>
			))}
		</div>
	);
};

export default UserList;
