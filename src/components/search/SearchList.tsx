import React from "react";
import { Link } from 'react-router-dom';

import CardLayout from '../common/CardLayout';

type Props = {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: string[],
    id: number,
    media_type: string,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview:  string, 
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}

const SearchList: React.FC<Props> = (props: Props) => {
    return (
        <Link to={`/${props.media_type}/${props.id}`}>
            <CardLayout {...props} />
        </Link>
    );
}

export default SearchList; 