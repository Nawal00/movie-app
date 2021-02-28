import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, Col, } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CastLayout.scss';

export default function CastLayout({ cast }) {
 
    return (
        <Col sm={3}>
            <Link to={`/person/${cast.id}`}>
                <Card className="cast__card">
                    <Card.Img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt='actor' />
                    <Card.Text>
                        <strong>{cast.name}</strong>
                        <br />Character: {cast.character}
                    </Card.Text>
                </Card>
            </Link>
        </Col>
    );
}

CastLayout.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    character: PropTypes.string,
    profile_path: PropTypes.string
};
