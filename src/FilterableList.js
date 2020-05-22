import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

export default class FilterableList extends Component {
  render() {
    const {book.volumeInfo} = this.props;
    const book.volumeInfo = '';
    if(this.props.hasOwnProperty('filterBookInfo')){
      bookInfo = this.props.filterBookInfo.map((volumeInfo, i) =>
    
    // const bookInfo = this.props.filterBookInfo.map((info, i) => (
      <Book
        key={i}
        title={volumeInfo.title}
        image={
          "imageLinks" in volumeInfo
            ? volumeInfo.imageLinks.thumbnail
            : ""
        }
        author={
          "authors" in volumeInfo
            ? `Author(s): ` + volumeInfo.authors 
            : ""
        }
        price={
          "listPrice" in volumeInfo.saleInfo
            ? `Price: $` + volumeInfo.saleInfo.listPrice.amount
            : ""
          //info.saleInfo.saleability
        }
        description={volumeInfo.description}
        preview={volumeInfo.previewLink}
      />
    );
    console.log(book.volumeInfo, "FilterableList results");
    return <div className="FilterableList">{book.volumeInfo}</div>;
  }
}
}