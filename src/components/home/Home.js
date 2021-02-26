import React, { useState, useEffect } from "react";
import { Jumbotron } from 'react-bootstrap';

import SearchBar from '../search/SearchBar';
import SearchList from '../search/SearchList';

import { searchAllTypes } from '../../api/serverApi';

const Home = () => {

    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [filteredSsearchResult, setFilteredSsearchResult] = useState([]);
    console.log('searchResult:', searchResult)
    const [searchType, setSearchType] = useState('');

    const handleSearchKeywords = (e) => {
        const { value } = e.target;
        setSearchInputValue(value);
    };

    const fetchSearchKeywordsAPI = async (e) => {
        e.preventDefault();
        setSearchResult(await searchAllTypes(searchInputValue));
    };

    const handleSearchType = (e) => {
        const { value } = e.target;
        setSearchType(value);
    };

    const handleSearchFilter = (filterType) => {
        const filteredBySearchType = searchResult?.filter(list => list.media_type === filterType);
        // setFilteredSsearchResult(filteredBySearchType);
        setSearchResult(filteredBySearchType);
    };

    useEffect(() => {
        if (searchType.length > 1) {
            handleSearchFilter(searchType)
        }
    }, [searchType])

    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Movie Database Search App</h1>
                <p>Enter a any movie, TV show or cast name to start your search!</p>
            </Jumbotron>
            <SearchBar
                searchInputValue={searchInputValue}
                handleSearchKeywords={handleSearchKeywords}
                fetchSearchKeywordsAPI={fetchSearchKeywordsAPI}
                searchType={searchType}
                handleSearchType={handleSearchType}
            />
            {searchResult?.map(serachResult =>
                <SearchList key={serachResult.id} {...serachResult} />)}
        </div>
    )
}

export default Home; 