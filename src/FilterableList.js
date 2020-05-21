import React, { Component } from 'react';
import './FilterableList.css';
import Book from './Book';

export default class FilterableList extends Component {
  render() {
    const bookInfo = this.props.filterBookInfo.map((info, i) => (
      <Book
        key={i}
        title={info.volumeInfo.title}
        image={
          "imageLinks" in info.volumeInfo
            ? info.volumeInfo.imageLinks.thumbnail
            : ""
        }
        author={
          "authors" in info.volumeInfo
            ? `Author(s): ` + info.volumeInfo.authors 
            : ""
        }
        price={
          "listPrice" in info.saleInfo
            ? `Price: $` + info.saleInfo.listPrice.amount
            : ""
          //info.saleInfo.saleability
        }
        description={info.volumeInfo.description}
        preview={info.volumeInfo.previewLink}
      />
    ));
    console.log(bookInfo, "FilterableList results");
    return <div className="FilterableList">{bookInfo}</div>;
  }
}