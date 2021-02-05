import React from 'react';

import Header from '../Components/Header';
import Footer from './Footer';
import Logo from '../Components/Logo';
import Search from '../Components/Search';
import AccountSuggestionFirst from './AccountSuggestionFirst';
import AccountSuggestionLast from './AccountSuggestionLast';

function PageHome(props) {

	return (
        <>
			<Header hasSearchBar='no' />
			<div className="search-box uk-container uk-container-xsmall uk-text-center">
				<Logo link='/' className='logo uk-align-center' />
				<Search type='box' />
				<AccountSuggestionFirst />
				<AccountSuggestionLast />
			</div>
			<Footer />
		</>
	);
}

export default PageHome;