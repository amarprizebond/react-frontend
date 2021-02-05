import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ResultMessage(props) {

    let contClassName = 'message uk-border-rounded uk-alert';
    if ( props.type ) {
        contClassName += '-' + props.type;
    }

    let icon = '';
    if ( props.type === 'success' ) {
        icon = <div className="icon"><span uk-icon="icon: happy; ratio: 5"></span></div>
    } else if ( props.type === 'danger' ) {
        icon = <div className="icon"><span uk-icon="icon: warning; ratio: 5"></span></div>
    } else {
        icon = <div className="icon"><Skeleton circle={true} width={100} height={100} /></div>
    }

	return (
        <div className={contClassName}>
            {icon}
            <div className="text">
                <h4 className="message-title">{ props.title || <Skeleton /> }</h4>
                <p>{ props.text || <Skeleton count={2} /> }</p>
            </div>
        </div>
	);
}

export default ResultMessage;