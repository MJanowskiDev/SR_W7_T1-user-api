import classes from './UserPortrait.module.css';

const UserPortrait = ({ picture, alt, width, height }) => {
	return (
		<div className={classes.Portrait}>
			<img src={picture} alt={alt} width={width} height={height} />
		</div>
	);
};

export default UserPortrait;
