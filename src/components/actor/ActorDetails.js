import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import { fetchActorDetails } from '../../api/serverApi';
import CardLayout from '../common/CardLayout';
import './ActorDetails.scss';

const ActorDetails = () => {

    const { actor_id } = useParams();
    const [actorInMovies, setActorInMovies] = useState([]);

    useEffect(() => {
        const fetchActorDetailsAPI = async () => {
            setActorInMovies(await fetchActorDetails(actor_id))
        }
        fetchActorDetailsAPI();
    }, [actor_id])

    return (
        <div className="actor__details__container">
            <Jumbotron>
                <h1>Actor Details</h1>
            </Jumbotron>

            {actorInMovies?.map((movie, i) =>
                <Link to={`/movie/${movie.id}`} key={movie.id + i}>
                    <CardLayout  {...movie} />
                </Link>
            )}
        </div>
    )
}

export default ActorDetails;


