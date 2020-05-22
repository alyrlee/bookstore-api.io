import React, { Component } from "react";


class BookList extends Component {
    render () {
        const booklist = this
        .props
        .booklist
        .map((booklist, i) => <BookList
        {...booklist} key={i}/>);

        return (
            <div className="bookList">
            {booklist}
          </div>
        );
    }
}

BookList.defaultProps = {
    booklist: []
  };

export default BookList