import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, Jumbotron } from 'react-bootstrap';

import CardLayout from '../common/CardLayout';
import { fetchMovieDetails, fetchCast } from '../../api/serverApi';
import './MovieDetails.scss';

const MovieDetails = () => {

    const { movie_id } = useParams();
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetailsAPI = async () => {
            setMovie(await fetchMovieDetails(movie_id))
            setCast(await fetchCast(movie_id, 'movie'))
        }
        fetchMovieDetailsAPI();
    }, [movie_id])

    return (
        <div className="movie__details__container">
            <CardLayout {...movie} />
            <Col sm={{ span: 6, offset: 3 }}>
                <Jumbotron className="text-center">
                    <h1>Cast</h1>
                </Jumbotron>
            </Col>
            <Row>
                {cast?.map((cast, i) =>
                    <Col key={cast.id + i} sm={{ span: 2, offset: 1 }}>
                        <Link to={`/person/${cast.id}`}>
                            <Card className="cast__card">
                                <Card.Img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt='actor' />
                                <Card.Text>Name: {cast.name}</Card.Text>
                                <Card.Text>Character: {cast.character}</Card.Text>
                            </Card>
                        </Link>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default MovieDetails;

