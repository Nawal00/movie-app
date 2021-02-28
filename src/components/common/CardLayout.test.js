import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CardLayout from './CardLayout';


const testProps = {
    name: 'test-name',
    overview: 'test-overview'
};

describe('Card Layout component tests', () => {

    test('Card Layout renders with name and overview props', () => {

        const { getByText, queryByText } = render(<CardLayout {...testProps} />)
        expect(getByText(testProps.name)).toBeInTheDocument();
        expect(getByText(testProps.overview)).toBeInTheDocument();
        expect(queryByText('Release:')).not.toBeInTheDocument();
        expect(queryByText('First Air Date:')).not.toBeInTheDocument();
        expect(queryByText('Character:')).not.toBeInTheDocument();

    });
    test('Card Layout renders with title, release data, first air date, and poster_path props', () => {
        const newProps = {
            ...testProps,
            title: 'test-title',
            release_date: 'test-date',
            character: 'test-character',
            first_air_date: 'test-first_air_date',
            poster_path: 'test-poster_path',
        }
        const { getByText, queryByText, container } = render(<CardLayout {...newProps} />)
        expect(getByText(newProps.title)).toBeInTheDocument();
        expect(getByText(newProps.release_date)).toBeInTheDocument();
        expect(getByText(newProps.character)).toBeInTheDocument();
        expect(getByText(newProps.first_air_date)).toBeInTheDocument();
        expect(container.querySelector('img')).toHaveAttribute('src', `https://image.tmdb.org/t/p/w500/${newProps.poster_path}`);
        expect(queryByText(testProps.name)).not.toBeInTheDocument();

    });
    test('Card Layout renders profile_path props', () => {
        const newProps = {
            ...testProps,
            profile_path: 'test-profile_path',
        }
        const { container } = render(<CardLayout {...newProps} />)
        expect(container.querySelector('img')).toHaveAttribute('src', `https://image.tmdb.org/t/p/w500/${newProps.profile_path}`);

    });
})