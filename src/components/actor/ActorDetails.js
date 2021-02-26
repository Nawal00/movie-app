import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import { fetchActorDetails } from '../../api/serverApi';

const ActorDetails = () => {

    const { actor_id } = useParams();
    const [actorInMovies, setActorInMovies] = useState([]);
    // console.log('actor:', actor)


    useEffect(() => {
        const fetchActorDetailsAPI = async () => {
            setActorInMovies(await fetchActorDetails(actor_id))
        }
        fetchActorDetailsAPI();
    }, [actor_id])

    return (
        <div>
            <h1>Actor Detail</h1>

            {actorInMovies?.map(movie =>
                <Link to={`/movie/${movie.id}`}>
                    <div key={movie.id} style={{ 'margin': '50px' }}>
                        <p>Movie Title: {movie.title}</p>
                        <p>Character: {movie.character}</p>
                        <img src={movie.poster} alt='movie' />
                    </div>
                </Link>
            )}
        </div>
    )
}

export default ActorDetails;


// # an actor details page will list all the shows that the actor has appeared in. 
