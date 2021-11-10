import User from './User';

import classes from './UserList.module.css';

const UserList = ({ data }) => {
	if (!data || data.length === 0) {
		return <p>No users to show ;(</p>;
	}
	return <div className={classes.UserList}>{data.map((usr) => <User key={usr.id.value} user={usr} />)}</div>;
};

export default UserList;
