import React from "react";

import SearchList from '../search/SearchList';

const Home = ({ filteredSearchResult }) => {

    return (
        <div>
            {filteredSearchResult?.map(serachResult =>
                <SearchList key={serachResult.id} {...serachResult} />)}
        </div>
    )
}

export default Home;