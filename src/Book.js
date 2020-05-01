import React, { Component } from 'react';
import './Book.css';
import FilterableList from './FilterableList'

class Book extends 
Component {
    render() {
     return(
        <div className="Book">
        <FilterableList Book={this.props.Book}/>
        </div> 
     );      
}
}

export default Book;

// https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters

// export default function Book( props ) {

//     const { book } = props;
        
//     let author;
//     let title;
//     let thumbnailUrl;
//     let previewUrl;
//     let snippet;
//     let cost;

//     return (
//         <div className="book_container">
//             <a href={ previewUrl } target="blank">
//                 <li className="book_li">
//                     <img src={ thumbnailUrl } className="book_image" alt={`The cover of the book titled ${title}`}></img>
//                     <div className="book_info">
//                         <h2 className="book_title">{ title }</h2>
//                         <h4 className="book_author">{ author }</h4>
//                         <div className="book_cost">{ cost }</div>
//                         <p className="book_snippet">{ snippet }</p>
//                     </div>
//                 </li>
//             </a>
//         </div>
//     );
// } 