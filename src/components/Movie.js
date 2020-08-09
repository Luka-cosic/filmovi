import React from 'react'

const Movie = ({movie, getImdbId}) => {
    
    return(
        <div className="card mb-3 text-center">
            <div className="card-header"><h4>{movie.Title}</h4></div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img width="100px" height="150px" src={movie.Poster} alt=""/>
                    </div>
                    <div className="col-6">
                        <h5>Year : {movie.Year}</h5>
                        <label htmlFor="">
                        <h5>Actors :</h5><p>{movie.Actors.substr(0-20)} ...</p>
                        </label>
                         
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={()=>{getImdbId(movie)}} className="btn btn-info btn-sm float-right"
                 data-toggle="modal" data-target="#exampleModalCenter">Read More</button>
            </div>

        </div>
    )
}

export default Movie;
