import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  } 

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=aB1UcKB2LkeuVi5v6whqFZFRSDY2XvGI')
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data})
      })
      .catch( err => {
        console.log("Error fetching and parsing data ", err );
      }  );
    
  }

  render() { 
    console.log(this.state.gifs, "gifs")
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
