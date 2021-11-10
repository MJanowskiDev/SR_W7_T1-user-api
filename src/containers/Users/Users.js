import { UserList } from 'components/user';
import classes from './Users.module.css';

const Users = ({ usersData, loading, usersCount }) => {
	return (
		<div className={classes.Users}>
			<h1>All users:</h1>
			<UserList loading data={usersData} loading={loading} usersCount={usersCount} />
		</div>
	);
};

export default Users;
