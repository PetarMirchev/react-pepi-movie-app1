import React from 'react';

//Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';

import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId);
    

    if(error) return <div>Something went wrong.....</div>;
    if(loading) return <Spinner />

    return (

        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar

                

             />
            
        </>

    )

};

export default Movie;