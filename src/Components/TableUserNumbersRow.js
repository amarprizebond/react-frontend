import React, { useState, useContext } from 'react';
import numeral from 'numeral';
import axios from 'axios';

import { UserContext } from '../Context/UserContext';
import { bengaliNumber } from '../Helper/NumberHelper';
import { setTokenHeader } from '../Helper/TokenHelper';

function TableUserNumbersRow(props) {

    const [confirmClicked, setConfirmClicked] = useState(false);
    const {user, numbers, setNumbers, total, setTotal} = useContext(UserContext);

    const handleDelete = (e) => {
        e.preventDefault();
        setConfirmClicked(true);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setConfirmClicked(false);
    }

    const handleOk = (e) => {
        e.preventDefault();

        setTokenHeader(user.token);
        const deleteUrl = `${process.env.REACT_APP_API_URL}/users/numbers`;
        const data = {
            id: props.id,
            series: props.series,
            number: props.number
        };
        axios.delete(deleteUrl, {data})
            .then(function (response) {

                const { id, result } = response.data;

                if ( result ) {

                    let newTotal = total - 1;
                    let newNumbers = numbers;
                    let numberIndex = numbers.findIndex(n => n.id === id);
                    newNumbers.splice(numberIndex, 1);

                    setTotal(newTotal);
                    setNumbers(newNumbers);
                }
            })
            .catch(function (error) {

                const errorCode = error.response.data.error || '';
                const errorMessage = error.response.data.message || '';

                if (errorCode === 'NUMBER_DELETE_NONE' && errorMessage === 'No number deleted. Probably number does not exists.') {
                    // log and investigate.
                } else if (errorCode === 'NUMBER_DELETE_MANY') {
                    // log and investigate.
                } else {
                    // unknown error. log and investigate.
                    console.log('unknown error. log and investigate.');
                    console.log(error.response);
                }
            });

        setConfirmClicked(false);
    }

    return (
        <tr className={ props.prize ? 'uk-alert-success' : '' }>
            <td className={ confirmClicked ? 'series hidden' : 'series' }>{props.seriesLabel}</td>
            <td className={ confirmClicked ? 'number hidden' : 'number' }>{bengaliNumber(numeral(props.number).format('0000000'))}</td>
            <td className="action" colSpan={ confirmClicked ? 3 : null }>
                <div className={ confirmClicked ? 'hidden' : '' }>
                    <a href="/" className="uk-icon-link" uk-icon="trash" onClick={handleDelete}> </a>
                </div>
                <div className={ confirmClicked ? 'confirm' : 'confirm hidden' }>
                    আপনি কি প্রাইজবন্ড নম্বরটি মুছে ফেলতে চাচ্ছেন?
                    <span className="cancel" onClick={handleCancel}>বাদ দিন</span>
                    <span className="ok" onClick={handleOk}>সম্মতি দিচ্ছি</span>
                </div>
            </td>
        </tr>
    );
}

export default TableUserNumbersRow;