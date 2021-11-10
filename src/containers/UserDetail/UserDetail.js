import { useLocation, Link } from 'react-router-dom';

const UserDetail = () => {
	const location = useLocation();
	const { user } = location.state;

	return (
		<div>
			<h1>{user.name.first}</h1>
			<Link to='/'>Go Back</Link>
		</div>
	);
};

export default UserDetail;
