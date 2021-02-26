import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import { fetchMovieDetails, fetchCast } from '../../api/serverApi';

const MovieDetails = () => {

    const { movie_id } = useParams();
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);
    console.log('cast:', cast)

    useEffect(() => {
        const fetchMovieDetailsAPI = async () => {
            setMovie(await fetchMovieDetails(movie_id))
            setCast(await fetchCast(movie_id))
        }
        fetchMovieDetailsAPI();
    }, [movie_id])

    return (
        <div>
            <h1>Movie Detail</h1>
            <p>{movie.original_title}</p>
            {cast?.map(cast =>
                <Link to={`/actor/${cast.id}`}>
                    <div key={cast.id} style={{ 'margin': '150px' }}>
                        <p>Name: {cast.name}</p>
                        <p>Character: {cast.character}</p>
                        <img src={cast.img} alt='actor' />
                    </div>
                </Link>
            )}
        </div>
    )
}

export default MovieDetails;


// # List all major cast  members in that show, 
