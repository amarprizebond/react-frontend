import { useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

function _ScrollToTop(props) {
    const { pathname } = useLocation();    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);    return props.children
}

export default withRouter(_ScrollToTop);