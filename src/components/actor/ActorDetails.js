import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, Jumbotron } from 'react-bootstrap';

import { fetchActorDetails } from '../../api/serverApi';
import CardLayout from '../common/CardLayout';

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
        <div>
            <Jumbotron className="text-center">
                <h1>Actor Details</h1>
            </Jumbotron>

            {actorInMovies?.map(movie =>
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <CardLayout  {...movie} />
                </Link>
            )}
        </div>
    )
}

export default ActorDetails;


