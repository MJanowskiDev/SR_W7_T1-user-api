import { Link } from 'react-router-dom';
import classes from './CustomLink.module.css';

const CustomLink = ({ to, children }) => {
	return (
		<Link className={classes.CustomLink} to={to}>
			{children}
		</Link>
	);
};

export default CustomLink;
