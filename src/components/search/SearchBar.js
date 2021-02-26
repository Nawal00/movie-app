import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

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
                        placeholder="i.e. Jumanji"
                        onChange={handleSearchKeywords}
                        autoFocus
                    />
                </Col>
                <Col>
                    {Object.keys(searchTypeObj).map((searchTypeButton, i) =>
                        <Button
                            key={searchTypeButton + i}
                            size="lg"
                            variant={searchType.includes(searchTypeButton) ? 'primary' : 'default'}
                            value={searchTypeButton}
                            onClick={(e) => handleSearchType(e)}
                        >
                            {searchTypeObj[searchTypeButton]}
                        </Button>
                    )}
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
        </Form>
    )
}

export default SearchBar;
//filter the  search results for only actors, only movies, only tv shows, or all.