import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import useSearchHooks from './useSearchHooks';
import { searchAllTypes } from '../api/serverApi';
import { waitFor } from '@testing-library/react';

jest.mock('../api/serverApi')
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe('useSearchHooks component tests', () => {

    test('handleInputChange correcty sets searchInputValue', () => {
        const { result } = renderHook(() => useSearchHooks())

        act(() => {
            result.current.handleInputChange({
                target: { value: 'kingkong' }
            });
        })

        expect(result.current.searchInputValue).toBe('kingkong')

    });

    test('fetchSearchAllAPI is called', () => {

        searchAllTypes.mockReturnValue(Promise.resolve([{}, {}]))
        const eventMock = { preventDefault: jest.fn() }
        const { result } = renderHook(() => useSearchHooks())

        act(() => {
            result.current.fetchSearchAllAPI(eventMock);
        })

        expect(eventMock.preventDefault).toHaveBeenCalledTimes(1)
    });


    test('handleSuggestions sets setSearchInputValue to have value length of 2', async () => {

        searchAllTypes.mockReturnValue(Promise.resolve([{}, {}]))
        const { result } = renderHook(() => useSearchHooks())

        act(() => {
            result.current.setSearchInputValue('kingkong');
        })

        await waitFor(() => expect(result.current.suggestions).toHaveLength(2))

    });
    test('handleSearchFilter correctly sets filteredSearchResult accordigly to filtered media_type', async () => {

        searchAllTypes.mockReturnValue(Promise.resolve([
            { media_type: 'actor' },
            { media_type: 'actor' },
            { media_type: 'movies' },
            { media_type: 'tvShows' },
            { media_type: 'all' }]
        ))

        const eventMock = { preventDefault: jest.fn() }
        const { result } = renderHook(() => useSearchHooks())

        act(() => {
            result.current.fetchSearchAllAPI(eventMock);
            result.current.handleSearchFilterType({
                target: { value: 'actor' }
            });
        })

        await waitFor(() => expect(result.current.filteredSearchResult).toHaveLength(2))

    });


});