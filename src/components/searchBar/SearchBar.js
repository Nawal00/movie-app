import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


const SearchBar = (props) => {

    const { movie, handleSearchMovie, fetchSearchMovieAPI } = props;

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
                        autoFocus
                    />
                </Col>
                <Col xs="auto">
                    <Button
                        type="submit"
                        onClick={(e) => fetchSearchMovieAPI(e)}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default SearchBar; 
