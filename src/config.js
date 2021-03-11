// Configuration for TMDB
// Read more about the API in: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ca3d69ee336e43d8099727f0d7ce3859';


const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const YOUTUBE_LINK_URL = 'https://www.youtube.com/watch?v=' ;


const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { 
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL, API_KEY, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE,
    YOUTUBE_LINK_URL
};
