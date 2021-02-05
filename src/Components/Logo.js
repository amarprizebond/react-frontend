import React from 'react';
import {Link} from 'react-router-dom';

function Logo(props) {

	return (
        <Link to={props.link}>
            <img 
                src={'/assets/images/' + (props.fileName || "logo.png")} 
                alt="আমার প্রাইজবন্ড" 
                className={props.className}
            />
        </Link>
	);
}

export default Logo;