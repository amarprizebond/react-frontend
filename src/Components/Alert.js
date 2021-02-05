import React from 'react';

function Alert(props) {

    let contClassName = 'alert uk-border-rounded';
    if ( props.type ) {
        contClassName += ' uk-alert-' + props.type;
    }

    if (!props.messages) {
        props.messages = [];
        contClassName += ' uk-hidden ';
    }
    
    if (props.messages.length <= 0) {
        contClassName += ' uk-hidden ';
    }

	return (
        <div className={contClassName}>
            <p>
                {props.messages.map(( message, index ) => {
                    return ( <span key={index}>{message}</span> );
                })}
            </p>
        </div>
	);
}

export default Alert;
