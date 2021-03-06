import React, { useState } from 'react';
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    IMAGE_BASE_URL
} from '../config';

//import components

import SearchBar from './elements/SearchBar';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';

//custom hooks
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [
        { 
            state : { movies, currentPage},
            loading, 
            error, 
        }, 
        fetchMovies, 
    ]   = useHomeFetch(searchTerm);

    const searchMovies = search => {
        const endPoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endPoint);

    }

    const loadMoreMovies = () => {

        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}$page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage+1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);

    }


    if(error) return <div>Something went wrong..... (Опааа, кво стана..?)</div>;
    if(!movies[0]) return <Spinner/>;

    return (
        <>
      
            <SearchBar callback={searchMovies} />

            <Grid header={searchTerm ? 'Search Result':'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                :  NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))

                }
            </Grid>
            {loading && <Spinner />}
            <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
        </>
    )

}

export default Home;