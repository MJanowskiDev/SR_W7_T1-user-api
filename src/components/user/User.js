import classes from './User.module.css';
const User = ({ user }) => {
	return (
		<div className={classes.User}>
			<div className={classes.Portrait}>
				<img src={user.picture.large} width={128} height={128} />
			</div>

			<h1>
				{user.name.first} {user.name.last}
			</h1>

			<br />
			<p className={classes.AddressParagraph}>
				<span>Address:</span> {user.location.street.name} {user.location.street.number},{' '}
				{user.location.postcode} {user.location.city} {user.location.country}{' '}
			</p>
			<p>
				<span>Email:</span> {user.email}
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
