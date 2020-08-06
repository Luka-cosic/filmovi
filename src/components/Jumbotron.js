import React from 'react';
import { Component } from 'react';

class Jumbotron extends Component{
    render(){
        return(
            <div className="jumbotron text-center">
                <h3 className="display-4">Filmovi</h3>
                <div className="row text-center">
                    <div className="col-6 offset-3 ">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary btn-sm">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;