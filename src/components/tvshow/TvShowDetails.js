import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Row, Jumbotron } from 'react-bootstrap';

import CardLayout from '../common/CardLayout';
import CastLayout from '../common/CastLayout';
import { fetchTvShowDetails, fetchCast } from '../../api/serverApi';

export default function TvShowDetails() {

    const { tv_show_id } = useParams();
    const [tvShow, setShow] = useState([]);
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const fetchMovieDetailsAPI = async () => {
            setShow(await fetchTvShowDetails(tv_show_id))
            setCasts(await fetchCast(tv_show_id, 'tv'))
        }
        fetchMovieDetailsAPI();
    }, [tv_show_id])

    return (
        <div>
            <div>
                <Jumbotron className="text-center">
                    <h1>TV Show Details</h1>
                </Jumbotron>
                <CardLayout {...tvShow} />
                <Jumbotron>
                    <h1>Cast</h1>
                </Jumbotron>
            </div>
            <Row className="cast__container">
                {casts?.map(cast =>
                    <CastLayout cast={cast} key={cast.id + cast.credit_id} />)}
            </Row>
        </div>
    );
}


