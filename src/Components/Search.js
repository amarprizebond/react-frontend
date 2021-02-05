import React from 'react';
import SearchBar from './SearchBar';
import SearchBox from './SearchBox';

function Search(props) {

    if ( props.type === 'box' ) {
        return <SearchBox />;
    } else {
        return <SearchBar searchBarValue={props.searchBarValue} />;
    }

}

export default Search;