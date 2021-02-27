import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CardLayout.scss';

export default function CardLayout(props) {

    const { name, overview, release_date, title, character, first_air_date, poster_path, profile_path } = props;
    const imgUrl = poster_path || profile_path;

    return (
        <div className="card__container">
            <Card>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
                <Card.Body>
                    <Card.Title as="h3">{title ? title : name}</Card.Title>
                    {release_date && <Card.Text>Release: {release_date.split('-')[0]}</Card.Text>}
                    {first_air_date && <Card.Text>First Air Date: {first_air_date.split('-')[0]}</Card.Text>}
                    {character && <Card.Text>Character: {character}</Card.Text>}
                    <Card.Text>{overview}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

CardLayout.propTypes = {
    name: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    character: PropTypes.string,
    first_air_date: PropTypes.string,
    poster_path: PropTypes.string,
    profile_path: PropTypes.string
};
