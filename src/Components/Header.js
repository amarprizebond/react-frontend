import React from 'react';

import Logo from '../Components/Logo';
import MenuAccount from '../Components/MenuAccount';
import MenuResults from '../Components/MenuResults';
import Search from '../Components/Search';

function Header(props) {

    let headerClassName = 'header uk-box-shadow-small';
    let contClassName = 'search-bar uk-container uk-padding-small';
    let searchContainer = '';
    
    contClassName = props.contClassName ? contClassName +' '+ props.contClassName : contClassName;

    if ( props.hasSearchBar === 'yes' ) {

        headerClassName += ' has-searchbar ';
        searchContainer =   <div className={contClassName}>
                                <Logo link='/' fileName='logo-header.png' className='logo uk-margin-small-right' />
                                <Search type='bar' searchBarValue={props.searchBarValue} />
                            </div>
    }

	return (
        <header className={headerClassName}>
            
            {searchContainer}

            <div className="header-right uk-navbar-right" uk-navbar="true">
                <ul className="main-menu uk-navbar-nav">
                    <MenuResults />
                    <MenuAccount />
                </ul>
            </div>

        </header>
	);
}

export default Header;