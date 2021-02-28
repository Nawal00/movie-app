import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Jumbotron, Card } from 'react-bootstrap';

import { fetchActorMovieCredits, fetchActorDetails } from '../../api/serverApi';
import CardLayout from '../common/CardLayout';
import './ActorDetails.scss';

const ActorDetails = () => {

    const { actor_id } = useParams();
    const [actorCredits, setActorCredits] = useState([]);
    const [actor, setActorDetails] = useState([]);

    useEffect(() => {
        const fetchActorMovieCreditsAPI = async () => {
            setActorCredits(await fetchActorMovieCredits(actor_id))
            setActorDetails(await fetchActorDetails(actor_id))
        }
        fetchActorMovieCreditsAPI();
    }, [actor_id])

    return (
        <div className="actor__details__container">
            <Jumbotron>
                <h1>Actor Details</h1>
            </Jumbotron>
            <div className="card__container">
                <Card className="actor__card">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`} />
                    <Card.Body>
                        <Card.Title as="h3">{actor.name}</Card.Title>
                        <Card.Text>{actor.biography}</Card.Text>
                        <Card.Text><strong>Birthday:</strong> {actor.birthday}</Card.Text>
                        <Card.Text><strong>Place of birth:</strong> {actor.place_of_birth}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <Jumbotron>
                <h1>Actor Movies</h1>
            </Jumbotron>

            {actorCredits?.map((movie, i) =>
                <Link to={`/movie/${movie.id}`} key={movie.id + Math.random()}>
                    <CardLayout {...movie} />
                </Link>
            )}
        </div>
    );
}

export default ActorDetails;


