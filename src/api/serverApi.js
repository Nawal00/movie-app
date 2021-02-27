import axios from 'axios';

const apiKey = '15bff328286beedc36d2ae75dc39c48e';
const searchMoviesUrl = '/search/movie';
const searchKeyWordUrl = '/search/multi';
const movieUrl = '/movie';
const tvShowUrl = '/tv';
const actorUrl = '/person';

const serverApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: apiKey, }
});


export const searchMovie = async (searchMovie) => {
    try {
        const response = await serverApi.get(`${searchMoviesUrl}?query=${searchMovie}`)
        return response.data.results;
    }
    catch (err) {
        console.log(err);
    }
};

export const searchAllTypes = async (searchKey) => {
    try {
        const response = await serverApi.get(`${searchKeyWordUrl}?query=${searchKey}`)
        return response.data.results;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`${movieUrl}/${id}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchTvShowDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`${tvShowUrl}/${id}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchCast = async (id, type) => {
    try {
        const { data } = await serverApi.get(`${type}/${id}/credits`);
        return data.cast;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchActorDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`${actorUrl}/${id}/movie_credits`);
        return data.cast;
    }
    catch (error) {
        console.log(error);
    }
}