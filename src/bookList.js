import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  render() {
    
    const bookInfo = this.book.volumeInfo;

     this.props.filterBookInfo.map((info, i) => (
      
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
        }
        description={info.volumeInfo.description}
        preview={info.volumeInfo.previewLink}
      />
    ));
    console.log(bookInfo, "bookList results");
    return <div className="BookList">{bookInfo}</div>;
  }
}

