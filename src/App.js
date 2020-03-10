import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=`) 
    .then(responseData => {
      this.setState({
        gifs: responseData.data.data, 
        loading: false })
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
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            :<GifList data={this.state.gifs} />
          }
          
        </div>
      </div>
    );
  }
}
