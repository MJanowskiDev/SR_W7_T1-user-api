import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUrl } from 'utils/user-utils';
import './App.css';

import Users from 'containers/Users';
import SingleUser from 'containers/SingleUser';

const usersCount = 50;
const fetchDelay = 2000; //ms

function App() {
	const [ usersData, setUsersData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState();

	useEffect(() => {
		setLoading(true);
		const url = getUrl(usersCount);
		const timeout = setTimeout(() => {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Error occured - status ${response.status}`);
					} else {
						return response.json();
					}
				})
				.then((data) => {
					setUsersData(data.results);
					setLoading(false);
				})
				.catch((error) => {
					setError(error.message);
					setLoading(false);
				});
		}, fetchDelay);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	if (error) return <p>{error}</p>;

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route
					path="/"
					exact
					element={<Users usersData={usersData} loading={loading} usersCount={usersCount} />}
				/>
				<Route path="/user/:id" element={<SingleUser />} />
			</Routes>
		</Router>
	);
}

export default App;
