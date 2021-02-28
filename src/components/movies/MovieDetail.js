import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Row, Col, Jumbotron } from 'react-bootstrap';

import CardLayout from '../common/CardLayout';
import CastLayout from '../common/CastLayout';

import { fetchMovieDetails, fetchCast } from '../../api/serverApi';

export default function MovieDetails() {

    const { movie_id } = useParams();
    const [movie, setMovie] = useState([]);
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const fetchMovieDetailsAPI = async () => {
            setMovie(await fetchMovieDetails(movie_id))
            setCasts(await fetchCast(movie_id, 'movie'))
        }
        fetchMovieDetailsAPI();
    }, [movie_id])

    return (
        <div>
            <div>
                <Col sm={12}><CardLayout {...movie} /></Col>
                <Col sm={12}>
                    <Jumbotron><h1>Cast</h1></Jumbotron>
                </Col>
            </div>
            <Row className="cast__container">
                {casts?.map(cast =>
                    <CastLayout cast={cast} key={cast.id + cast.credit_id} />)}
            </Row>
        </div>
    )
}



