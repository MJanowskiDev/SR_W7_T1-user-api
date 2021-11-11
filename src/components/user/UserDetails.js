import UserPortrait from './UserPortrait';
import { checkIfValueIsOk as checkIfOk, humanizeDate } from 'utils/user-utils';
import classes from './UserDetails.module.css';

const UserDetails = ({ user }) => {
	return (
		<div className={classes.UserDetailsContainer}>
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
			<p>
				<span>Gender: </span>
				{checkIfOk(user.gender)}
			</p>
			<p>
				<span>Nationality:</span> {checkIfOk(user.nat)}
			</p>
			<p>
				<span>Username: </span>
				{checkIfOk(user.login.username)}
			</p>

			<p>
				<span>Email:</span> {checkIfOk(user.email)}
			</p>

			<p>
				<span>Phone:</span> {checkIfOk(user.phone)}
			</p>
			<p>
				<span>Address:</span> {checkIfOk(user.location.street.name)} {checkIfOk(user.location.street.number)},{' '}
				{checkIfOk(user.location.postcode)} {checkIfOk(user.location.city)} {checkIfOk(user.location.country)}
			</p>

			<p>
				<span>Register date: </span>
				{humanizeDate(user.registered.date)}
			</p>
		</div>
	);
};

export default UserDetails;
