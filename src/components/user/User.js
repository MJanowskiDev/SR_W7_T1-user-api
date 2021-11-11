import classes from './User.module.css';
import { checkIfValueIsOk as checkIfOk, humanizeDate } from 'utils/user-utils';

import UserPortrait from './UserPortrait';

const User = ({ user }) => {
	return (
		<div className={classes.User}>
			<UserPortrait
				picture={user.picture.large}
				alt={`${user.name.first} ${user.name.last}`}
				width={128}
				height={128}
			/>

			<h1>
				{checkIfOk(user.name.first)} {checkIfOk(user.name.last)}
			</h1>

			<br />
			<p className={classes.AddressParagraph}>
				<span>Address:</span> {checkIfOk(user.location.street.name)} {checkIfOk(user.location.street.number)},{' '}
				{checkIfOk(user.location.postcode)} {checkIfOk(user.location.city)} {checkIfOk(user.location.country)}
			</p>
			<p>
				<span>Email:</span> {checkIfOk(user.email)}
			</p>
			<p>
				<span>Register date: </span>
				{humanizeDate(user.registered.date)}
			</p>
		</div>
	);
};

export default User;
