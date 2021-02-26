import React, { useState, } from "react";

import SearchBar from '../searchBar/SearchBar';
import MovieList from '../movies/MovieList';

import { searchMovie } from '../../api/serverApi';

const Home = () => {

    const [movie, setMovie] = useState('');
    const [moviesList, setMoviesList] = useState([]);

    const handleSearchMovie = (e) => {
        const { value } = e.target;
        setMovie(value);
    };

    const fetchSearchMovieAPI = async (e) => {
        e.preventDefault();
        setMoviesList(await searchMovie(movie));
    }


    return (
        <div>
            Movie Search App
            <SearchBar
                movie={movie}
                handleSearchMovie={handleSearchMovie}
                fetchSearchMovieAPI={fetchSearchMovieAPI}
            />
            {moviesList?.map(movie =>
                <MovieList key={movie.id} {...movie} />)}
        </div>
    )
}

export default Home; 