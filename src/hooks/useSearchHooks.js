import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { searchAllTypes } from '../api/serverApi';

const useSearchHooks = () => {

    const history = useHistory();

    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [filteredSearchResult, setFilteredSearchResult] = useState([]);
    const [searchFilterType, setSearchFilterType] = useState('all');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchInputValue(value);
    };

    const fetchSearchAllAPI = async (e) => {
        e.preventDefault();
        setSearchResult(await searchAllTypes(searchInputValue));
        history.push('/');
    };

    const handleSearchFilterType = (e) => {
        const { value } = e.target;
        setSearchFilterType(value);
    };

    const handleSearchFilter = useCallback((searchFilterType) => {
        if (searchFilterType.length > 1 && searchFilterType !== 'all') {
            const filteredBySearchType = searchResult?.filter(list => list.media_type === searchFilterType);
            setFilteredSearchResult(filteredBySearchType);
        } else {
            setFilteredSearchResult(searchResult)
        }
    }, [searchResult])

    useEffect(() => {
        handleSearchFilter(searchFilterType)
    }, [searchFilterType, searchResult, handleSearchFilter])

    const handleSuggestions = useCallback(async () => {

        if (searchInputValue.length >= 5) {
            setSuggestions(await searchAllTypes(searchInputValue));
        } else {
            setSuggestions([]);
        }
    }, [searchInputValue]);

    useEffect(() => {
        handleSuggestions();
    }, [handleSuggestions, searchInputValue]);

    return {
        handleInputChange,
        fetchSearchAllAPI,
        handleSearchFilterType,
        filteredSearchResult,
        searchFilterType,
        searchInputValue,
        suggestions,
        setSearchInputValue,
    }
}

export default useSearchHooks;