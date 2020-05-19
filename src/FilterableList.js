import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

class FilterableList extends Component {
  render() {
    
//.map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
     const book  = this
      .props
      .book
      .map((book, i ) => 
 
      <Book 
         { ...book} key={i}/>);

    return (
      <div className="FilterableList">
      <ul>
        {book}
      </ul>  
      </div>
    );
  }
}

FilterableList.defaultProps = {
  Book: []
};


export default FilterableList;