import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SetUserStat } from '../Helper/LocalStorage';

function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [inputChange, setInputChange] = useState(false);
    const history = useHistory();

    useEffect(() => {

        if ( ! inputChange ) {
            setSearch(props.searchBarValue);
        }

    }, [inputChange, props.searchBarValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        doSearch( document.getElementById('search-bar') );
    }

    const handleLinkClick = (e) => {
        e.preventDefault();
        doSearch( document.getElementById('search-bar') );
    }

    const handleSearchInput = (e) => {
        setInputChange(true);
        setSearch(e.target.value);
    }

    const doSearch = (element) => {
        if (element.value) {
            SetUserStat();
            history.push('/check/?search=' + search);
        } else {
            element.focus();
        }
    }

	return (
        <form id="form-search-bar" className="uk-inline" onSubmit={handleSubmit}>

            <a href="/" uk-icon="icon: search" onClick={handleLinkClick} className="uk-form-icon uk-form-icon-flip">Search</a>
            <input type="text" name="search" id="search-bar" maxLength="35" 
                value={search} onChange={handleSearchInput}
                autoCorrect="off" autoComplete="off" 
                placeholder="প্রাইজবন্ড নম্বর টাইপ করুন..." 
                className="search-bar-input uk-input uk-border-pill" />

        </form>
	);
}

export default SearchBar;