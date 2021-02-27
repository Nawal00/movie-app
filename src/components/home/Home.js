import React from "react";

import SearchList from '../search/SearchList';

const Home = ({ filteredSearchResult }) => {

    return (
        <React.Fragment>
            {filteredSearchResult?.map(serachResult =>
                <SearchList key={serachResult.id} {...serachResult} />)}
        </React.Fragment>
    )
}

export default Home;