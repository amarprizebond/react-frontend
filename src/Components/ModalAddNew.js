import React, { useState, useContext } from 'react';
import validator from 'validator';
import UIkit from 'uikit';
import axios from 'axios';

import { UserContext } from '../Context/UserContext';
import Alert from '../Components/Alert';
import { setTokenHeader } from '../Helper/TokenHelper';
import { numberSeries } from '../Helper/SeriesHelper';
import { sanitizeNumber } from '../Helper/NumberHelper';

function ModalAddNew() {

    const [newSeries, setNewSeries] = useState(0);
    const [newNumber, setNewNumber] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessages, setSuccessMessages] = useState([]);

    const {user, total, setTotal, numbers, setNumbers} = useContext(UserContext);

    UIkit.util.on('#add-new-number', 'beforehide', function (e) {
        setErrorMessages([]);
        setSuccessMessages([]);
        resetForm();

        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation
        let newErrorMessages = [];
        let seriesValue = parseInt(newSeries);
        let numberValue = newNumber;

        if (seriesValue <= 0) {
            newErrorMessages.push('আপনার প্রাইজবন্ডের সিরিজ সিলেক্ট করুন।');
        }

        numberValue = sanitizeNumber(numberValue);

        if (numberValue === '') {
            newErrorMessages.push('আপনার প্রাইজবন্ডের নম্বরটি লিখুন।');
        } else if ( ! validator.isNumeric(numberValue, {no_symbols: true}) ) {
            newErrorMessages.push('প্রাইজবন্ডের নম্বর হিসেবে শুধুমাত্র নম্বর (০-৯) ব্যবহার করুন।');
        }

        setSuccessMessages([]);
        setErrorMessages(newErrorMessages);

        // validation ok
        if (newErrorMessages.length <= 0) {
            
            setTokenHeader(user.token);
            const addNumberUrl = `${process.env.REACT_APP_API_URL}/users/numbers`;
            const addNumberUrlData = {
                series: seriesValue,
                number: numberValue
            };
            axios.post(addNumberUrl, addNumberUrlData)
                .then(function (response) {
                    
                    const { id, user_id, series, number } = response.data;

                    let newTotal = total + 1;
                    let newNumbers = numbers;
                    newNumbers.unshift({
                        id,
                        user_id,
                        series,
                        number,
                        is_checked: 0,
                        result_numbers_id: null
                    });

                    setTotal(newTotal);
                    setNumbers(newNumbers);

                    setSuccessMessages(['অভিনন্দন, আপনার প্রাইজবন্ডটি যোগ হয়েছে।']);
                    resetForm();
                })
                .catch(function (error) {

                    const errorCode = error.response.data.error || '';
                    const errorMessage = error.response.data.message || '';

                    if (errorCode === 'NUMBER_EXISTS' && errorMessage === 'Number already exists.') {
                        setErrorMessages(['এই প্রাইজবন্ডটি আপনি ইতিমধ্যে যোগ করেছেন।']);
                    } else if (errorCode === 'INVALID_INPUT_DATA') {
                        setErrorMessages(['আপনার প্রদত্ত প্রাইজবন্ড নম্বরটি সঠিক নয়। প্রাইজবন্ড নম্বর ১ হতে ৯৯৯৯৯৯৯ পর্যন্ত হতে পারে।']);
                    } else {
                        // unknown error. log and investigate.
                        console.log('unknown error. log and investigate.');
                        console.log(error.response);
                        setErrorMessages(['দুঃখিত, প্রযুক্তিগত ভুলের কারণে আপনার প্রাইজবন্ডটি যোগ করা যাচ্ছে না। অনুগ্রহ করে আরেকবার চেষ্টা করুন। আমরা দ্রুত সমস্যাটি সমাধানের চেষ্টা করছি।']);
                    }
                });
        }
    }

    const resetForm = () => {
        setNewSeries(0);
        setNewNumber('');
    }

	return (
		<>
			<div id="add-new-number" uk-modal="container: #root">
                <div className="uk-modal-dialog uk-modal-body">
                    
                    <h2 className="uk-modal-title">নতুন প্রাইজবন্ড যোগ করুন</h2>

                    <Alert type="danger" messages={errorMessages} />
                    <Alert type="success" messages={successMessages} />

                    <form onSubmit={handleSubmit} className="uk-form-horizontal uk-margin">

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-select">সিরিজ</label>
                            <div className="uk-form-controls">
                                <select
                                    value={newSeries} onChange={event => setNewSeries(event.target.value)} 
                                    className="uk-select" id="form-horizontal-select">
                                    {
                                        numberSeries.map((item, index) => {
                                            return(
                                                <option key={index} value={index}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-text">নম্বর</label>
                            <div className="uk-form-controls">
                                <input 
                                    value={newNumber} onChange={event => setNewNumber(event.target.value)}
                                    className="uk-input" id="form-horizontal-text" type="text" placeholder="১ হতে ৯৯৯৯৯৯৯" maxLength="35"
                                />
                            </div>
                        </div>

                        <p className="uk-text-right">
                            <button type="button" className="uk-button uk-button-default uk-border-pill uk-modal-close">বাদ দিন</button>
                            <button type="submit" className="uk-button uk-button-primary uk-border-pill">যোগ করুন</button>
                        </p>
                    
                    </form>

                </div>
            </div>
		</>
	);
}

export default ModalAddNew;