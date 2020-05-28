import React, { Component } from 'react';
import './FilterableList.css';
import BookType from './bookType';
import PrintType from './printType';
// import BookList from './bookList';
// import Book from './Book';

export default class FilterableList extends Component {
  render() {
      console.log(this.props.searchResuls);

return (
  <div className="BookSearch">
    {/* <header className="header">
    </header> */}




        <label htmlFor="printType">Print Type:</label>
        <PrintType
          selectOptions={this.props.selectOptions}
          printOnCHnage={this.props.printOnChange}
        />

        <label htmlFor="bookType">Book Type:</label>
        <BookType
          selectOptions={this.props.selectOptions}
          bookOnChange={this.props.bookOnChange}
        />
        {/* <BookList searchResults={this.props.searchResults} /> */}
   </div>
);
}
}