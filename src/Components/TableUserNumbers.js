import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { UserContext } from '../Context/UserContext';
import TableUserNumbersRow from '../Components/TableUserNumbersRow';
import Pagination from '../Components/Pagination';
import { bengaliNumber, sanitizeNumber } from '../Helper/NumberHelper';
import { setTokenHeader } from '../Helper/TokenHelper';
import AddNumberSuggestion from './AddNumberSuggestion';

function TableUserNumbers(props) {

    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [foundText, setFoundText] = useState('');
    const {user, numbers, total, setNumbers, setTotal} = useContext(UserContext);
    const pageSize = process.env.REACT_APP_PAGE_SIZE || 10;

    const fetchData = () => {

        if (user) {
        
            let numbersUrl = '';
            setLoading(true);

            if (filter) {
                numbersUrl = `${process.env.REACT_APP_API_URL}/users/numbers?ps=${pageSize}&page=${currentPage}&search=${filter}`;
            } else {
                numbersUrl = `${process.env.REACT_APP_API_URL}/users/numbers?ps=${pageSize}&page=${currentPage}`;
            }

            setTokenHeader(user.token);
            axios.get(numbersUrl)
                .then(function (response) {

                    setNumbers(response.data.data);
                    setTotal(response.data.total_record);
                    setTotalCount(response.data.total_count);
                    setLoading(false);

                    if (filter) {
                        if (response.data.total_count > 0) {
                            setFoundText(`${bengaliNumber(response.data.total_count)}টি প্রাইজবন্ড নম্বর খুঁজে পাওয়া গিয়েছে`);
                        } else {
                            setFoundText(`কোনো প্রাইজবন্ড নম্বর খুঁজে পাওয়া যায়নি`);
                        }
                    } else {
                        setFoundText('');
                    }
                });
        }
    };

    useEffect(() => {

        fetchData();

    }, [totalCount, currentPage, filter, user]);


    const handleFilter = (e) => {

        let filter = e.target.value;
        filter = sanitizeNumber(filter);
        
        setFilter(filter);
        setCurrentPage(1);
    }

    const handleCurrentPageCallback = (val) => {
        setCurrentPage(val);
        setLoading(false);
    }

    return (
        loading === true ? 
            <>
                <div className="filter uk-margin-top">
                    <input 
                        type="text" placeholder="প্রাইজবন্ড খুঁজুন"
                        value={filter} onChange={handleFilter}
                        className="uk-input uk-form-small" />
                    
                    <br /><small>{foundText}</small>
                </div>

                <table className="uk-table uk-table-small uk-table-divider uk-table-hover">
                    <thead>
                        <tr>
                            <th className="series"><Skeleton width={40} /></th>
                            <th className="number"><Skeleton width={80} /></th>
                            <th className="action">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>{
                        [...Array(numbers.length || 10)].map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="series"><Skeleton width={40} /></td>
                                    <td className="number"><Skeleton width={80} /></td>
                                    <td className="action"><Skeleton width={30} /></td>
                                </tr>
                            )
                        })
                    }</tbody>
                </table>
            </>
            :

        total === 0 ? 
            <AddNumberSuggestion /> :

            <>
                <div className="filter uk-margin-top">
                    <input 
                        type="text" placeholder="প্রাইজবন্ড খুঁজুন"
                        value={filter} onChange={handleFilter}
                        className="uk-input uk-form-small" />
                    
                    <br /><small>{foundText}</small>
                </div>
                
                <table className="uk-table uk-table-small uk-table-divider uk-table-hover">
                    <thead>
                        <tr>
                            <th className="series">সিরিজ</th>
                            <th className="number">নম্বর</th>
                            <th className="action">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numbers.map(( val, index ) => {
                            return <TableUserNumbersRow key={index} id={val.id} series={val.label} number={val.number} prize={val.result_numbers_id || false} />
                        })}
                    </tbody>
                </table>

                <Pagination
                    currentPage={currentPage} 
                    total={totalCount} 
                    perPage={pageSize} 
                    currentPageCallback={handleCurrentPageCallback} 
                    baseUrl={`${process.env.REACT_APP_API_URL}/users/numbers`} 
                />
            </>
    );
}

export default TableUserNumbers;