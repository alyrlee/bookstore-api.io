import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

class FilterableList extends Component {
  render() {
    const bookInfo = this.props.filterBookInfo.map((info, i) => (
      <Book
        key={i}
        title={info.volumeInfo.title}
        book_author={"authors" in info.volumeInfo}
        book_cost= {"cost" in info.volumeInfo}
        book_snippet={ "snippet" in info.volumeInfo.textSnippet}
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