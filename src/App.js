import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import FilterableList from './FilterableList';
import Book from './Book'; 
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Book: [],
      showAddForm: false
    };
  }

 // https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM
 //const url = 'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key={yourAPIKey}';
 // const yourAPIKey= 'AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM';


//  const baseUrl = 'https://www.googleapis.com/books/v1/volumes/'
//     const key = 'AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM'
//     const  = this.formatQuery( baseUrl, searchInput, key );

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes/';
    const options = {
      method: 'GET',
      headers: {
      "Authorization": "AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM",
      "Content-Type": "application/json"
      }
    }; 

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
   .then(res=> res.jscon())
   .then(data => {
      this.setState({
        book: data,
        error: null
      });
   })   
   .catch(err => {
      this.setState({
         error: err.message
      });
   });

  }

  render () {
    // 

    return (
        <div className="App">
          { page }
        </div>
      );
    }
  }

  export default App; 