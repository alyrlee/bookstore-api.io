import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

class FilterableList extends Component {
  render() {
    const bookInfo = this.props.filterBookInfo.map((info, i) => (
      <Book
        key={i}
        title={info.volumeInfo.title}
        book_author={author.props}
        book_cost= {cost.props}
        book_snippet={ snippet.props }
        />
    ));
return (
  <div className="FilterableList">
      <ul>
        {bookInfo}
      </ul>  
      </div>
 );      
}
}

FilterableList.defaultProps = {
  Book: []
};


export default FilterableList;