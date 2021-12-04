import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import classes from './UserPlaceholder.module.css';

const UserPlaceholder = () => {
	const awesomePlaceholder = (
		<div className={classes.UserPlaceholder}>
			<div className={classes.UserPortrait}>
				<RectShape color="lightgray" style={{ width: 128, height: 128, borderRadius: '50%' }} />
			</div>

			<TextBlock className={classes.UserRowsHeader} rows={1} color="gray" />
			<TextBlock rows={4} color="gray" />
		</div>
	);

	return <ReactPlaceholder customPlaceholder={awesomePlaceholder} showLoadingAnimation />;
};

export default UserPlaceholder;
