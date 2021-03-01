import axios from 'axios';

const serverApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: `${process.env.REACT_APP_TMDB_API_KEY}` }
});

export const searchMovie = async (movie) => {
    try {
        const response = await serverApi.get(`/search/movie?query=${movie}`)
        return response.data.results;
    }
    catch (err) {
        console.log(err);
    }
};

export const searchAllTypes = async (searchKey) => {
    try {
        const response = await serverApi.get(`/search/multi?query=${searchKey}`)
        return response.data.results;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const { data } = await serverApi.get(`/movie/${movieId}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchTvShowDetails = async (tvShowId) => {
    try {
        const { data } = await serverApi.get(`/tv/${tvShowId}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchCast = async (castId, searchType) => {
    try {
        const { data } = await serverApi.get(`${searchType}/${castId}/credits`);
        return data.cast;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchActorMovieCredits = async (actorId) => {
    try {
        const { data } = await serverApi.get(`/person/${actorId}/movie_credits`);
        return data.cast;
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchActorDetails = async (actorId) => {
    try {
        const { data } = await serverApi.get(`/person/${actorId}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};