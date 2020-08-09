import React from 'react'
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Jumbotron from './components/Jumbotron';
import Movies from './components/Movies';
import './App.css'
import Modal from './components/Modal';
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component{

    state = {
        movies : [],
        currentMovie : {}
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/Luka-cosic/filmovi/master/data.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                movies : data
            })
        })
    }

    // Vracanje na pocetnu stranicu nakon Search-a

    homePage = () => {
        fetch("https://raw.githubusercontent.com/Luka-cosic/filmovi/master/data.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                movies : data
            })
        })
    }

    // Klikom na dugme "Search" prijem podatka iz inputa i filterovanje kroz bazu na osnovu njega.
    // Dugme "Search se nalazi u Jumbotron komponenti"

    searchBtn = (input) => {
        let inputRegEx = new RegExp(input,'g')
        let filtered = [...this.state.movies].filter(ell => ell.Title.match(inputRegEx) == input || ell.Year === input || ell.Actors.match(inputRegEx) == input );
        this.setState({ movies : filtered });
              
    }
    
    // Klikom na dugme "Read More" prijem objekta i unos istog u state.currentMovie.
    // Objekat "currentMovie" se prosledjuje u komponentu Modal.

    getImdbId = (movie) => {
        this.setState({
            currentMovie : movie
        })
    }

    //Klikom na dugme "Sort by" prijem sortiranog niza i prikaz na stranici.
    // Dugme "Sort by" se nalazi u Jumbotron komponenti
    sortYears = (sort) => {
        this.setState({ movie : sort });    
    }
    
    
    
    
    render(){
        return(
            <>
            <BrowserRouter>
                <Jumbotron searchBtn={this.searchBtn} homePage={this.homePage} movies = {this.state.movies} sortYears = {this.sortYears} />
                <Modal currentMovie = {this.state.currentMovie} />
                <Route path="/" exact>
                    <Movies movies = {this.state.movies} getImdbId={this.getImdbId}/>
                </Route>
            </BrowserRouter>
            
            </>
        )
    }
}

export default App;