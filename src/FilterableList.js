import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

class FilterableList extends Component {
  render() {
    const { bookResults } = this.props;
    const list = bookResults.items
    .map(( book, index ) => <book 
                                book={ book } 
                                key={ index } />); 
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