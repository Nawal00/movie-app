import React from "react";
import PropTypes from 'prop-types';

import SearchList from '../search/SearchList.tsx';

const Home = ({ filteredSearchResult }) => {

    return (
        <React.Fragment>
            {filteredSearchResult?.map(serachResult =>
                <SearchList key={serachResult.id} {...serachResult} />)}
        </React.Fragment>
    );
}

export default Home;

Home.propTypes = {
    filteredSearchResult: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string,
        character: PropTypes.string,
        first_air_date: PropTypes.string,
        poster_path: PropTypes.string,
        profile_path: PropTypes.string
    }))
}