import React, { Component } from 'react';
import './FilterableList.css';
import BookType from './bookType';
import PrintType from './printType';
import BookList from './bookList';
// import Book from './Book';

export default class FilterableList extends Component {
  render() {
      console.log(this.props.searchResuls);

return (
  <div className="BookSearch">
    <header className="header">
    </header>
}

<form
          className="googleBookSearch__form"
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="henry"
            onChange={inp => this.props.handleSearchInput(inp.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>

        <label htmlFor="printType">Print Type:</label>
        <PrintType
          selectOptions={this.props.selectOptions}
          printOnCHnage={this.props.printOnChange}
        />

        <label htmlFor="bookType">Book Type:</label>
        <BookType
          selectOptions={this.props.selectOptions}
          bo
          okOnChange={this.props.bookOnChange}
        />
        <BookList searchResuls={this.props.searchResuls} />
   </div>
);
}
}