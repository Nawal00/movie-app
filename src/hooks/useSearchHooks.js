import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { searchAllTypes } from '../api/serverApi';

export default function useSearchHooks() {

    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [filteredSearchResult, setFilteredSsearchResult] = useState([]);
    const [searchType, setSearchType] = useState('all');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();

    const handleSearchKeywords = (e) => {
        const { value } = e.target;
        setSearchInputValue(value);
    };

    const fetchSearchKeywordsAPI = async (e) => {
        e.preventDefault();
        setSearchResult(await searchAllTypes(searchInputValue));
        history.push('/');
    };

    const handleSearchType = (e) => {
        const { value } = e.target;
        setSearchType(value);
    };

    const handleSearchFilter = useCallback((filterType) => {
        if (searchType.length > 1 && searchType !== 'all') {
            const filteredBySearchType = searchResult?.filter(list => list.media_type === filterType);
            setFilteredSsearchResult(filteredBySearchType);
        } else {
            setFilteredSsearchResult(searchResult)
        }
    }, [searchResult, searchType])

    useEffect(() => {
        handleSearchFilter(searchType)
    }, [searchType, searchResult, handleSearchFilter])

    const handleSuggestions = useCallback(async () => {
        if (searchInputValue.length > 5) {
            setSuggestions(await searchAllTypes(searchInputValue));
        } else {
            setSuggestions([]);
        }
    }, [searchInputValue]);

    useEffect(() => {
        handleSuggestions()
    }, [handleSuggestions, searchInputValue]);

    return {
        handleSearchKeywords,
        fetchSearchKeywordsAPI,
        handleSearchType,
        filteredSearchResult,
        searchType,
        searchInputValue,
        suggestions,
        setSearchInputValue,
    }
}
