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
            <Col sm={12}><CardLayout {...movie} /></Col>
            <Col sm={12}>
                <Jumbotron>
                    <h1>Cast</h1>
                </Jumbotron>
            </Col>
            <Row className="movies__cast__cotainer">
                {cast?.map((cast) =>
                    <Col key={cast.id + cast.credit_id} sm={3}>
                        <Link to={`/person/${cast.id}`}>
                            <Card className="cast__card">
                                <Card.Img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt='actor' />
                                <Card.Text>{cast.name}<br />Character: {cast.character}</Card.Text>
                            </Card>
                        </Link>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default MovieDetails;

