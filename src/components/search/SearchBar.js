import React from 'react';
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
        setSearchInputValue,
    } = props;

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
                                autoFocus
                            />
                            <Col sm={12} className="suggestion__list__container">
                                {suggestions.map(suggestion =>
                                    <Link
                                        to={`/${suggestion.media_type}/${suggestion.id}`}
                                        key={suggestion.id}
                                    >
                                        <option onClick={() => setSearchInputValue('')}>
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
                                onClick={(e) => { fetchSearchKeywordsAPI(e); setSearchInputValue('') }}
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