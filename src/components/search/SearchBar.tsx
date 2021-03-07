import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

import './SearchBar.scss'

interface SuggestionObj {
    media_type: string, 
    id: string,
    title: string, 
    name: string
}

interface Props {
    searchInputValue: string,
    handleInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => string,
    fetchSearchAllAPI: () => Promise<Array<{}>>,
    handleSearchFilterType: (e: React.MouseEvent<HTMLElement, MouseEvent>) => string,
    searchFilterType: string,
    suggestions: Array<SuggestionObj>, 
}; 

type SearchTypes = {
    person: string,
    movie: string,
    tv: string,
    all: string
}

const searchTypeObj: SearchTypes = {
    person: 'Actor',
    movie: 'Movies',
    tv: 'TV Shows',
    all: 'All'
};

const SearchBar: React.FC<Props> = (props) => {

    const {
        searchInputValue,
        handleInputChange,
        fetchSearchAllAPI,
        handleSearchFilterType,
        searchFilterType,
        suggestions,
    } = props;

    const [displaySuggestions, setDisplaySuggestions] = useState<boolean>(false);

    return (
        <Form className="search__bar__component">
            <Form.Group>
                <Form.Row>
                    <Col sm={{ span: 7, offset: 2 }}>
                        <Form.Control
                            size="lg"
                            name="searchInputValue"
                            type="text"
                            value={searchInputValue}
                            placeholder="i.e. Jumanji or Jamie Foxx"
                            onChange={handleInputChange}
                            onBlur={() => setTimeout(() => setDisplaySuggestions(false), 100)}
                            onFocus={() => setDisplaySuggestions(true)}
                            autoFocus
                        />
                        {displaySuggestions &&
                            <Col sm={12} className="suggestion__list__container">
                                {suggestions.map(suggestion =>
                                    <Link
                                        to={`/${suggestion.media_type}/${suggestion.id}`}
                                        key={suggestion.id}
                                    >
                                        <option onClick={() => setDisplaySuggestions(false)}>
                                            {suggestion.title || suggestion.name}
                                        </option>
                                    </Link>
                                )}
                            </Col>
                        }
                    </Col>
                    <Col xs="auto">
                        <Button
                            size="lg"
                            type="submit"
                            onClick={fetchSearchAllAPI}
                        >
                            Search
                        </Button>
                    </Col>
                </Form.Row>
                <Row style={{ padding: '1rem 0' }}>
                    <Col sm={{ span: 12, offset: 2 }}>
                        {Object.keys(searchTypeObj).map((searchTypeButton, i) =>
                            <Button
                                key={searchTypeButton + i}
                                variant={searchFilterType.includes(searchTypeButton) ? 'light' : 'default'}
                                value={searchTypeButton}
                                onClick={(e) => handleSearchFilterType(e)}
                            >
                                {searchTypeObj[searchTypeButton as keyof SearchTypes]}
                            </Button>
                        )}
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;
