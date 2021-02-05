import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SetUserStat } from '../Helper/LocalStorage';

function SearchBox(props) {

    const [search, setSearch] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (search) {

            SetUserStat();
            history.push('/check/?search=' + search);

        } else {
            document.getElementById('search').focus();
        }
    }

	return (
        <form onSubmit={handleSubmit}>
            <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: search"></span>
                <input type="text" name="search" id="search" maxLength="35" 
                    value={search} onChange={e => setSearch(e.target.value)}
                    autoFocus="on" autoCorrect="off" autoComplete="off" 
                    placeholder="প্রাইজবন্ড নম্বর টাইপ করুন..." 
                    className="search-bar-input big uk-input uk-form-large uk-border-pill" />
            </div>
            <div className="uk-align-center">
                <Link to="/page/prizebond-ki" className="button-question uk-button uk-button-default uk-button-large uk-border-pill">
                    <span uk-icon="question"></span>
                    প্রাইজবন্ড কি?
                </Link>
                <button type="submit" className="uk-button uk-button-primary uk-button-large uk-border-pill">
                    ভাগ্য পরীক্ষা করুন
                </button>
            </div>
        </form>
	);
}

export default SearchBox;