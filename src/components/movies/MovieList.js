import React from "react";
import { Link } from 'react-router-dom';


const MovieList = (props) => {

    const { original_title, id } = props;


    return (
        <Link to={`/movie/${id}`}>
            <div>{original_title}</div>
        </Link>
    )
}

export default MovieList; 