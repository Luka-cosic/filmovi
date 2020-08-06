import React from 'react';
import Movie from './Movie'

const Movies = ({movies})=>{

    console.log(movies);
    

    const allMovies = movies.map(movie=>{
        return(
            <Movie movie={movie} />
        )
    })
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-4">
                            {allMovies}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
}

export default Movies