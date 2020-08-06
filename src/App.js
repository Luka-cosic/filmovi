import React from 'react'
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Jumbotron from './components/Jumbotron';
import Movies from './components/Movies';


class App extends Component{

    state = {
        movies : []
    }

    componentDidMount(){
        fetch("http://www.omdbapi.com/?apikey=ca4e0d91&s=home")
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                movies : data
            })
        })
    }
    
    
    render(){
        return(
            <>
            <Jumbotron />
            <Movies movies = {this.state.movies}/>
            </>
        )
    }
}

export default App;