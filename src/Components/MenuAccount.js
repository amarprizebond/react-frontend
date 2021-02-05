import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fireApp from '../Config/FirebaseConfig';
import ls from 'local-storage';

import { UserContext } from '../Context/UserContext';

function MenuAccount(props) {

    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    const handleLogOut = (e) => {
        e.preventDefault();

        setUser(null);
        ls.remove('userinfo');
        
        fireApp.auth().signOut().then(function() {
            history.push('/');
        });
    }

	return (
        <>
            {user ? (<li className="menulist menulist-account">
                <a href="/" onClick={(e) => e.preventDefault()}>
                    <img src={user.photo} alt={user.name} className="pro-pic" />
                    <span className="menu-text">অ্যাকাউন্ট</span>
                </a>
                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-right">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                            <Link to='/user'>আমার প্রাইজবন্ড</Link>
                        </li>
                        <li className="uk-nav-divider"></li>
                        <li>
                            <Link to='/logout' onClick={handleLogOut}>
                                <span className="uk-icon" uk-icon="icon: sign-out"></span>
                                লগ আউট
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>) : (<li className="menulist menulist-account">
                <Link to='/login'>
                    <span className="uk-icon" uk-icon="icon: sign-in"></span>
                    <span className="menu-text">লগইন</span>
                </Link>
            </li>) }
		</>
	);
}

export default MenuAccount;