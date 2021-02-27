import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './SearchBar.scss'

const searchTypeObj = {
    person: 'Actor',
    movie: 'Movies',
    tv: 'TV Shows',
    all: 'All'
};

const SearchBar = (props) => {

    const {
        searchInputValue,
        handleSearchKeywords,
        fetchSearchKeywordsAPI,
        handleSearchType,
        searchType,
        suggestions,

    } = props;

    const [displaySuggestions, setDisplaySuggestions] = useState(true)
    console.log('displaySuggestions:', displaySuggestions)

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Row>
                        <Col sm={{ span: 4, offset: 4 }}>
                            <Form.Control
                                size="lg"
                                name="searchInputValue"
                                type="text"
                                value={searchInputValue}
                                placeholder="i.e. Jumanji or Jamie Foxx"
                                onChange={handleSearchKeywords}
                                onClick={() => setDisplaySuggestions(!displaySuggestions)}
                                autoFocus
                            />
                            <Col sm={12} className="suggestion__list__container">
                                {displaySuggestions && suggestions.map(suggestion =>
                                    <Link
                                        to={`/${suggestion.media_type}/${suggestion.id}`}
                                        id={suggestion.id}
                                    >
                                        <option onClick={() => setDisplaySuggestions(!displaySuggestions)}>
                                            {suggestion.title || suggestion.name}
                                        </option>
                                    </Link>
                                )}
                            </Col>
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
                    <Row style={{ padding: '1rem 0' }}>
                        <Col sm={{ span: 4, offset: 4 }}>
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
                </Form.Group>
            </Form>

        </>
    )
}

export default SearchBar;