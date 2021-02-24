import axios from 'axios';

const apiKey = '15bff328286beedc36d2ae75dc39c48e';

const guiApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
    }
});

const searchMoviesUrl = `/search/movie`;


export const searchMovie = async (searchMovie) => {
    try {
        const response = await guiApi.get(`${searchMoviesUrl}?query=${searchMovie}`)
        console.log('response:', response.data.results);
    } catch (err) {
        console.log(err);
    }

}; 