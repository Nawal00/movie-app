import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, Jumbotron } from 'react-bootstrap';

import CardLayout from '../common/CardLayout';
import { fetchTvShowDetails, fetchCast } from '../../api/serverApi';
// import './TvShow.scss';

const TvShowDetails = () => {

    const { tv_show_id } = useParams();
    const [tvShow, setShow] = useState([]);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetailsAPI = async () => {
            setShow(await fetchTvShowDetails(tv_show_id))
            setCast(await fetchCast(tv_show_id, 'tv'))
        }
        fetchMovieDetailsAPI();
    }, [tv_show_id])

    return (
        <div className="movie__details__container">
            <Jumbotron className="text-center">
                <h1>TV Show Details</h1>
            </Jumbotron>
            <CardLayout {...tvShow} />
            <Row>
                {cast?.map((cast, i) =>
                    <Col md={3} key={cast.id + i}>
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

export default TvShowDetails;


// # List all major cast  members in that show, 
