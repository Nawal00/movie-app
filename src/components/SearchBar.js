import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

import { searchMovie } from '../service/index';

const SearchBar = () => {

    const [movie, setMovie] = useState('');

    const handleSearchMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };


    const fetchSearchMovieAPI = (e) => {
        e.preventDefault(); 
        searchMovie(movie);
    }
   

    return (
        <Form>
            <Form.Row>
                <Col sm={{ span: 4, offset: 4 }}>
                    <Form.Control
                        name="movie"
                        type="text"
                        value={movie}
                        placeholder="Enter movie name"
                        onChange={handleSearchMovie}
                    />
                </Col>
                <Col xs="auto">
                    <Button 
                        type="submit" 
                        onClick={fetchSearchMovieAPI}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default SearchBar; 
