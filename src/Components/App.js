import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import ls from 'local-storage';

import fireApp from '../Config/FirebaseConfig';
import { UserContext } from '../Context/UserContext';
import ScrollToTop from '../Components/_ScrollToTop';
import PageHome from '../Components/PageHome';
import PageLogin from '../Components/PageLogin';
import PageCheckResult from './PageCheckResult';
import PagePrizebondKi from '../Components/PagePrizebondKi';
import PagePrivacyPolicy from '../Components/PagePrivacyPolicy';
import PageResult from '../Components/PageResult';
import PageUserNumbers from '../Components/PageUserNumbers';

function App() {

	const [user, setUser] = useState(null);
	const [numbers, setNumbers] = useState([]);
	const [total, setTotal] = useState(0);
	
	const userValue = {
		user, setUser,
		numbers, setNumbers,
		total, setTotal
	};

	useEffect(() => {

		if ( ! user ) {
			checkUserLogin();
		}

	}, [user]);
	
	/**
	 * Check firebase for authetication.
	 * Try to get token, of firebase user.
	 * If user does not exists, insert the user and get a token along with it.
	 */
	const checkUserLogin = () => {

		fireApp.auth().onAuthStateChanged(function(user) {
			if (user) {

				let userPhotoURL = user.photoURL;
				if ( ! userPhotoURL ) {
					userPhotoURL = `${process.env.REACT_APP_BASE_URL}/assets/images/pro-pic.png`;
				}

				const { uid, email, displayName, phoneNumber, refreshToken } = user;

				let tokenUrl = `${process.env.REACT_APP_API_URL}/users/token`;
				let tokenData = {
					uid,
					email,
					token: refreshToken
				};

				axios.post(tokenUrl, tokenData)
					.then(function (response) {

						// user exists and active. set local storage and state
						response.data.photo = userPhotoURL;
						setUser(response.data);
						ls.set('userinfo', response.data);

					})
					.catch(function (error) {
						
						const errorCode = error.response.data.error || '';
						const errorMessage = error.response.data.message || '';

						if ( errorCode === 'INVALID_USER' && errorMessage === 'User not found or inactive.' ) {

							// user either inactive or does not exists
							// try to insert/register the user first
							const insertUrl = `${process.env.REACT_APP_API_URL}/users`;
							let insertData = {
								uid,
								email,
								name: displayName,
								phone: phoneNumber,
								token: refreshToken
							};

							axios.post(insertUrl, insertData)
								.then(function (response) {

									// user inserted successfully. set local storage and state
									response.data.photo = userPhotoURL;
									setUser(response.data);
									ls.set('userinfo', response.data);
								})
								.catch(function (error) {

									const errorCode = error.response.data.error || '';
									const errorMessage = error.response.data.message || '';

									if ( errorCode === 'USER_EXISTS' && errorMessage === 'User already exists with this email/uid.' ) {
										// user is inactive
										// ToDo:
										// 1. log this event
										// 2. delete user from firebase
										// 3. give user an error message that the account is inactive and need to be active again.
										setUser(null);
										ls.remove('userinfo');

									} else {
										// unknown error. log and investigate.
										console.log('unknown error. log and investigate.');
										console.log(error.response);
										setUser(null);
										ls.remove('userinfo');
									}
								});

						} else {
							// unknown error. log and investigate.
							console.log('unknown error. log and investigate.');
							console.log(error.response);
							setUser(null);
							ls.remove('userinfo');
						}
					});
			}
		});
	}

	return (
		<Router>
			<Switch>
				<Route path="/page/result/:serialNumber">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PageResult />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/page/prizebond-ki">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PagePrizebondKi />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/page/goponiyota-niti">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PagePrivacyPolicy />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/check">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PageCheckResult />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/user">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PageUserNumbers />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/login">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PageLogin />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
				<Route path="/">
					<ScrollToTop>
					<UserContext.Provider value={userValue}>
						<PageHome />
					</UserContext.Provider>
					</ScrollToTop>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;