import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

class FilterableList extends Component {
  render() {
    
//.map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
     const list  = this
      .props
      .list
      .map((list, i ) => 
 
      <Book 
         { ...list} key={i}/>);

    return (
      <div className="FilterableList">
      <ul>
        {list}
      </ul>  
      </div>
    );
  }
}

FilterableList.defaultProps = {
  Book: []
};


export default FilterableList;