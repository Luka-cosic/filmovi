import React from 'react';
import Movie from './Movie'

const Movies = ({movies, getImdbId})=>{
    
    const allMovies = movies.map(movie=>{
        movie.id = Math.floor(Math.random()*(10000-10)+10)
        return(
            <div className="col-4">
                <Movie movie={movie} key = {movie.id} getImdbId={getImdbId}/>          
            </div>
            
        )
    })
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                    {allMovies}      
                    </div>
                </div>
            </div>
        </div>
        )   
}

export default Movies