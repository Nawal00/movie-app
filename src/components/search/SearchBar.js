import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const searchTypeObj = {
    person: 'Actor',
    movie: 'Movies',
    tv: 'TV Shows',
    all: 'All'
};

const SearchBar = (props) => {

    const { searchInputValue, handleSearchKeywords, fetchSearchKeywordsAPI, handleSearchType, searchType } = props;

    return (
        <Form>
            <Form.Row>
                <Col sm={{ span: 4, offset: 4 }}>
                    <Form.Control
                        size="lg"
                        name="searchInputValue"
                        type="text"
                        value={searchInputValue}
                        placeholder="i.e. Jumanji or Jamie Foxx"
                        onChange={handleSearchKeywords}
                        autoFocus
                    />
                </Col>
                <Col xs="auto">
                    <Button
                        size="lg"
                        type="submit"
                        onClick={(e) => fetchSearchKeywordsAPI(e)}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
            <Row style={{ 'padding': '1rem 0' }}>
                <Col md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }}>
                    {Object.keys(searchTypeObj).map((searchTypeButton, i) =>
                        <Button
                            key={searchTypeButton + i}
                            variant={searchType.includes(searchTypeButton) ? 'light' : 'default'}
                            value={searchTypeButton}
                            onClick={(e) => handleSearchType(e)}
                        >
                            {searchTypeObj[searchTypeButton]}
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBar;
//filter the  search results for only actors, only movies, only tv shows, or all.