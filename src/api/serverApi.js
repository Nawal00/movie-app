import axios from 'axios';

const serverApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: '15bff328286beedc36d2ae75dc39c48e' }
});


export const searchMovie = async (searchMovie) => {
    try {
        const response = await serverApi.get(`/search/movie?query=${searchMovie}`)
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

export const fetchMovieDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`/movie/${id}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchTvShowDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`/tv/${id}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchCast = async (id, type) => {
    try {
        const { data } = await serverApi.get(`${type}/${id}/credits`);
        return data.cast;
    }
    catch (err) {
        console.log(err);
    }
};

export const fetchActorMovieCredits = async (id) => {
    try {
        const { data } = await serverApi.get(`/person/${id}/movie_credits`);
        return data.cast;
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchActorDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`/person/${id}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};