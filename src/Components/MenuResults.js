import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/bn';

import {bengaliNumber} from '../Helper/NumberHelper';

function MenuResults(props) {
    
    let [results, setResults] = useState([]);

    const fetchData = () => {

        let url = `${process.env.REACT_APP_API_URL}/results`;
        axios.get(url)
            .then(function (response) {
                setResults(response.data.data);
            });
    }

    useEffect(() => {

        fetchData();

    }, []);

	return (
        <li className="menulist menulist-results">
            <div className="uk-navbar-toggle">
                <span className="uk-icon" uk-icon="icon: grid"></span>
                <span className="menu-text">ফলাফল</span>
            </div>
            <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-right">
                <ul className="menu-results uk-nav uk-navbar-dropdown-nav">
                    {results.map((val, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/page/result/'+ val.serial}>
                                    {bengaliNumber(val.serial)}তম ফলাফল
                                    <small><Moment locale="bn" format="Do MMMM, YYYY">{val.pub_date}</Moment></small>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
	);
}

export default MenuResults;