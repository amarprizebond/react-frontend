import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import numeral from 'numeral';

import Header from './Header';
import Footer from './Footer';
import Alert from '../Components/Alert';
import ResultMessage from './ResultMessage';
import AccountSuggestionFirst from './AccountSuggestionFirst';
import AccountSuggestionLast from './AccountSuggestionLast';
import { bengaliNumber, bengaliNumberPosition, sanitizeNumber } from '../Helper/NumberHelper';

function PageCheckResult(props) {

    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const location = useLocation();

    const fetchData = (numberToCheck) => {

        numberToCheck = sanitizeNumber(numberToCheck);
        setType('');
        setTitle('');
        setText('');

        let url = `${process.env.REACT_APP_API_URL}/results/check/${numberToCheck}`;
        axios.get(url)
            .then(function (response) {
                
                if (response.data.result === true) {
                    setType('success');
                    setTitle('অভিনন্দন');
                    setText(<>আপনি {bengaliNumber(numeral(response.data.value).format('0,0'))} টাকা মূল্যমানের, {bengaliNumberPosition(response.data.prize)} পুরস্কার পেয়েছেন।</>);
                } else {
                    setType('danger');
                    setTitle('দুঃখিত');
                    setText(<>আপনার প্রদত্ত নম্বর {bengaliNumber(numeral(numberToCheck).format('0000000'))}, কোনো পুরস্কারের সাথে মেলেনি। <br /> অন্য আরেকটি নম্বর চেষ্টা করে দেখুন।</>);
                }

                setErrorMessages([]);
            })
            .catch(function (error) {

                const errorCode = error.response.data.error || '';
                const errorMessage = error.response.data.message || '';

                if ( errorCode === 'INVALID_INPUT' && errorMessage === 'Number must be integer.' ) {
                    setErrorMessages(['আপনার প্রদত্ত প্রাইজবন্ড নম্বরটি সঠিক নয়। প্রাইজবন্ডের নম্বর হিসেবে শুধুমাত্র নম্বর (০-৯) ব্যবহার করুন।']);
                } else if ( errorCode === 'INVALID_INPUT_DATA' && errorMessage === 'Value is out of range. Number should be between 1-9999999.' ) {
                    setErrorMessages(['আপনার প্রদত্ত প্রাইজবন্ড নম্বরটি সঠিক নয়। প্রাইজবন্ড নম্বর ১ হতে ৯৯৯৯৯৯৯ পর্যন্ত হতে পারে।']);
                } else {
                    // unknown error. log and investigate.
                    console.log('unknown error. log and investigate.');
                    console.log(error.response);
                }
            });
    }

    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);
        const searchNumber = searchParams.getAll('search')[0];

        setNumber(searchNumber);
        fetchData(searchNumber);
        
    }, [location]);

    let bodyContent = '';
    if (errorMessages.length > 0) {
        bodyContent = <Alert type="danger" messages={errorMessages} />;
    } else {
        bodyContent = <ResultMessage type={type} title={title} text={text} />;
    }

	return (
        <>
			<Header hasSearchBar='yes' contClassName='uk-container-xsmall' searchBarValue={number} />
			
            <div className="page-body">
                <div className="uk-container uk-container-xsmall">
                    {bodyContent}
                    <AccountSuggestionFirst />
                    <AccountSuggestionLast />
                </div>
            </div>

            <Footer />
		</>
	);
}

export default PageCheckResult;