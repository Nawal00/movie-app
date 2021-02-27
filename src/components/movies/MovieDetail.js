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
            <Jumbotron className="text-center">
                <h1>Movie Details</h1>
            </Jumbotron>
            <CardLayout {...movie} />
            <Row>
                {cast?.map((cast, i) =>
                    <Col key={cast.id + i} sm={{ span: 4, offset: 4 }}>
                        <Link to={`/actor/${cast.id}`}> 
                            <Card key={cast.id + i} className="cast__card">
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

