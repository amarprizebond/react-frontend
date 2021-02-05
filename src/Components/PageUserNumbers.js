import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../Context/UserContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ModalAddNew from '../Components/ModalAddNew';
import TableUserNumbers from '../Components/TableUserNumbers';
import { bengaliNumber } from '../Helper/NumberHelper';


function PageUserNumbers(props) {

    const {user, total} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

		if ( ! user ) {
            history.push('/login');
        }

	}, [user, total, history]);

	return (
        <>
			<Header hasSearchBar='yes' contClassName='uk-container-xsmall' searchBarValue='' />
			
            <div className="page-body">
                <div className="uk-container uk-container-xsmall">
                    <div className={total ? 'heading' : 'heading hidden'}>
                        আপনার কাছে {bengaliNumber(total)}টি প্রাইজবন্ড আছে। <a href="/" className="uk-link-muted" uk-toggle="target: #add-new-number">আরেকটি যোগ করতে চান?</a>
                    </div>
                    <TableUserNumbers />
                </div>
            </div>

            <Footer />

            <ModalAddNew />
		</>
	);
}

export default PageUserNumbers;