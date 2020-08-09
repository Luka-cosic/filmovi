import React from 'react';
import { Component } from 'react';


class Jumbotron extends Component {

    state = {
        search: "",
        years : []
    }

    // Unos teksta iz inputa u state.search

    searchMovie = (e) => {
        this.setState({ search: e.target.value})
    }

    // Klikom na dugme "Search" slanje trazene vrednosti u App.js

    searchBtn = () => {
        this.props.searchBtn(this.state.search);
        this.setState({ search: "" })
    }

    // Sortiranje podataka od manjih godina ka vecim

    sortByYearsMin = () => {
       let sortYears = this.props.movies.sort(function(a, b){return a.Year - b.Year})
       this.setState({ years : [...this.state.years,sortYears] })
       this.props.sortYears(this.state.years)
    }

    // Sortiranje pokaka od vecih godina ka manjim

    sortByYearsMax = () => {
        let sortYears = this.props.movies.sort(function(a, b){return b.Year - a.Year})
        this.setState({ years : [...this.state.years,sortYears] })
        this.props.sortYears(this.state.years)
     }

    //  Sortiranje podataka od A - Z

    sortByTitleA = () => {
       let sortTitle = this.props.movies.sort(function(a, b){
            let x = a.Title.toLowerCase();
            let y = b.Title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
       })
       this.props.sortYears(sortTitle)
     }

    //  Sortiranje podataka od Z - a

     sortByTitleZ = () => {
        let sortTitle = this.props.movies.sort(function(a, b){
             let x = a.Title.toLowerCase();
             let y = b.Title.toLowerCase();
             if (x < y) {return 1;}
             if (x > y) {return -1;}
             return 0;
        })
        this.props.sortYears(sortTitle)
      }
    

    render() {
        return (
            
            <div className="jumbotron text-center">
                <h3 className="display-4">Filmovi</h3>
                <div className="row text-center">
                    <div className="col-6 offset-3 ">
                        <div className="input-group">
                            <input onChange={this.searchMovie} type="text" value={this.state.search} className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button onClick={this.searchBtn} className="btn btn-primary btn-sm">Search</button>
                            </div>
                        </div>

                    </div>
                </div><br />
                <div className="row">
                    <div className="col-6 ">
                        <button onClick={() => { this.props.homePage() }} className="btn btn-warning btn-lg float-right">Home Page</button>
                    </div>
                    <div className="col-6">
                        <div className="btn-group float-left">
                            <button type="button" className="btn btn-success btn-lg ">Sort by</button>
                            <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                                <button onClick={this.sortByTitleA} id="Title" className="dropdown-item ">Title A-Z</button>
                                <button onClick={this.sortByTitleZ} id="Title" className="dropdown-item ">Title Z-A</button>
                                <button onClick={this.sortByYearsMin} id="Years" className="dropdown-item" >Years min+</button>
                                <button onClick={this.sortByYearsMax} id="Years" className="dropdown-item" >Years max-</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Jumbotron;