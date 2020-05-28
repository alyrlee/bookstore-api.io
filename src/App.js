import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
// import FilterableList from './FilterableList';
// import Header from './Header';
// import FilterOptions from './FilterOptions';
// import Book from '/Users/ashleylee/Desktop/THINKFUL/Projects/bookstore-api.io/src/Book.js'
// import BookList from './bookList'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      items: [],
      isPrintType: "all",
      isBookType: "no-filter",
      searchEntry: "",
      showAddForm: false,
      data: null,
      error: null,
      query: '',

    };
}


setPrintSelected(sel) {
  console.log("Print Selected:", sel);
  this.setState({
    isPrintType: sel
  });
}

setBookSelected(sel) {
  console.log(" BOOK selected:", sel);
  this.setState({
    isBookType: sel
  });
}

searchInput(inp) {
  console.log("Search entry is: ", inp);
  this.setState({
    searchEntry: inp
  });
}

handleSubmit(e) {
  e.preventDefault();
  console.log("submit handled!");
}
//('https://www.googleapis.com/books/v1/volumes?q={searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM')
componentDidMount(){
let searchEntry = `${this.state.searchBox}`;  
const baseUrl = 'https://www.googleapis.com/books/v1/volumes/'


const key='AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM'
// `https://www.googleapis.com/books/v1/volumes?q=${searchEntry}&key=AIzaSyAMGQrqEdaJOMug4ThmQqLhVTqoseQaLUM`;

let printType = `${this.state.isPrintType}`;
let filter = 
this.state.isBookType !== "no-filter"
  ? `$filter=${this.state.isBookType}`
  : "";
const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}&key=${key}`;

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
  const selectOptions = {
    printSelections: ["all", "books", "magazines"],
    bookSelections: [
      "no-filter",
      "partial",
      "full",
      "free-ebooks",
      "paid-ebooks",
      "ebooks"
    ]
  }
  // ;

  const error = this.state.error ? (
    <div className="error">{this.state.error}</div>
  ) : (
    ""
  );
  return (
    <div className="App">
        {/* <Header />  */}
   {/* <header className="App-header">
             <h1>Google Book Search</h1>   
       </header>    */}
       <SearchBar /> 
       
    
      {/* <FilterableList
        // searchResults={searchResults}
        selectOptions={selectOptions}
        printonChange={sel => this.setPrintSelected(sel)}
        bookonChange={sel => this.setBookSelected(sel)}
        handleSubmit={e => this.handleSubmit(e)}
        bookOnChange={this.setBookSelected}
        handleSearchInput={inp => this.searchInput(inp)}
        handleSearchSubmit={ this.handleSearchSubmit }/>  */}
       {/* <BookList filterBookInfo={this.state.searchResults} />  */}
       {error}
       {/* <BookList /> */}

    </div>
  );
}
}

App.defaultProps = {
searchResults: []
};


export default App;
