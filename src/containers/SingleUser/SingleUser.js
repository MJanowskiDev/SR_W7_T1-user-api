import { useLocation } from 'react-router-dom';
import { UserDetails } from 'components/user';

import { checkIfValueIsOk as checkIfOk } from 'utils/user-utils';

import { CustomLink } from 'components/ui';
import { Map } from 'components/Map';

import classes from './SingleUser.module.css';
const SingleUser = () => {
	const location = useLocation();

	if (!location.state) {
		return (
			<div className={classes.SingleUser}>
				<CustomLink to='/'>&#8592; Go Back</CustomLink>
				<h1>No user data found!</h1>
			</div>
		);
	}

	const { user } = location.state;

	const position = [ user.location.coordinates.latitude, user.location.coordinates.longitude ];

	const street = `${checkIfOk(user.location.street.name)} ${checkIfOk(user.location.street.number)}`;
	const city = `${checkIfOk(user.location.postcode)}  ${checkIfOk(user.location.city)} `;
	const country = `${checkIfOk(user.location.country)}`;

	return (
		<div className={classes.SingleUser}>
			<CustomLink to='/'>&#8592; Go Back</CustomLink>
			<div className={classes.Content}>
				<UserDetails user={user} />
				<Map position={position} street={street} city={city} country={country} />
			</div>
		</div>
	);
};

export default SingleUser;
