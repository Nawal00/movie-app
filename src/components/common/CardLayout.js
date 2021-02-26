import React from 'react';
import { Card } from 'react-bootstrap';

import './CardLayout.scss';

export default function CardLayout(props) {

    const { name, overview, release_date, title, character, first_air_date, poster_path, profile_path } = props;
    const imgUrl = poster_path || profile_path;

    return (
        <div className="card-container">
            <Card>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
                <Card.Body>
                    <Card.Title as="h3">{title ? title : name}</Card.Title>
                    {release_date && <Card.Text>Release Date: {release_date}</Card.Text>}
                    {first_air_date && <Card.Text>First Air Date: {first_air_date}</Card.Text>}
                    {character && <Card.Text>Character: {character}</Card.Text>}
                    <Card.Text>{overview}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
