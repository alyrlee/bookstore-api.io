import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
// import FilterableList from './FilterableList';
// import Header from './Header';
// import FilterOptions from './FilterOptions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchEntry: "",
      showAddForm: false,
      data: null,
      query: '',

    };
}

//('https://www.googleapis.com/books/v1/volumes?q={searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM')
componentDidMount(){
  let searchEntry = `${this.state.searchEntry}`;  
const baseUrl =
`https://www.googleapis.com/books/v1/volumes?q=${searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM`;
let printType = `$printType=${this.state.isPrintType}`;
let filter =
this.state.isBookType !== "no-filter"
  ? `$filter=${this.state.isBookType}`
  : "";


const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}`;

console.log(queryString);

fetch(queryString)
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error();
})
.then(responseJSon => {
  console.log(responseJSon);
  this.setState({
    searchResults: responseJSon.items
  });
})
.catch(e => {
  console.log(e);
  this.setState({ error: e.message });
});
}


render() {
  return (
    <div className="App">
       <header className="App-header">
            <h1>Google Book Search</h1>
          </header>
      <SearchBar 
      handleSearchSubmit={ this.handleSearchSubmit }/>    
      </div>
);
}
}     


export default App;
