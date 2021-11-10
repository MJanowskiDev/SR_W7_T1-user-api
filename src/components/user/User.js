import classes from './User.module.css';
import { checkIfValueIsOk as checkIfOk } from 'utils/user-utils';

const User = ({ user }) => {
	return (
		<div className={classes.User}>
			<div className={classes.Portrait}>
				<img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width={128} height={128} />
			</div>

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
				{new Date(user.registered.date).toLocaleString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</p>
		</div>
	);
};

export default User;
