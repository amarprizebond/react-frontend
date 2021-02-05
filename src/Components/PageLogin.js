import React, {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import {UserContext} from '../Context/UserContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Logo from '../Components/Logo';

function PageLogin(props) {

    // Configure FirebaseUI.
    const uiConfig = {
        signInSuccessUrl: '/login',
        signInOptions: [
            // List of OAuth providers supported.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    };

    const {user} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

		if (user) {
            history.push('/user');
        }

	}, [user, history]);

	return (
        <>
			<Header hasSearchBar='no' contClassName='uk-container-xsmall' />
            
            <div className="login-box uk-container uk-container-xsmall uk-text-center">

                <Logo link='/' className='logo uk-align-center' />

                <div id="firebaseui-auth-container">
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>

            </div>

            <Footer />
		</>
	);
}

export default PageLogin;