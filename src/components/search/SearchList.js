import React from "react";
import { Link } from 'react-router-dom';

import CardLayout from '../common/CardLayout';

const SearchList = (props) => {

    const { id, media_type, } = props;

    const isMovie = media_type === 'movie';
    const isTV = media_type === 'tv';
    const routeTo = isTV ? `/tv/${id}` : isMovie ? `/movie/${id}` : `/actor/${id}`;

    return (
        <Link to={routeTo}>
            <CardLayout {...props} />
        </Link>
    )
}

export default SearchList; //className="mx-auto my-4