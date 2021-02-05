import React from 'react';
import { bengaliNumber } from '../Helper/NumberHelper';

function Pagination(props) {

    let totalRecord = props.total;
    let perPage = props.perPage;
    let currentPage = parseInt(props.currentPage);
    let totalPage = Math.ceil(totalRecord / perPage);

    if (totalPage === 1) {
        return '';
    }

    let pagination = [];
    if (totalPage > 7) {
        if (currentPage <= 4) {
            pagination = [
                1, 2, 3, 4, 5, 0, totalPage
            ];
        } else if (currentPage >= totalPage - 3) {
            pagination = [
                1, 0, totalPage-4, totalPage-3, totalPage-2, totalPage-1, totalPage
            ];
        } else {
            pagination = [
                1, 0, currentPage-1, currentPage, currentPage+1, 0, totalPage
            ];
        }
    } else {
        pagination = Array.from({length: totalPage}, (_, i) => i + 1);
    }

    const linkHandler = (e) => {
        e.preventDefault();

        let page = e.target.dataset.page;
        props.currentPageCallback(page);
    }

	return (
        <ul className="uk-pagination uk-flex-center" uk-margin="true">
            {
                pagination.map((e, i) => {

                    let paginListClassName = '';
                    if (e == 0) {
                        paginListClassName = 'uk-disabled';
                    } else if (e == currentPage) {
                        paginListClassName = 'uk-active';
                    }
                    
                    if (e == 0) {
                        return (
                            <li key={i} className={paginListClassName}><span>&hellip;</span></li>
                        );
                    } else {
                        return (
                            <li key={i} className={paginListClassName}><a href="/" onClick={linkHandler} data-page={e}>{bengaliNumber(e)}</a></li>
                        );
                    }
                })
            }
        </ul>
	);
}

export default Pagination;
