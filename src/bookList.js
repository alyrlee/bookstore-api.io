import React, { Component } from "react";

import Book from './Book'

class BookList extends Component {

    constructor(props) {
        super(props);

   this.state = {    

    books: []

    };
}

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
          }
          description={info.volumeInfo.description}
          preview={info.volumeInfo.previewLink}
        />
      ));
      console.log(bookInfo, "bookList results");
      return <div className="BookList">{bookInfo}</div>;
    }
}
  
// BookList.defaultProps = {
//     searchResults: [],
//     bookInfo: [],
//     BookInfo: []
//     };

  export default BookList;
