import axios from 'axios';

const apiKey = '15bff328286beedc36d2ae75dc39c48e';
const searchMoviesUrl = '/search/movie';
const movieUrl = '/movie';
const actorUrl = '/person';

const serverApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
    }
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

export const fetchMovieDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`${movieUrl}/${id}`);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchCast = async (id) => {
    try {
        const { data } = await serverApi.get(`${movieUrl}/${id}/credits`);
        console.log('fetch cast data:', data)
        const imgUrl = 'https://image.tmdb.org/t/p/w200/';

        const modifiedData = data.cast.map((cast) => ({
            id: cast.id,
            character: cast.character,
            name: cast.name,
            img: `${imgUrl}${cast.profile_path}`,
        }))
        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchActorDetails = async (id) => {
    try {
        const { data } = await serverApi.get(`${actorUrl}/${id}/movie_credits`);
        console.log('data:', data)
        const posterUrl = 'https://image.tmdb.org/t/p/w200/';
        const modifiedData = data.cast.map((m) => ({
            id: m.id,
            credit_id: m.credit_id,
            title: m.title,
            character: m.character,
            backPoster: `${posterUrl}${m.backdrop_path}`,
            poster: `${posterUrl}${m.poster_path}`,
        }))

        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}